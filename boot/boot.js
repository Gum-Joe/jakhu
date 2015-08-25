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
// TODO: Create boot types (safemode, full, recovery)
exports.startboot = function startboot(boottype) {
  boot.checks.checkFiles("ok");
  var app = require("../app.js");
  app.start();
}
