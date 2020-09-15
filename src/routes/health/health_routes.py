"""
health_routes.py
@author Christopher Smith
@description Base ping routes and healthchecks
@created 2020-09-15T13:06:08.386Z-07:00
@last-modified 2020-09-15T13:09:56.646Z-07:00
"""

from flask import Blueprint, jsonify

health = Blueprint("health", __name__)


@health.route("/ping", methods=["GET"])
def ping():
    """
    Description:
        Base ping route to ensure server is running
    """
    return jsonify({"status": "ok"}), 200
