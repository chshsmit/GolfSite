"""
GoogleAuthenticator.py
@author Christopher Smith
@description Authentication object for the Google API
@created 2020-09-14T15:17:59.190Z-07:00
@last-modified 2020-09-15T13:38:01.175Z-07:00
"""

import os.path
import pickle

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow


class GoogleAuthenticator:
    def __init__(self):
        self.scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
        self.credentials = self.__generate_credentials()

    def __generate_credentials(self):
        creds = None
        # The file token.pickle stores the user's access and refresh tokens, and is
        # created automatically when the authorization flow completes for the first
        # time.
        if os.path.exists("src/models/GoogleAuthenticator/token.pickle"):
            with open("src/models/GoogleAuthenticator/token.pickle", "rb") as token:
                creds = pickle.load(token)
        # If there are no (valid) credentials available, let the user log in.
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(
                    "src/models/GoogleAuthenticator/credentials.json", self.scopes
                )
                creds = flow.run_local_server(port=0)
            # Save the credentials for the next run
            with open("src/models/GoogleAuthenticator/token.pickle", "wb") as token:
                pickle.dump(creds, token)

        return creds
