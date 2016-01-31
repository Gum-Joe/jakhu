var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var delayed = require('delayed');
var config = require('../boot/libs/configure.js');
var fs = require('fs');
var YAML = require('yamljs');
var runner = require('../libs/runner/findapp.js');
const root = "dashboard"
const templates = `${root}/templates`
var App = require("jakhu-container").App;
/* GET dashborad home. */
router.get('/', function(req, res, next) {
  if (!req.user) {
    // No user, redirect to login
    // Or callback
    res.redirect('/');
  } else {
    var d = fs.readFileSync('etc/date.txt').toString();
    var fd = parseInt(d);
    var de = new Date().getHours().toString()+new Date().getMinutes().toString();
    exec("git rev-list HEAD --count", function (error, stdout) {
      var parsedreq = YAML.parse(fs.readFileSync('./etc/requests.yml','utf8'));
      res.render('dashboard/index.ejs', {
        user: req.user.username || req.user,
        build: stdout,
        imgprofile: '/css/img/profile.jpg',
        instances: config.getdata().instances,
        port: config.getdata().port,
        config: config.getdata(),
        showcase: '/css/img/showcase.jpg',
        time: de-fd,
        well: true,
        sname: config.getdata().name,
        requests: parsedreq.req,
        apps: YAML.load('config/apps.yml')
      });
    });
  }
});

// GET app data
router.get('/apps/status', function (req, res, next) {
  // Check auth
  console.log("");
  if (!req.user) {
    // No user, redirect to login
    res.redirect(`/?callback=/dashboard/apps/status?app=${req.query.app}`);
  } else {
    // Find app
    // App
    const appreq = req.query.app;
    // Load YAML
    this.apps = runner.getApps(req.query.author, req.query.app).apps;
    var appobj = {};
    // Find correct app
    for (var i = 0; i < this.apps.length; i++) {
      if (`${this.apps[i].author}/${this.apps[i].name}` === appreq) {
        appobj = {name: this.apps[i].name, author: this.apps[i].author};
      }
    }
    // Get app info
    const instances = "instances";
    try {
      const appinfo = YAML.load(`${instances}/${appobj.author}/${appobj.name}/.jakhu.yml`);
    }
    catch (err){
      //do whatever with error
      err.message = `Could not find app ${appobj.author}/${appobj.name} - does it exist?`;
      next(err)
    }
    //onsole.log(`App: ${appobj}`);
    res.render(`${templates}/apps/status.ejs`, {
      app: appobj,
      apps: this.apps,
      user: req.user.username || req.user,
      imgprofile: '/css/img/profile.jpg',
      info: appinfo
    })
    //res.send(appobj)
  }
});

router.param(['author', 'name'], function (req, res, next, value) {
  res.send(value);
  next();
});

router.get('/apps/start', function (req, res, next) {
  if (!req.user) {
    res.redirect('/');
  } else {
    var neapp = new App(req.query.author, req.query.app);
    neapp.autoTubs()
    //neapp.final()
    res.redirect(req.query.callback);
  }
  //res.send(req.author);
})

module.exports = router;
