var mkdirp = require('mkdirp');
var error = require('../../libs/error/bsod.js')
exports.createBackup = function createBackup(x){
  mkdirp("../recovery", function (err) {
    if(err){
      error.throwError("BOOT_"+err.code+"_CHECKS_NOT_FOUND:"+files[0], err, err.code);
    }
    else {
      console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("setup ")  + "Create Instances Dir");
    }
  });
  mkdirp("../recovery/rollback");
  mkdirp("../recovery/rollback/backup"+Date());
}
