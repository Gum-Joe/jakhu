// The web-os Boot script
var express = require('express');
//var git = require('nodegit');
var exec = require('child_process').exec;
var boot = require('./index.js');
exports.boot = require('./index.js');
var prompt = require('prompt');
var app = require("../app.js");
exports.oobe = require("../libs/setup/setup.js");
var oobe = require("../libs/setup/setup.js");
//boot.properties.git.getCommits;

var getCommits = function getCommits(x) {
  //This runs on startup - see bin/start
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
      console.log(stdout);
  });
}
//start boot
// TODO: Create boot types (safemode, full, recovery)
exports.boot = function startboot(boottype) {
  boot.checks.checkFiles("ok");
  oobe.first("ok");
  boot.recovery.rollback.createBackup("ok");
  boot.kernal.createTmp();
  boot.kernal.clean();
}

// TODO: Create boot types (safemode, full, recovery)
exports.startboot = function startboot(boottype) {
  app.start();
}

exports.startinput = function startinput(x){
  process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'stop\n') {
    boot.stop();
  }
  if(text === 'rs\n'){
    boot.monstop();
  }
});
}
