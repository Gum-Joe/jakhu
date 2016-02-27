var fs = require('fs');
var mongoose = require('mongoose');
var database = require('./database');
var debug = require('debug')('api');
var clicolour = require('cli-color');
var Apps = database.Apps;

// Done
function done(err, callback) {

}

// Main api
var api = {};

function removeFirst(string) {
  return string.substring(1)
}

function initR(express, app) {
  var appj = require(`${app.path}/jakhu.json`)
  var appr = require(`${app.path}/${appj.main}`)
}

function init(app, func) {
  // Search modules in
  debug("Initializing api...");
  debug("Creating custom express app object...")
  var mapp = app
  // Add func
  for (var i in func) {
    api[i] = func[i];
  }
  mapp.listen = undefined;
  debug("Searching for modules in /usr/modules...")
  debug("Reading module list in db...")
  Apps.find(function (err, apps) {
    // Check exist
    debug("Checking if all apps exists...")
    for (var i = 0; i < apps.length; i++) {
      var appsp = apps[i]
      appsp.path = removeFirst(appsp.path)
      appsp.iconPath = removeFirst(appsp.iconPath)
      var appj;
      var appr;
      try {
        fs.statSync(`${appsp.path}`)
        appj = require(`../${appsp.path}/jakhu.json`)
        appr = require(`../${appsp.path}/${appj.main}`)
      } catch(e) {
        if(e.code === "ENOENT") {
          debug(`Could not find app ${appsp.name}`);
          if (!~process.env.DEBUG.indexOf('api')) {
            console.log(clicolour.cyanBright("jakhu ") + clicolour.redBright("api:warn ") + `Could not find app ${appsp.name}`);
          }
        } else {
          throw e
        }
      }
      // EXEC init fun
      debug("Initing modules")
      appr.init(mapp, api, done)
    };
  })
}

module.exports = {init: init};
