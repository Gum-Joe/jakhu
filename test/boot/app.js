// tests app.js

var app = require('../../app.js');
var express = require('express');
var ap = express();
var exec = require('child_process');
var assert = require('assert');

describe('app.js tests', function () {
  it('should test whether app.js is listening', function (done) {
    app.start('basic', true, 2020);
    done();
  });
  it('should check that app.env is set to dev', function (done) {
    // Create config.yml in ./tmp
    // See #30
    var execSync = require('child_process').execSync;
    execSync('node ./usr/bin/check.config.js');
    // Set NODE_ENV for development
    // start app
    app.start('basic', true, 3030);
    // check env
    if(ap.get('env') !== 'development'){
      assert.fail(ap.get('env'), 'development', 'Expected app env to be dev - it was not');
    }
    done();
  });
  it('should check that app.js console.logs on startup', function (done) {
    var o = '\nBoss\nv1.0.0 build 766\n\nALPHA:Checking out files need fixing, does in fact check out files correctly. Will fix in alpha version\n';
    var oa = 'boss database Sorry, you will need to start your own MongoDB\nrollback: Not backing up as dev env\nboss startup Running on port 8080\n';
    var ob = 'boss startup The date and time is: Mon Nov 30 2015 19:47:37 GMT+0000 (GMT Standard Time)\nboss startup undefined\nboss recovery Created Rollback DIR for today\nNew socket created.\n';
    var oc = "\nconnection error: { [MongoError: connect ECONNREFUSED 127.0.0.1:27017]\n  name: 'MongoError',\n  message: 'connect ECONNREFUSED 127.0.0.1:27017' }\n";
    var out = exec.exec('node usr/test/test.js', function (error, stdout, stderr) {
      console.log(stdout);
      if(stdout !== o+oa+ob+oc){
        assert.fail(stdout, o+oa+ob+oc, 'App output was not correct');
      };
    });
    done();
  });
});
