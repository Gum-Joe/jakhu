/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../database').user;
var bcrypt = require('bcryptjs');

/**
 * Expose
 */

module.exports = new LocalStrategy(
  function(username, password, done) {
    // check if pwd matches
    var hash = bcrypt.hashSync(password, 10);
    User.findOne({ username: username }, function (err, user) {
      if (err !== null || undefined) return done(err);
      if (!user) {
        return done(null, false, { message: 'Unknown user' });
      }
      if (!bcrypt.compareSync(password, user.pwd)) {
        return done(null, false, { message: 'Invalid password' });
      }
      return done(null, user);
    });
  }
)
