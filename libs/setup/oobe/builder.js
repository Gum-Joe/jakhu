var fs = require('fs');
var clicolour = require('cli-color');
var mkdirp = require('mkdirp');
var error = require('../../error/bsod.js');
var xml = require('xml');


exports.buildLang = function buildLang(x, y, z) {
  console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "Createing xml...");
  if(z !== undefined){
    var langObj = [ { config: [ {language: x} , {region: y} , {allowSend: true} ] } ];
  } else {
    var langObj = [ { config: [ {language: x} , {region: y} , {allowSend: false} ] } ];
  }
  fs.writeFile("../../../config/config.xml", xml(langObj, true), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "XML created!");
});
  console.log(xml(langObj, true));
};
