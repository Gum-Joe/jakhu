#!/usr/bin/bash
# A script to download and install mongodb
echo Downloading MongoDB, please wait
mkdir -vp tmp/packages packages/mongo
curl --silent https://fastdl.mongodb.org/win32/mongodb-win32-i386-3.0.6.zip?_ga=1.80391703.1629961069.1442594180 > tmp/packages/mongo.zip
node scripts/unzipm.js
