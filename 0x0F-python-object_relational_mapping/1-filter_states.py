#!/usr/bin/python3
"""
This is a script that  lists all states with a name starting with N (upper N) from the database hbtn_0e_0_usa
"""

import MySQLdb as db
from sys import argv

if __name__ == "__main__":
    db_connect = db.connect(host="localhost", port=3306,
                            user=argv[1], passwd=argv[2], db=argv[3])
    db_cursor = db_connect.cursor()
    db_cursor.execute("SELECT * FROM states WHERE name LIKE 'N%' \
            ORDER BY states.id ASC")
    row_selected = db_cursor.fetchall()

    for row in row_selected:
        print(row)
