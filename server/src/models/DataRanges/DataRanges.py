"""
DataRanges.py
@author Christopher Smith
@description Ranges of data in the spreadsheet
@created 2020-09-14T15:39:27.987Z-07:00
@last-modified 2020-09-15T14:19:32.275Z-07:00
"""

from enum import Enum


class DataRanges(Enum):
    FULL_COURSES = ("fullCourses", "TabularData!A2:D")
    EXECUTIVE_COURSES = ("executiveCourses", "TabularData!F2:I")
    OVER_UNDER_FULL_PROGRESSION = ("overUnderFullProgress", "TabularData!K2:N")
    OVER_UNDER_EXECUTIVE_PROGRESSION = ("overUnderExecProgress", "TabularData!P2:S")
    OVER_UNDER_OVERALL = ("overallOverUnder", "TabularData!U2:X")
    HCP_DIFF_PER_ROUND = ("hdcpDiffPerRound", "TabularData!Z2:AD")
    COURSE_RATINGS = ("courseRatings", "TabularData!AF2:AH")

    @classmethod
    def _missing_(cls, value):
        for item in cls:
            if item.value[0] == value:
                return item
        return super()._missing_(value)


if __name__ == "__main__":
    print(DataRanges("fullCourses").value)
