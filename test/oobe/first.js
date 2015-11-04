// Examin fist time setup
var set = require('../../libs/setup/setup.js');
var exec = require('child_process').exec;
describe('OOBE test', function () {
  before(function (done) {
    // clone a fresh git repo
    done();
  })
  it('should create the required directories', function (done) {
    // mv tmp instances and config into t
    set.first();
    done();
  });
});
