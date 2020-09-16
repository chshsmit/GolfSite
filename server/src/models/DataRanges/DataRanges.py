"""
DataRanges.py
@author Christopher Smith
@description Ranges of data in the spreadsheet
@created 2020-09-14T15:39:27.987Z-07:00
@last-modified 2020-09-16T14:37:53.107Z-07:00
"""

from enum import Enum


class DataRanges(Enum):
    FULL_COURSES = ("fullCourses", "TabularData!A2:D", "Full Courses")
    EXECUTIVE_COURSES = ("executiveCourses", "TabularData!F2:I", "Executive Courses")
    OVER_UNDER_FULL_PROGRESSION = (
        "overUnderFullProgress",
        "TabularData!K2:N",
        "Over/Under Full Progression",
    )
    OVER_UNDER_EXECUTIVE_PROGRESSION = (
        "overUnderExecProgress",
        "TabularData!P2:S",
        "Over/Under Executive Progression",
    )
    OVER_UNDER_OVERALL = ("overallOverUnder", "TabularData!U2:X", "Over/Under Overall")
    HCP_DIFF_PER_ROUND = ("hdcpDiffPerRound", "TabularData!Z2:AD", "Handicap Per Round")
    COURSE_RATINGS = ("courseRatings", "TabularData!AF2:AH", "Course Ratings")

    @classmethod
    def _missing_(cls, value):
        for item in cls:
            if item.value[0] == value:
                return item
        return super()._missing_(value)


if __name__ == "__main__":
    print(DataRanges("fullCourses").value)
