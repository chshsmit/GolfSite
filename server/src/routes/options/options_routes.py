"""
options_routes.py
@author Christopher Smith
@description 
@created 2020-09-16T14:32:24.310Z-07:00
@last-modified 2020-09-18T16:03:34.950Z-07:00
"""

from flask import Blueprint, jsonify

from src.models.DataRanges.DataRanges import DataRanges

options = Blueprint("options", __name__)


@options.route("/options/graph", methods=["GET"])
def graph_options():

    options = [
        {"value": item.value["value"], "label": item.value["label"]}
        for item in DataRanges
    ]

    return jsonify(options), 200
