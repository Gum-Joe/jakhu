var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var delayed = require('delayed');
var config = require('../boot/libs/configure.js');
var fs = require('fs');

/* GET dashborad home. */
router.get('/', function(req, res) {
  var d = fs.readFileSync('etc/date.txt').toString();
  var fd = parseInt(d);
  var de = new Date().getHours().toString()+new Date().getMinutes().toString();
  console.log(de-fd);
  exec("git rev-list HEAD --count", function (error, stdout) {
    res.render('dashboard/index.ejs', {
      user: req.param("user"),
      build: stdout,
      imgprofile: '/css/img/profile.jpg',
      instances: config.getdata().instances,
      port: config.getdata().port,
      config: config.getdata(),
      showcase: '/css/img/showcase.jpg',
      time: de-fd
    });
  });
});

module.exports = router;
