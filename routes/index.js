var express = require('express');
var router = express.Router();
var passportconfig = require("../libs/passport.js");
var passport = require("passport");
var passportLocal = require("passport-local");
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var cursor = require('mongodb');
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var kernal = require('../boot/boot.js');

var mongoose = require('mongoose');

var dbName = "web-os";
var port = "27017";
var host = "localhost";
var kernal = require('../boot/boot.js');
var exec = require('child_process').exec;
var xml = require('xml2js');

var userSchema = new mongoose.Schema({
  username: { type: String }
, email: String
, pwd: String
});
var exits = false;
var Suser = mongoose.model('usersch', userSchema);
var counts = getdocs("ok");

function getdocs(x){
  Suser.count({}, function(err, count){
    return count;
    counts = count;
});

};

console.log(counts);

router.use('passportconfig', passportconfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  // Check to see if need to load ./boot
  //fs.stat('./tmp', function(err){
    //if(err == null){
      // Do the normal job
      exec("git rev-list HEAD --count", function (error, stdout, stderr) {
        res.render('boot.ejs', {
          build: stdout
        });
      });
    //} else {
      // redirct to ./boot
      //res.redirct("/boot");
    //}
  //});
  });
  // boot
  /*
  For later
router.get('/start', function(req, res, next) {
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
    res.render('booting.ejs', {
      build: stdout
    });
  });
});*/

router.get('/start', function(req, res, next) {
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
    res.render('index.ejs', {
      build: stdout
    });
  });
  });
  router.post('/set-lang', function(req, res, next) {
    // Here would be installing language packs but none are avalible
    console.log("")
  })

  router.get('/recovery', function(req, res, next) {
    exec("git rev-list HEAD --count", function (error, stdout, stderr) {
      res.render('recovery.ejs', {
        build: stdout
      });
    });
    });

router.get('/step1', function(req, res, next) {
  exec("git rev-list HEAD --count", function (error, stdout, stderr) {
    res.render('step-1.ejs', {
      build: stdout
    });
  });
});

router.get('/oobe', function(req, res, next) {
  res.render('oobe/index.ejs');
});

router.get('/admin', function(req, res, next) {
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

router.post('/login', function(req, res, next) {
    //passport.authenticate('local');
  // res.render('index.html', { title: 'Done' });
});

function checkBoot(argument) {
  fs.stat('./tmp', function(err){
    if(err == null){
      var boot = false;
    } else {
      var boot = true;
    }
  });
}

module.exports = router;
