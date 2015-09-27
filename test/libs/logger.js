var logger = require('../../libs/logger.js');
var assert = require('assert');
var fs = require('fs');

describe('Logger test', function () {
  it('should test to see if a log file is created', function (done) {
    done();
    logger.createlog();
    if(fs.existsSync('./logs/wos.log') !== true){
      assert.fail('ERNOENT || other', null, " Expected log file to exist - did not");
    };
  })
})
