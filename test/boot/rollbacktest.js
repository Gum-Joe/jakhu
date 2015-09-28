var rollback = require('../../boot/recovery/rollback.js');
var fs = require('fs');
var should = require('chai').should;
var assert = require('assert');
var path = require('path');
var mkdirp = require('mkdirp');
var exec = require('child_process').exec;

describe("Boot tests", function(){
  before(function (done) {
    exec('mkdir testing');
    exec('cd testing && mkdir test');
    exec('cd testing && cd test && touch test.txt');
    rollback.createBackup("test");
    done();
  })
  // need fix
  /*it("should see if a rollback backup can be created", function (done) {
    // tests
    // check if exists
    if(fs.existsSync('./tmp/test/test.txt') !== true){
      assert.fail('ERNOENT || other', null, " Expected coppied file to exist - rollback backup failed");
    };
    done();
  });*/
});
