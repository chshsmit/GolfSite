"""
sheets_routes_utils.py
@author Christopher Smith
@description Utility functions for sheets routes
@created 2020-09-19T14:11:42.668Z-07:00
@last-modified 2020-09-19T15:02:23.243Z-07:00
"""

import re

from src.models.GoogleAuthenticator.GoogleAuthenticator import GoogleAuthenticator
from src.models.GoogleSheetsAccessor.GoogleSheetsAccessor import GoogleSheetsAccessor
from src.utils.utils import camel_case


def all_round_data(wanted_course="noCourseProvided"):

    GoogleAuth = GoogleAuthenticator()
    SheetsAccessor = GoogleSheetsAccessor()

    rounds = [
        item
        for item in SheetsAccessor.get_raw_data_for_range(
            credentials=GoogleAuth.credentials, range="FullCourses!A1:X"
        )
        if item
    ]

    base_keys = rounds[0][3:]
    iterator = iter(rounds[1:])

    all_rounds = {}
    for x in iterator:
        new_round = {}

        par_info = x
        stroke_info = next(iterator)[3:]
        over_under_info = next(iterator)[3:]
        putts_info = next(iterator)[3:]
        penalties_info = next(iterator)[3:]
        gir_info = next(iterator)[3:]

        if (
            camel_case(par_info[1]) != wanted_course
            and wanted_course != "noCourseProvided"
        ):
            continue

        new_round = {
            "date": par_info[0],
            "course": par_info[1],
            "par": {},
            "strokes": {},
            "overUnder": {},
            "putts": {},
            "penalties": {},
            "gir": {},
        }

        for key, par, strokes, over_under, putts, penalties, gir in zip(
            base_keys,
            par_info[3:],
            stroke_info,
            over_under_info,
            putts_info,
            penalties_info,
            gir_info,
        ):
            new_round["par"][camel_case(key)] = int(par)
            new_round["strokes"][camel_case(key)] = int(strokes)
            new_round["overUnder"][camel_case(key)] = int(over_under)
            new_round["putts"][camel_case(key)] = int(putts)
            new_round["penalties"][camel_case(key)] = int(penalties) if penalties else 0
            new_round["gir"][camel_case(key)] = (
                gir if camel_case(key) not in ["total", "in", "out"] else int(gir)
            )

        all_rounds[
            f"{new_round['date']}-{camel_case(new_round['course'])}-{new_round['strokes']['total']}"
        ] = new_round

    return all_rounds


def course_info(wanted_course="noCourseProvided") -> dict:

    GoogleAuth = GoogleAuthenticator()
    SheetsAccessor = GoogleSheetsAccessor()

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
            "slope": par_info["slope"],
            "name": par_info["courseName"],
            "parInfo": {},
            "yardageInfo": {},
            "handicapInfo": {},
        }

        for key in par_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["parInfo"][f"hole{hole_num}Par"] = par_info[key]

        course_info["parInfo"]["totalPar"] = par_info["totals"]
        course_info["parInfo"]["frontNine"] = par_info["out"]
        course_info["parInfo"]["backNine"] = par_info["in"]

        for key in yardage_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["yardageInfo"][f"hole{hole_num}Yardage"] = yardage_info[key]

        course_info["parInfo"]["totalPar"] = yardage_info["totals"]
        course_info["parInfo"]["frontNine"] = yardage_info["out"]
        course_info["parInfo"]["backNine"] = yardage_info["in"]

        for key in handicap_info.keys():
            if hole_pattern.match(key):
                hole_num = key.split(" ")[1]
                course_info["handicapInfo"][f"hole{hole_num}Handicap"] = handicap_info[
                    key
                ]

        all_course_info[par_info["courseName"]] = course_info

    if wanted_course != "noCourseProvided":
        split_course_name = [s for s in re.split("([A-Z][^A-Z]*)", wanted_course) if s]
        course_key = " ".join(split_course_name).title()
        try:
            return all_course_info[course_key]
        except KeyError:
            return {"error": f"Invalid course: {wanted_course} provided"}
    else:
        return all_course_info
