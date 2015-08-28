var mkdirp = require('mkdirp');
var clicolour = require("cli-color");
var exec = require('child_process').exec;

exports.createTmp = function createTmp(argument) {
  mkdirp("./tmp", function(err){
    console.log('Created ./tmp...'+clicolour.greenBright("OK"));
  })
}

exports.clean = function clean(x) {
  console.log('Created ./tmp...'+clicolour.greenBright("OK"));
}
