#!/usr/bin/python3
"""Send request"""

import urllib.request
import urllib.error
import sys


def sender():
    """sender"""
    try:
        with urllib.request.urlopen(sys.argv[1]) as res:
            html = res.read()
            print(html.decode("utf-8"))
    except urllib.error.HTMLError as e:
        print("Error code: {}".format(e.code))


if __name__ == "__main__":
    sender()
