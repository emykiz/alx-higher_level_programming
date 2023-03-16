#!/bin/bash
# A bash script that delete request to the URL as the first argument and display response

curl -sX DELETE "$1"
