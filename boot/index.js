exports.checks = require('./libs/checks/checkFile.js');
exports.properties = require('./libs/properties.js');
exports.recovery = require('./recovery/index.js');
var clicolour = require('cli-color');

exports.stop = function stop(x) {
  console.log(clicolour.redBright("Stopping the Web-OS server"));
  process.exit(0);
}
exports.startinput = function startinput(x){
  process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
console.log(">\n")
process.stdin.on('data', function (text) {
  console.log('received data:', util.inspect(text));
  if (text === 'quit\n') {
    done();
  }
});
}
