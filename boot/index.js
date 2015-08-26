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
      console.log(clicolour.blueBright("Deleting ./tmp..."));
    } else {
      console.log(clicolour.blueBright("Deleting ./tmp...")+clicolour.redBright("ERROR!"));
    }
  });
  process.exit(0);
}
