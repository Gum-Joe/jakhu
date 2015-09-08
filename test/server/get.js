var assert = require('assert');
var request = require('supertest');
var http = require('http');
var app = require("../../app.js");
var fs = require('fs');

describe('GET requests', function () {
  console.log("Please make sure the server is not running before running these tests");
  before(function (done) {
    app.start("basic");
    done();
  });
  it('GET / and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /dashboard and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/dashboard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /dashboard and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/dashboard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /signin and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/signin')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
});
