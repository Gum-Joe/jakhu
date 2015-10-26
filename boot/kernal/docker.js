// Starts the required docker stuff
var YAML = require('yaml-js');
var YAM = require('yamljs');
var fs = require('fs');
var tub = require('web-os-container');
function boot() {
  // body...
  // Check if a docker ip is set
  var docker = YAML.load(fs.readFileSync('config/docker.yml'));
  if (docker.ip === undefined) {
    if (process.env.WEB_DOCKER_IP === undefined && process.env.WEB_DOCKER !== undefined || false) {
      throw new Error('Your docker vm ip address is not set or set to the wrong env! Please set it as the enviroment variable "WEB_DOCKER_IP"')
    };
  } else {
    // Load Docker
    // Pull docker image
    var datew = new Date().getDate();
    console.log(datew);
    if (docker.date === undefined) {
      console.log('Pulling images...');
      tub.pullImages('config/docker.yml', true);
      var imi = docker;
      imi.date = datew
      var da = YAM.stringify(imi, 4);
      fs.writeFile('config/docker.yml', da);
    }
  }
};
module.exports = {boot: boot};
boot();
