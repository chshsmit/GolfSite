"""
DataRanges.py
@author Christopher Smith
@description Ranges of data in the spreadsheet
@created 2020-09-14T15:39:27.987Z-07:00
@last-modified 2020-09-18T13:22:19.539Z-07:00
"""

from enum import Enum


class DataRanges(Enum):
    FULL_COURSES = {
        "value": "fullCourses",
        "range": "TabularData!A2:D",
        "label": "Full Courses",
        "xAxis": "Date",
        "yAxis": "Score",
    }
    EXECUTIVE_COURSES = {
        "value": "executiveCourses",
        "range": "TabularData!F2:I",
        "label": "Executive Courses",
        "xAxis": "Date",
        "yAxis": "Score",
    }
    OVER_UNDER_FULL_PROGRESSION = {
        "value": "overUnderFullProgress",
        "range": "TabularData!K2:N",
        "label": "Over/Under Full Progression",
        "xAxis": "Date",
        "yAxis": "Over/Under",
    }
    OVER_UNDER_EXECUTIVE_PROGRESSION = {
        "value": "overUnderExecProgress",
        "range": "TabularData!P2:S",
        "label": "Over/Under Executive Progression",
        "xAxis": "Date",
        "yAxis": "Over/Under",
    }
    OVER_UNDER_OVERALL = {
        "value": "overallOverUnder",
        "range": "TabularData!U2:X",
        "label": "Over/Under Overall",
        "xAxis": "Date",
        "yAxis": "Over/Under",
    }

    HDCP_DIFF_PER_ROUND = {
        "value": "hdcpDiffPerRound",
        "range": "TabularData!Z2:AE",
        "label": "Handicap Per Round",
        "xAxis": "Date",
        "yAxis": "Differential",
    }

    COURSE_RATINGS = {
        "value": "courseRatings",
        "range": "TabularData!AG2:AI",
        "label": "Course Ratings",
        "xAxis": "Course",
        "yAxis": "Rating",
    }

    @classmethod
    def _missing_(cls, value):
        for item in cls:
            if item.value["value"] == value:
                return item
        return super()._missing_(value)


if __name__ == "__main__":
    print(DataRanges("fullCourses").value)
