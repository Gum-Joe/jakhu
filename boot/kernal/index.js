var mkdirp = require('mkdirp');
var clicolour = require("cli-color");

exports.createTmp = function createTmp(argument) {
  mkdirp("./tmp", function(err){
    console.log('Created ./tmp...'+clicolour.greenBright("OK"));
  })
}
