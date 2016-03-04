// test config
var c = require('../../app/boot/libs/configure.js')

describe('Config tests', function () {
  it('should configure Jakhu', function (done) {
    c.loadconfig();
    done();
  });
});
