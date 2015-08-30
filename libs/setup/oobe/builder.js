var fs = require('fs');
var clicolour = require('cli-color');
var mkdirp = require('mkdirp');
var error = require('../../error/bsod.js');
var xml = require('xml');


exports.buildLang = function buildLang(x, y, z) {
  if(z !== undefined){
    var langObj = [ {language: x} , {region: y} , {allowSend: true} ];
  } else {
    var langObj = [ {language: x} , {region: y} , {allowSend: false} ];
  }
  console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "Createing xml...");
  console.log(xml(langObj, true));
};
