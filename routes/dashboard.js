var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var delayed = require('delayed');
var config = require('../boot/libs/configure.js').getdata();

/* GET dashborad home. */
router.get('/', function(req, res) {
  console.log("");
  exec("git rev-list HEAD --count", function (error, stdout) {
    res.render('dashboard/index.ejs', {
      user: req.param("user"),
      build: stdout,
      imgprofile: '/css/img/profile.jpg',
      instances: config.instances,
      port: config.port,
      config: config
    });
  });
});

module.exports = router;
