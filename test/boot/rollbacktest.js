var rollback = require('../../boot/recovery/rollback.js');

describe("Boot tests", function(){
  it("should see if a rollback backup can be created", function (done) {
    // tests
    rollback.createBackup("test");
    done();
  });
});
