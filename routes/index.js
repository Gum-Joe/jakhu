var express = require('express');
var router = express.Router();
var passportconfig = require("../private/passport.js");
var passport = require("passport");
var passportLocal = require("passport-local");

router.use('passportconfig', passportconfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Sign in' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin/index.ejs', {
    // url query (?x=y)
    task: req.param("task")
  });
});

router.post('/login', function(req, res, next) {
    //passport.authenticate('local');
  // res.render('index.html', { title: 'Done' });
});

module.exports = router;
