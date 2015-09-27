// kernal tests
var fs = require('fs');
var assert = require('assert');
var ken = require('../../boot/kernal/index.js')
var delayed = require('delayed');

describe('Kernal tests', function () {
  it('should see if ./tmp can be created', function (done) {
    fs.unlink('./tmp');
    ken.createTmp();
    delayed.delay(function () {
      if(fs.existsSync('./tmp') !== true){
        assert.fail(false, true, 'Expected tmp to exist - it did not');
      };
    }, 750);
    done();
  });
  it('should clean tmp', function (done) {
    fs.openSync('./tmp/test.txt', 'w');
    ken.clean();
    delayed.delay(function () {
      if(fs.existsSync('./tmp/test.txt') === true){
        assert.fail(true, false, 'Expected tmp to be clean - it was not');
      };
    }, 750);
    done();
  })
});
