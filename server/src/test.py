from flask import Flask, jsonify

from DataRanges import DataRanges
from GoogleAuthenticator import GoogleAuthenticator
from GoogleSheetsAccessor import GoogleSheetsAccessor

app = Flask(__name__)


google_auth = GoogleAuthenticator()
SheetsAccessor = GoogleSheetsAccessor()


@app.route("/home", methods=["GET"])
def home():

    print(DataRanges.FULL_COURSES)

    data = SheetsAccessor.get_data_for_range(
        credentials=google_auth.credentials,
        range=DataRanges.OVER_UNDER_FULL_PROGRESSION.value,
    )

    return jsonify(data), 200


if __name__ == "__main__":
    app.run(debug=True)
