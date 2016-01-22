var fs = require('fs');
var YAML = require('yamljs');
var YAM = require('yaml-js');
var stream = require('../libs/stream.js');

var count = function count (req, res, next) {
  var resq;
  if(fs.existsSync('etc/requests.yml') !== true){
    var y = YAML.stringify({req: 1, date: new Date().getDate()}, 4);
    fs.open('etc/requests.yml', 'w', function (err) {
      if(err){throw new Error(err)}
    });
    fs.writeFile('etc/requests.yml', y, 'utf8');
    stream.req.write = function(data){this.emit('data', 1)};
  }
   // keep executing the router middleware
   next();
}
module.exports = {count: count};
//count('GET');
