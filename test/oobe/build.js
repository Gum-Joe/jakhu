var assert = require('assert');
var b = require('../../libs/setup/oobe/builder.js');

describe('Config builder tests', function () {
  it('should create an xml config with 3 arg defined', function (done) {
    b.buildLang('english', 'uk', true);
    done();
  });
  it('should create an xml config with 3 arg undefined', function (done) {
    b.buildLang('english', 'uk');
    done();
  });
  it('should create an xml config with 3 arg as false', function (done) {
    b.buildLang('english', 'uk', false);
    done();
  });
});
