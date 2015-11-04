#!/usr/bin/bash

# Start Web-OS
bash -c export WDATE=$(date +'%m-%d-%Y')

nodemon bin/start | tee -a 2>&1 logs/log$WDATE.log
