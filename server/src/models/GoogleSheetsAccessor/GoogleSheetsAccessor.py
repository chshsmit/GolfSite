"""
GoogleSheetsAccessor.py
@author Christopher Smith
@description Access range of data from Google Sheets API
@created 2020-09-14T15:29:20.508Z-07:00
@last-modified 2020-09-19T13:39:29.024Z-07:00
"""

from googleapiclient.discovery import build

from src.utils.utils import camel_case


class GoogleSheetsAccessor:
    def __init__(self, spreadsheet_id="15A31tTs9e9UM-Qmkj1SGmNSJSyXyulJZiLz1d_Uz2tc"):
        self.spreadsheet_id = spreadsheet_id

    def get_data_for_range(self, credentials, range) -> list:
        service = build("sheets", "v4", credentials=credentials)

        # Call the sheets api
        sheet = service.spreadsheets()
        result = (
            sheet.values().get(spreadsheetId=self.spreadsheet_id, range=range).execute()
        )
        values = result.get("values", [])

        # Skip the first record since it just the title of the table in the sheet
        final_result = []
        response_keys = [camel_case(item.replace("/", " ")) for item in values[0]]

        for item in values[1:]:
            final_result.append(dict(zip(response_keys, item)))

        # We want to convert ints and floats when possible
        for item in final_result:
            for key, value in item.items():
                try:
                    item[key] = int(value)
                except ValueError:
                    try:
                        item[key] = round(float(value), 1)
                    except ValueError:
                        item[key] = value

        return final_result

    def get_raw_data_for_range(self, credentials, range) -> list:
        service = build("sheets", "v4", credentials=credentials)

        # Call the sheets api
        sheet = service.spreadsheets()
        result = (
            sheet.values().get(spreadsheetId=self.spreadsheet_id, range=range).execute()
        )
        values = result.get("values", [])

        return values
