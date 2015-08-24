// The web-os Boot script
var express = require('express');
//start boot
//files
var checks = require('./libs/checks/checkFile.js');
function startboot(boottype) {
  console.log("Web-OS");
  console.log("v1.0.0");
  checks.checkFiles("ok");
  var app = require("../app.js");
  app.start();
}
startboot("ok");
