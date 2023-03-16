#!/bin/bash
# This is a script that takes in and send a request to that URL to display the size of the body response

curl -sI "$1" | grep "Content-Length" | cut -d ' ' -f 2
