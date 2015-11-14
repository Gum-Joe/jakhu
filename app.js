exports.start = function start(x, y, portt){
  //console.log(data);
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var clicolour = require('cli-color');
var fs = require("fs");
var morgan = require("morgan");
var ooberoutes = require("./routes/oobe.js");
var dashboard = require("./routes/dashboard.js");
var mkdirp = require('mkdirp');
var io = require('./libs/socket.io.js')

var passport = require('passport');
var passportlocal = require('passport-local');
var passporthttp = require('passport-http');

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

//This prints undefined
var connect = require("./libs/connect.js");
var passportconfig = require("./libs/passport.js");
//var wlogger = require("./libs/wlogger.js");
// var debuge = require("./libs/debug.js");
var wlogger = require("./libs/logger.js");
var kernal = require('./boot/boot.js');

var routes = require('./routes/index');
var api = require('./routes/api/api');
var users = require('./routes/users');

var debug = require('debug')('Web-OS:server');
var http = require('http');
var https = require('https');

var app = express();

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

// create file
mkdirp('logs')
wlogger.createlog("ok");
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
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'test')));
if(process.env.NODE_ENV === "dev"){
  app.set('env', 'development');
}

app.use('/', routes);
app.use('/oobe', ooberoutes);
app.use('/users', users);
app.use('/dashboard', dashboard);
app.use('/api', api);
// app.use('passportconfig', passportconfig);

// Setup HTTPS
// uncommitted after finding way to get certs
/** options = {
  key: fs.readFileSync(path.join(__dirname, 'cert/Web-OS-PRIVATE.key'))
  // This certificate should be a bundle containing your server certificate and any intermediates
  // cat certs/cert.pem certs/chain.pem > certs/server-bundle.pem
, cert: fs.readFileSync(path.join(__dirname, 'cert/Web-OS-SIGNED.crt'))
  // ca only needs to be specified for peer-certificates
//, ca: [ fs.readFileSync(path.join(caCertsPath, 'my-root-ca.crt.pem')) ]
, requestCert: false
, rejectUnauthorized: true
}; */

var port = process.env.PORT || 8080;
if(x !== "basic" && x !== "ci"){
  app.listen(port, function () {
  	console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("startup ") + "Running on port " + port);
  	console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("startup ") + "The date and time is:", Date());
    console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("startup ") + connect.connect("Connect"));
    //kernal.boot("ok");
    kernal.startinput("ok");
  });
} else {
  if(portt === undefined){
    app.listen(6060, function () {
    	// server started for mocha test
    });
  } else {
    app.listen(portt, function () {
    	// server started for mocha test
    });
  }
};

// start scoket
io.start(app.listen)
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

// Close server
