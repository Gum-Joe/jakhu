/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./database').UserSchema;

/**
 * Expose
 */

module.exports = new LocalStrategy({
    usernameField: 'user',
    passwordField: 'pwd'
  },
  function(user, pwd, done) {
    // check if pwd matches
    var hash = bcrypt.hash(pwd, 10);
    User.findOne({ username: user, pwd: hash }, function (err, user) {
      console.log("err");
      if (err) return done(err);
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!user.authenticate(password)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
);
