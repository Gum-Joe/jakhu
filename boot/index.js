exports.checks = require('./libs/checks/checkFile.js');
exports.properties = require('./libs/properties.js');
exports.recovery = require('./recovery/index.js');
var clicolour = require('cli-color');

exports.stop = function stop(x) {
  console.log(clicolour.redBright("Stopping the Web-OS server"));
  process.exit(0);
}
