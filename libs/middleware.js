var fs = require('fs');
var YAML = require('yamljs');
var YAM = require('yaml-js');
var stream = require('../libs/stream.js');
var mid = module.exports = {};
const db = require('./database');
mid.count = function count (req, res, next) {
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
mid.timer = (req, res, next) => {
    var start = Date.now();
    const starttime = new Date();
    res.on('finish', function() {
        var duration = Date.now() - start;
        try {
            const store = new db.Requests({method: req.method, route: req.route.path, starttime: starttime, endtime: new Date(), time: duration});
            store.save((err) => {
              if (err) {
                throw err;
              }
            })
        } catch (e) {
          if (e.message !== "Cannot read property 'path' of undefined") {
            throw e;
          }
        }
        // Log to file
        if (fs.existsSync('etc/requesttotal.txt') !== true) {
          fs.openSync('etc/requesttotal.txt', 'w+');
          fs.writeFileSync('etc/requesttotal.txt', duration.toString());
        } else {
          fs.writeFileSync('etc/requesttotal.txt', parseInt(fs.readFileSync('etc/requesttotal.txt'))+duration)
        }
    });
    next();
}
//count('GET');
