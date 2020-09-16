"""
sheets_routes.py
@author Christopher Smith
@description Routes to retrieve data from google sheets
@created 2020-09-15T13:26:16.262Z-07:00
@last-modified 2020-09-15T14:45:25.806Z-07:00
"""

import json

from flask import Blueprint, jsonify

from src.models.DataRanges.DataRanges import DataRanges
from src.models.GoogleAuthenticator.GoogleAuthenticator import GoogleAuthenticator
from src.models.GoogleSheetsAccessor.GoogleSheetsAccessor import GoogleSheetsAccessor

sheets = Blueprint("sheets", __name__)

GoogleAuth = GoogleAuthenticator()
SheetsAccessor = GoogleSheetsAccessor()


@sheets.route("/sheets/<wanted_data>", methods=["GET"])
def sheets_data(wanted_data: str):
    """
    Decription:
        Getting data from a specific range in the google sheet
    """

    data = SheetsAccessor.get_data_for_range(
        credentials=GoogleAuth.credentials,
        range=DataRanges(wanted_data).value[1],
    )

    return jsonify(data), 200