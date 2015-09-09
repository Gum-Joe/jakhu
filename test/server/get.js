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
  it('GET /start and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/start')
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
  it('GET /license and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/license')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /decline and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/decline')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /decline-y and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/decline-y')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /decline-n and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/decline-n')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /accept and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/accept')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /wosl and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/wosl')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /declinew and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/declinew')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /declinew-y and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/declinew-y')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /declinew-n and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/declinew-n')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /acceptw and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/acceptw')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /type and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/type')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /set-lang and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/set-lang')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /install-standard and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/install-standard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /set-install-standard and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/set-install-standard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /opt-standard and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/opt-standard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
  it('GET /recovery and should return 200', function (done) {
    request("http://localhost:6060")
      .get('/recovery')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200);
    done();
  });
});
