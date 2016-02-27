var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expresssession = require('express-session');
var clicolour = require('cli-color');
var fs = require("fs");
var morgan = require("morgan");
var ooberoutes = require("./routes/oobe.js");
var dashboard = require("./routes/dashboard.js");
var mkdirp = require('mkdirp');
var delayed = require('delayed');

var passport = require('passport');
var LocalStrategy = require('passport-local');
var passporthttp = require('passport-http');

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var connect = require("./libs/connect.js");
var wlogger = require("./libs/logger.js");
var kernal = require('./boot/boot.js');
var mid = require('./libs/middleware.js')
var stream = require('./libs/stream.js');
var yml = require('./libs/yml.js');
var schema = require('./libs/database');
var apis = require('./libs/api.js');

var routes = require('./routes/index');
var api = require('./routes/api/api');
var users = require('./routes/users');

var http = require('http');
var https = require('https');

var app = express();

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

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


start = function start(x, y, portt){
var port = process.env.PORT || portt || 8080;
var server = http.createServer(app);
var io = require('socket.io').listen(server);
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
    apis.init(app, {use: use});
    debug.http('Done starting server');
    kernal.startinput("ok");
  });
}
io.sockets.on('connection', function(socket){
  console.log('New socket created.');
  // parse yml for req
  console.log();
  var yml = require("yamljs")
  // Watch file
  fs.watchFile('etc/requesttotal.txt', (curr, prev) => {
    io.emit('uptime', fs.readFileSync('etc/requesttotal.txt'))
    console.log("ok");
  });
  io.emit('request', yml.parse('etc/requests.yml').req);
  function f() {
    if (!fs.statSync('etc/date.txt')) {
      fs.openSync('etc/date.txt', 'w')
      fs.appendSync('etc/date.txt', new Date().getHours().toString()+new Date().getMinutes().toString())
    }
    var d = fs.readFileSync('etc/date.txt').toString();
    var fd = parseInt(d);
    var de = new Date().getHours().toString()+new Date().getMinutes().toString();
    io.emit('runtime', de-fd);
  }
  setInterval(f, 60 * 1000);
});
fs.watchFile('etc/requesttotal.txt', {persistent:true,interval:1}, (curr, prev) => {
  fs.readFile('etc/requesttotal.txt', 'utf8', function (err, data) {
    if (err) {
      throw err
    } else {
      console.log(data);
      if (parseInt(data) > 10000) {
        const nda = parseInt(data) / 100
        const nnda = Math.round(nda)
        io.emit('uptime', nnda.toString()+ " s")
      } else {
        io.emit('uptime', data+ " ms")
      }
    }
  });
});

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
module.exports = {start: start};
