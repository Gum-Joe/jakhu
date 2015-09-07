var assert = require('assert');
var request = require('supertest');
var http = require('http');

describe('GET requests', function () {
  it('GET / and should return 200', function (done) {
    request("http://localhost:8080")
      .get('/')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
    done();
  });
  it('GET /dashboard and should return 200', function (done) {
    request("http://localhost:8080")
      .get('/dashboard')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done);
    done();
  });
});
