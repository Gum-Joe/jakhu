var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var clicolour = require('cli-color');

var passport = require('passport');
var passportlocal = require('passport-local');
var passporthttp = require('passport-http');

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var port = process.env.PORT || 8080;

app.listen(port, function () {
	console.log(clicolour.cyanBright("connections ") + clicolour.yellowBright("startup ") + "Running on port " + port);
	console.log(clicolour.cyanBright("connections ") + clicolour.yellowBright("startup ") + "The date and time is:", Date());
    console.log(clicolour.cyanBright("connections ") + clicolour.yellowBright("startup ") /*+ connect.connect("Connect")*/);
} );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.jade', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.jade', {
    message: err.message,
    error: {}
  });
});
