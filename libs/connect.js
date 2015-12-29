var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

// passport for login
var passport = require('passport');
var passportlocal = require('passport-local');
var passporthttp = require('passport-http');

var routes = require('../routes/index');
var users = require('../routes/users');

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var clicolour = require('cli-color');
// awaiting solve
// var bcrypt = require('bcrypt');

// connect
exports.stadaradconnect = function (x, callback) {
		var url = 'mongodb://localhost:27017/Jakhu';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
	if(x !== 'test'){
		console.log(clicolour.cyanBright("jakhu ") + clicolour.magentaBright("database ") + "Connected correctly to mongo server.");
	} else {
		if(err){
			callback('error');
		} else {
			callback('connected');
		};
	};
	db.close();
});
};

exports.connect = function (x, call) {
	mongoose.connect('mongodb://localhost:27017/Jakhu');

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
	if(x !== 'test'){
		console.log(clicolour.cyanBright("jakhu ") + clicolour.magentaBright("database ") + "Yay! We succefully connected to the db");
	} else {
		call('connected')
	}

});
}
