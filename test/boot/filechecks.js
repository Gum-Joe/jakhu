// This test checks out files
var kernal = require('../../boot/index.js');

var assert = require("assert");
describe('File checks', function() {
    it('checks out file app.js', function (done) {
      kernal.checks.checkFiles();
      done();
    });
});
