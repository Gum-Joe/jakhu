// The web-os Boot script
var express = require('express');
var git = require('nodegit');
var exec = require('child_process').exec;
var boot = require('./index.js');
exports.boot = require('./index.js');
boot.properties.git.getCommits;

var getCommits = function getCommits(x) {
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
      console.log(stdout);
  });
}
//start boot
function startboot(boottype) {
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
    console.log("");
      console.log("Web-OS");
      console.log("v1.0.0 build "+ stdout);
      boot.checks.checkFiles("ok");
      var app = require("../app.js");
      app.start();
  });
}
startboot("ok");
