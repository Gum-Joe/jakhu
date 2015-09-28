// tests app.js

var app = require('../../app.js');

describe('app.js tests', function () {
  it('should test whether app.js is listening', function (done) {
    app.start('basic', true, '2020');
    done();
  });
});
