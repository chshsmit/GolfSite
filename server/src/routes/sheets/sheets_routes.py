"""
sheets_routes.py
@author Christopher Smith
@description Routes to retrieve data from google sheets
@created 2020-09-15T13:26:16.262Z-07:00
@last-modified 2020-09-19T14:21:42.464Z-07:00
"""

import re

from flask import Blueprint, jsonify, request

from src.models.DataRanges.DataRanges import DataRanges
from src.models.GoogleAuthenticator.GoogleAuthenticator import GoogleAuthenticator
from src.models.GoogleSheetsAccessor.GoogleSheetsAccessor import GoogleSheetsAccessor
from src.routes.sheets.sheets_routes_utils import all_round_data, course_info
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


@sheets.route("/sheets/roundData", methods=["GET"])
def round_data():
    all_rounds = all_round_data()
    return jsonify(list(all_rounds.values())), 200


@sheets.route("/sheets/roundData/<wanted_course>")
def single_round_data(wanted_course: str):
    wanted_date = request.args.get("date")
    score = request.args.get("score")

    try:
        data_for_wanted_round = all_round_data(wanted_course=wanted_course)[
            f"{wanted_date}-{wanted_course}-{score}"
        ]
        return jsonify(data_for_wanted_round), 200
    except KeyError:
        return jsonify({"error": "Sorry that round does not exist"}), 404


@sheets.route("/sheets/courses", methods=["GET"])
def all_courses():
    all_course_info = course_info()
    return jsonify(all_course_info), 200


@sheets.route("/sheets/courses/<course>", methods=["GET"])
def single_course(course):
    single_course_info = course_info(course)
    return (
        jsonify(single_course_info),
        200 if "error" not in single_course_info else 404,
    )
