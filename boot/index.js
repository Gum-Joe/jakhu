exports.checks = require('./libs/checks/checkFile.js');
exports.properties = require('./libs/properties.js');
exports.recovery = require('./recovery/index.js');
exports.kernal = require('./kernal/index.js');
var fs = require('fs');
var clicolour = require('cli-color');

exports.stop = function stop(x) {
  console.log(clicolour.redBright("Stopping the Web-OS server..."));
  fs.rmdir("./tmp", function (err) {
    if(err == null){
      console.log(clicolour.cyanBright("Deleting ./tmp...")+clicolour.greenBright("OK"));
    } else {
      console.log(clicolour.cyanBright("Deleting ./tmp...")+clicolour.redBright("ERROR!"));
    }
  });
  // Check if the tmp dir exists, and if it doesnot, exit
  var tmp = fs.lstatSync('./tmp', function(err){
    //If there is an error, quit
    if(err){
      process.exit(0);
    } else {
      console.log("FAIL to exit");
    }
  });
}
