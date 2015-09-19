var rollback = require('../../boot/recovery/rollback.js');
var fs = require('fs');
var should = require('chai').should;
var assert = require('assert');

describe("Boot tests", function(){
  it("should see if a rollback backup can be created", function (done) {
    // tests
    rollback.createBackup("test");
    // check if exists
    fs.stat('ajdfkjadf');
    done();
  });
});
