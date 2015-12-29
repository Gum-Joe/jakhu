// Generate certs
var NodeRSA = require('node-rsa');
var fs = require('fs');
var mkdirp = require('mkdirp');
var configh = require('jakhu-config');
var config = configh.getdata('./tmp/config.yml');
var home = process.env.HOME || process.env.SystemDrive+process.env.HOMEPATH;
var api = require('../../build/Release/write');
var stat = require('../../build/Release/stat').stat;
var generate = function generate(x) {
  // body...
  // Create key
  if(fs.existsSync("etc") !== true){
    fs.mkdirSync('etc');
  }
  if(fs.existsSync("etc/certs") !== true){
    fs.mkdirSync('etc/certs');
  }
  var key = new NodeRSA({b: 2048});
  if(fs.existsSync("etc/certs/"+config.name+"-private.pem") !== true){
    fs.openSync("etc/certs/"+config.name+"-private.pem", 'w');
    fs.appendFileSync("etc/certs/"+config.name+"-private.pem", key.exportKey('pkcs1-private-pem'), 'utf8');
  };
  if(fs.existsSync("etc/certs/"+config.name+"-public.pem") !== true){
    mkdirp('etc/certs');
    fs.openSync("etc/certs/"+config.name+"-public.pem", 'w');
    fs.appendFileSync("etc/certs/"+config.name+"-public.pem", key.exportKey('pkcs1-public-pem'), 'utf8');
  };
  if(stat(home+'.jakhu/certs/'+config.name+"-public.pem") === false){
    api.write(home+'.jakhu/certs/'+config.name+"-public.pem", key.exportKey('pkcs1-public-pem'))
  }
  if(stat(home+'.jakhu/certs/'+config.name+"-public.pem") === false){
    api.write(home+'.jakhu/certs/'+config.name+"-private.pem", key.exportKey('pkcs1-private-pem'))
  }
}

module.exports = {generate: generate};
