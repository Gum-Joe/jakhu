// The web-os Boot script
var execSync = require('child_process').execSync;
execSync('node ./usr/bin/check.config.js');

var express = require('express');
//var git = require('nodegit');
var exec = require('child_process').exec;
var boot = require('./index.js');
exports.boot = require('./index.js');
var prompt = require('prompt');
var app = require("../app.js");
exports.oobe = require("../libs/setup/setup.js");
var oobe = require("../libs/setup/setup.js");
var fs = require('fs');
var unzip = require('unzip');
var config = require('./libs/configure.js');
var cert = require('./libs/certs.js');

var io = require('socket.io')(express.listen);
var delayed = require('delayed');
//boot.properties.git.getCommits;
//start boot
// TODO: Create boot types (safemode, full, recovery)
exports.startboot = function startboot(boottype) {
  // Load configure
    config.loadconfig();
    boot.checks.files.checkFiles("ok");
    /**delayed.delay(function () {
      boot.checks.instances.instances(config.getdata('name'));
    }, 300)*/
    //Start DB
    boot.mongo.start(function (err) {
      console.log(err);
    });
    oobe.first("ok");
    boot.recovery.rollback.createBackup("ok");
    // load certs
    delayed.delay(function () {
      cert.generate();
    }, 1000);
    fs.writeFileSync('etc/date.txt', new Date().getHours(), 'utf8')
    fs.appendFileSync('etc/date.txt', new Date().getMinutes(), 'utf8')
    app.start();

}

// TODO: Create boot types (safemode, full, recovery)

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
