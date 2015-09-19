var exec = require('child_process').exec;
var os = require('os');
var fs = require('fs');
var https = require('https');
var mkdirp = require('mkdirp');
var unzip = require('unzip');
var terminal = require('child_process').exec;
var clicolour = require('cli-color');

exports.start = function start(callback) {
  if(os.type() === "Windows_NT"){
    // start mongo
    // download if not Here
    // and exec
    // TODO: Make work in order
    fs.stat('./packages/mongo', function (err) {
      if(err){
        var terminal = require('child_process').spawn('bash', ['./scripts/getmongo.sh']);

        terminal.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        terminal.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        terminal.on('exit', function (code) {
            console.log('Done with '  + code);
        });

        setTimeout(function() {
          console.log("Downloading MongoDB...");
        }, 2000000);
      } else {
        // stary DB
        var m = require('child_process').spawn('bash', ['./scripts/mongo.sh']);

        m.on('exit', function (code) {
            console.log(clicolour.cyanBright("webOS ") + clicolour.magentaBright("database ") + "Database started with "+code);
        });

        setTimeout(function() {
          console.log("Starting MongoDB...");
        }, 2000000);
      };
    });
  } else {
    callback("EOS", "Not windows");
  };
}
