"""
GoogleSheetsAccessor.py
@author Christopher Smith
@description Access range of data from Google Sheets API
@created 2020-09-14T15:29:20.508Z-07:00
@last-modified 2020-09-16T14:16:39.769Z-07:00
"""

from googleapiclient.discovery import build


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

        final_result = []
        for item in values[1:]:
            final_result.append(dict(zip(values[0], item)))

        for item in final_result:
            for key, value in item.items():
                try:
                    item[key] = int(value)
                except ValueError:
                    item[key] = value

        return final_result
