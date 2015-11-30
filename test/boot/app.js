// tests app.js

var app = require('../../app.js');
var express = require('express');
var ap = express();
var exec = require('child_process');
var assert = require('assert');

describe('app.js tests', function () {
  it('should test whether app.js is listening', function (done) {
    app.start('basic', true, '2020');
    done();
  });
  it('should check that app.env is set to dev', function (done) {
    process.env.NODE_ENV='dev';
    // start app
    app.start('basic', true, '3030');
    if(ap.get('env') !== 'dev'){
      assert.fail(ap.get('env'), 'dev', 'Expected app env to be dev - it was not');
    }
    done();
  });
  it('should check that app.js console.logs on startup', function (done) {
    process.env.NODE_ENV='dev';
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
