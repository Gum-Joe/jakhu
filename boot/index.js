exports.checks = require('./libs/checks/checkFile.js');
exports.properties = require('./libs/properties.js');
exports.recovery = require('./recovery/index.js');
exports.kernal = require('./kernal/index.js');
var fs = require('fs');
var clicolour = require('cli-color');

exports.stop = function stop(x) {
  console.log(clicolour.redBright("Stopping the Web-OS server..."));
  // Remove tmp and exit
  // TODO: Change exit to whereever last step is.
  fs.rmdir("./tmp", function (err) {
    if(err == null){
      console.log(clicolour.cyanBright("Deleting ./tmp...")+clicolour.greenBright("OK"));
      process.exit(0);
    } else {
      console.log(clicolour.cyanBright("Deleting ./tmp...")+clicolour.redBright("ERROR!"));
      process.exit(1);
    }
  });
}
