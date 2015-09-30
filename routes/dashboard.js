var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var config = require('../boot/libs/configure.js').getdata;

/* GET users listing. */
router.get('/', function(req, res) {
  console.log("");
  exec("git rev-list HEAD --count", function (error, stdout) {
    res.render('dashboard/index.ejs', {
      user: req.param("user"),
      build: stdout,
      imgprofile: '/css/img/profile.jpg',
    });
  });
});

module.exports = router;
