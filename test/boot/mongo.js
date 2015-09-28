var mon = require('../../boot/kernal/mongo.js');
var con = require('../../libs/connect.js');
var assert = require('assert');

describe('MongoDB tests', function () {
  it('should return "Sorry, you will need to start your own db"', function (done) {
    if(mon.start('test') !== 'Sorry, you will need to start your own MongoDB'){
      assert.fail(mon.start('test'), 'Sorry, you will need to start your own MongoDB', 'Expected to get "Sorry, you will need to start your own MongoDB" - did not')
    };
    done();
  });
  it('should connect to the DB using mongoose', function (done) {
    con.connect("test", function (res) {
      if(res !== "connected"){
        assert.fail(res, 'connected', 'Expected function to return "connected" - it did not')
      };
    });
    done();
  });
  it('should connect to the DB using the MongoDb native driver', function (done) {
    con.stadaradconnect("test", function (res) {
      if(res !== "connected"){
        assert.fail(res, 'connected', 'Expected function to return "connected" - it did not')
      };
    });
    done();
  });
});
