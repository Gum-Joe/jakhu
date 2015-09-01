// This test checks out files
var kernal = require('../../boot/index.js');
var mkdirp = require('mkdirp');
var clicolour = require("cli-color");
var exec = require('child_process').exec;

var assert = require("assert");
describe('File checks', function() {
    it('Should clean out the ./tmp dir', function (done) {
      exec("rm -rfv ./tmp/*", function (error, stdout, stderr) {
          console.log(stderr+stdout);
      });
      done();
    });
});
