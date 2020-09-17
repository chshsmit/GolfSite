"""
metadata_routes.py
@author Christopher Smith
@description 
@created 2020-09-16T14:32:24.310Z-07:00
@last-modified 2020-09-16T17:24:40.004Z-07:00
"""

from flask import Blueprint, jsonify

from src.models.DataRanges.DataRanges import DataRanges

metadata = Blueprint("metadata", __name__)


@metadata.route("/graphOptions", methods=["GET"])
def graph_options():

    options = [
        {"value": item.value["value"], "label": item.value["label"]}
        for item in DataRanges
    ]

    return jsonify(options), 200
