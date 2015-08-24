// The web-os Boot script
var express = require('express');
//start boot
//files
var checks = require('./libs/checks/checkFile.js');
function startboot(boottype) {
  checks.checkInstances("ok");
}
startboot("ok");
