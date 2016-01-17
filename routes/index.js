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
var expresssession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../libs/database').user;
var bcrypt = require('bcryptjs');

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    });
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    // check if pwd matches
    var hash = bcrypt.hashSync(password, 10);
    User.findOne({ username: username}, function (err, user) {
      console.log(user);
      if (err !== null || undefined) return done(err);
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      console.log(hash);
      if (!bcrypt.compareSync(password, user.pwd)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
));

router.use(expresssession({ secret: 'jakhu', name: 'jakhu', saveUninitialized: false, resave: false }));
router.use(passport.initialize());
router.use(passport.session());

/* GET home page. */
router.get('/', function(req, res) {
  // TODO: Insert boot checks
  console.log("");
  res.render('login.ejs');
      /* exec("git rev-list HEAD --count", function (error, stdout) {
      *   res.render('boot.ejs', {
      *     build: stdout
      *   });
      * });
      */
  });
// login
router.post('/login',
  passport.authenticate('local', { failureRedirect: '/'}),
  function(req, res) {
    res.redirect('/dashboard');
});

  router.get('/signin', function(req, res) {
    // TODO: Insert boot checks
    console.log("");
        exec("git rev-list HEAD --count", function (error, stdout) {
          res.render('login.ejs', {
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
