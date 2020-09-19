"""
sheets_routes.py
@author Christopher Smith
@description Routes to retrieve data from google sheets
@created 2020-09-15T13:26:16.262Z-07:00
@last-modified 2020-09-19T11:28:53.621Z-07:00
"""

import json
import re

from flask import Blueprint, jsonify

from src.models.DataRanges.DataRanges import DataRanges
from src.models.GoogleAuthenticator.GoogleAuthenticator import GoogleAuthenticator
from src.models.GoogleSheetsAccessor.GoogleSheetsAccessor import GoogleSheetsAccessor
from src.utils.utils import camel_case

sheets = Blueprint("sheets", __name__)

GoogleAuth = GoogleAuthenticator()
SheetsAccessor = GoogleSheetsAccessor()


@sheets.route("/sheets/graphs/<wanted_data>", methods=["GET"])
def sheets_data(wanted_data: str):
    """
    Decription:
        Getting data from a specific range in the google sheet
    """

    try:
        range_data = DataRanges(wanted_data)
    except ValueError:
        return jsonify({"error": f"Invalid range: {wanted_data}"}), 400

    data = SheetsAccessor.get_data_for_range(
        credentials=GoogleAuth.credentials,
        range=range_data.value["range"],
    )

    return (
        jsonify(
            {
                "graphData": data,
                "axisData": {
                    "xAxis": range_data.value["xAxis"],
                    "yAxis": range_data.value["yAxis"],
                },
            }
        ),
        200,
    )


@sheets.route("/sheets/homepageData", methods=["GET"])
def homepage_data():
    putting_info = {
        key: value
        for key, value in SheetsAccessor.get_data_for_range(
            credentials=GoogleAuth.credentials, range="Graphs!I6:L9"
        )[1].items()
    }

    handicap_info = {
        key: value
        for key, value in SheetsAccessor.get_data_for_range(
            credentials=GoogleAuth.credentials, range="Graphs!N6:Q9"
        )[1].items()
    }

    last_three_rounds = SheetsAccessor.get_data_for_range(
        credentials=GoogleAuth.credentials, range=DataRanges.FULL_COURSES.value["range"]
    )[-3:]

    return (
        jsonify(
            {
                "putting": putting_info,
                "handicap": handicap_info,
                "lastThree": last_three_rounds,
            }
        ),
        200,
    )


@sheets.route("/sheets/courses", methods=["GET"])
def all_courses():
    all_course_info = course_info()
    return jsonify(all_course_info), 200


@sheets.route("/sheets/courses/<course>", methods=["GET"])
def single_course(course):
    single_course_info = course_info(course)
    return jsonify(single_course_info), 200


def course_info(wanted_course="noCourseProvided") -> dict:
    all_course_sheet_data = SheetsAccessor.get_data_for_range(
        credentials=GoogleAuth.credentials, range="Courses!A1:X"
    )

    course_iterator = iter([item for item in all_course_sheet_data if item])
    all_course_info = {}

    hole_pattern = re.compile("Hole*")

    for course in course_iterator:
        par_info = course
        yardage_info = next(course_iterator)
        handicap_info = next(course_iterator)

        course_info = {
            "slope": par_info["Slope"],
            "name": par_info["Course Name"],
            "parInfo": {},
            "yardageInfo": {},
            "handicapInfo": {},
        }

        for key in par_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["parInfo"][f"hole{hole_num}Par"] = par_info[key]

        course_info["parInfo"]["totalPar"] = par_info["Totals"]
        course_info["parInfo"]["frontNine"] = par_info["OUT"]
        course_info["parInfo"]["backNine"] = par_info["IN"]

        for key in yardage_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["yardageInfo"][f"hole{hole_num}Yardage"] = yardage_info[key]

        course_info["parInfo"]["totalPar"] = yardage_info["Totals"]
        course_info["parInfo"]["frontNine"] = yardage_info["OUT"]
        course_info["parInfo"]["backNine"] = yardage_info["IN"]

        for key in handicap_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["handicapInfo"][f"hole{hole_num}Handicap"] = handicap_info[
                    key
                ]

        all_course_info[par_info["Course Name"]] = course_info

    if wanted_course != "noCourseProvided":
        split_course_name = [s for s in re.split("([A-Z][^A-Z]*)", wanted_course) if s]
        course_key = " ".join(split_course_name).title()
        try:
            return all_course_info[course_key]
        except KeyError:
            return {"error": f"Invalid course: {wanted_course} provided"}
    else:
        return all_course_info
