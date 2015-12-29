var express = require('express');
var router = express.Router();
var fs = require('fs');
var dbName = "Jakhu";
var port = "27017";
var host = "localhost";
var kernal = require('../boot/boot.js');
var exec = require('child_process').exec;
var xml2js = require('xml2js');
var oobe = require('../libs/setup/setup.js');
var os = require('os');
var clicolour = require('cli-color');
var db = require('../libs/database');
var app = express();

/* GET home page. */
router.get('/', function(req, res) {
  // TODO: Insert boot checks
  console.log("");
  res.redirect('/dashboard/?user=Admin')
      /* exec("git rev-list HEAD --count", function (error, stdout) {
      *   res.render('boot.ejs', {
      *     build: stdout
      *   });
      * });
      */
  });

  router.get('/signin', function(req, res) {
    // TODO: Insert boot checks
    console.log("");
        exec("git rev-list HEAD --count", function (error, stdout) {
          res.render('signin.ejs', {
            build: stdout
          });
        });
    });

  router.get('/recovery', function(req, res) {
    console.log("");
    exec("git rev-list HEAD --count", function (error, stdout) {
      res.render('recovery.ejs', {
        build: stdout
      });
    });
    });

router.get('/step1', function(req, res) {
  console.log("");
  exec("git rev-list HEAD --count", function (error, stdout) {
    res.render('step-1.ejs', {
      build: stdout
    });
  });
});

router.get('/oobe', function(req, res) {
  console.log("");
  res.render('oobe/index.ejs');
});

router.get('/admin', function(req, res) {
  console.log("");
  res.render('admin/index.ejs', {
    // url query (?x=y)
    user: req.param("user"),
    //users: Suser.count({}, function(err, count){
    //return count;
///})
    users: 1000,
    sessions: 500,
    plugins: 5
  });

  });

module.exports = router;
