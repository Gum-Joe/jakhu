var assert = require('assert');
var request = require('supertest');
var http = require('http');
var app = require("../../app.js");
var b = require("../../boot/kernal/index.js");
var fs = require('fs');
var should = require('should');

describe('Boot up Checks', function () {
  it('Cleaning', function (done) {
    b.clean('test', function (err) {
      if(err){
        should.fail();
      }
    })
    done();
  });
});
