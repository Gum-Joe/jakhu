var logger = require('../../libs/logger.js');
var assert = require('assert');
var fs = require('fs');
var delayed = require('delayed');

describe('Logger test', function () {
  it('should test to see if a log file can be found', function (done) {
    done();
    logger.createlog();
    if(fs.existsSync('./logs/wos.log') !== true){
      assert.fail('ERNOENT || other', null, " Expected log file to exist - did not");
    };
  });
  it('should see if a log is created', function (done) {
    fs.unlinkSync('./logs/wos.log');
    //console.log(fs.existsSync('./logs/wos.log'));
    if(fs.existsSync('./logs/wos.log') !== false){
      assert.fail('ERNOENT || other', null, " Expected log file to not exist - it did");
    };
    process.nextTick(logger.createlog("test"));
    delayed.delay(function () {
      if(fs.existsSync('./logs/wos.log') !== true){
        assert.fail('ERNOENT || other', null, " Expected log file to exist - it did not");
      };
    }, 750)

    done();
  })
})
