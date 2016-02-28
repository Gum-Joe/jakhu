'use strict';
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expresssession = require('express-session');
const clicolour = require('cli-color');
const fs = require("fs");
const morgan = require("morgan");
const ooberoutes = require("./routes/oobe.js");
const dashboard = require("./routes/dashboard.js");
const mkdirp = require('mkdirp');
const delayed = require('delayed');

const passport = require('passport');
const LocalStrategy = require('passport-local');
const passporthttp = require('passport-http');

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectID;

const connect = require("./libs/connect.js");
const wlogger = require("./libs/logger.js");
const kernal = require('./boot/boot.js');
const mid = require('./libs/middleware.js')
const stream = require('./libs/stream.js');
const yml = require('./libs/yml.js');
const schema = require('./libs/database');
const apis = require('./libs/api.js');
const notifications = require('./libs/api/notifications');

const routes = require('./routes/index');
const api = require('./routes/api/api');
const users = require('./routes/users');

const http = require('http');
const https = require('https');

let app = express();

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// DEBUGING
var debug = {};
debug.http = require('debug')('server');

function use(param1, param2) {
  if (typeof param2 !== 'undefined') {
    app.use(param1, param2)
  } else {
    app.use(param1)
  }
}


exports.start = function start(x, y, portt){
var port = process.env.PORT || portt || 8080;
var server = http.createServer(app);
var io = require('./libs/socket.io');
// Record start time:
if (fs.existsSync('etc/starttime.txt') !== true) {
  fs.openSync('etc/starttime.txt', 'w+');
  fs.writeFileSync('etc/starttime.txt', Date.now());
} else {
  fs.writeFileSync('etc/starttime.txt', Date.now())
}
// Delete previous up
if (fs.existsSync('etc/requesttotal.txt')) {
  fs.writeFileSync('etc/requesttotal.txt', "0");
}
// create file
mkdirp('logs');
if(y !== true){wlogger.createlog("ok");};
// during baic startup for testing, will not create log
if(y !== true){
  var logFile = fs.createWriteStream('./logs/wos.log', {flags: 'a'});
}
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'icon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'test')));
app.use(mid.count);
app.use(mid.timer);
if(process.env.NODE_ENV === "dev"){
  app.set('env', 'development');
}

app.use('/', routes);
app.use('/oobe', ooberoutes);
app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/api', api);
// listen
// Se
if(y === true || x === 'basic' || x === 'ci'){
  server.listen(port);
} else {
  server.listen(port, function () {
    debug.http('Starting server...');
    if (!process.env.DEBUG) {
      process.env.DEBUG = "none"
    }
    if (~process.env.DEBUG.indexOf('server')) {
      debug.http("Running on port " + port);
      debug.http("The date and time is:", Date());
    } else {
      console.log(clicolour.cyanBright("jakhu ") + clicolour.yellowBright("startup ") + "Running on port " + port);
      console.log(clicolour.cyanBright("jakhu ") + clicolour.yellowBright("startup ") + "The date and time is:", Date());
    }
    connect.connect();
    debug.http('Done starting server');
    kernal.startinput("ok");
  });
}
// Start socket.io
io.start(server)

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
// end of start function
};
