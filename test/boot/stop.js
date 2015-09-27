// test whether Web-OS can stop
var stop = require('../../boot/index.js');
describe('Boot tests', function () {
  it('can we stop the server?', function (done) {
    // body...
    stop.stop();
    stop.monstop();
    done();
  });
});
