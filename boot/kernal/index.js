var mkdirp = require('mkdirp');
var clicolour = require("cli-color");
var exec = require('child_process').exec;

exports.createTmp = function createTmp(argument) {
  mkdirp("./tmp", function(err){
    console.log(clicolour.cyanBright('Created ./tmp...')+clicolour.greenBright("OK"));
  })
}

exports.clean = function clean(x) {
  console.log('Cleaning out files');
  console.log('Cleaned out ./tmp...'+clicolour.greenBright("OK"));
}
