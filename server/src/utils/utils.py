"""
utils.py
@author Christopher Smith
@description Utility functions that can be reused
@created 2020-09-18T22:35:53.064Z-07:00
@last-modified 2020-09-19T11:27:44.459Z-07:00
"""

from re import sub


def camel_case(string: str) -> str:
    """
    Description:
        Returns a string as camelCase

    Args:
        string (str): The string we want to convert

    Returns:
        str: formatted string in camelCase
    """

    string = sub(r"(_|-)+", " ", string).title().replace(" ", "")
    return string[0].lower() + string[1:]
