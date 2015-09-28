#!/usr/env/node
var fs = require('fs');
var unzip = require('unzip');
// unzip
fs.createReadStream('tmp/packages/mongo.zip').pipe(unzip.Extract({ path: 'packages/mongo' }));
