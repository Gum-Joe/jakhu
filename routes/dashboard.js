var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var delayed = require('delayed');
var config = require('../boot/libs/configure.js');
var fs = require('fs');
var YAML = require('yamljs');

/* GET dashborad home. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    // No user, redirect to login
    res.redirect('/');
  } else {
    var d = fs.readFileSync('etc/date.txt').toString();
    var fd = parseInt(d);
    var de = new Date().getHours().toString()+new Date().getMinutes().toString();
    exec("git rev-list HEAD --count", function (error, stdout) {
      var parsedreq = YAML.parse(fs.readFileSync('./etc/requests.yml','utf8'));
      res.render('dashboard/index.ejs', {
        user: req.user.username || req.user,
        build: stdout,
        imgprofile: '/css/img/profile.jpg',
        instances: config.getdata().instances,
        port: config.getdata().port,
        config: config.getdata(),
        showcase: '/css/img/showcase.jpg',
        time: de-fd,
        well: true,
        sname: config.getdata().name,
        requests: parsedreq.req
      });
    });
  }
});

module.exports = router;
