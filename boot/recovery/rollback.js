var mkdirp = require('mkdirp');
var error = require('../../libs/error/bsod.js');
var clicolour = require("cli-color");
exports.createBackup = function createBackup(x){
  mkdirp("../../recovery", function (err) {
    if(err){
      error.throwError("RECOVERY_ROLLBACK_CREATE_BACKUP_DIR:"+err.code, err, err.code);
    }
    else {
      console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Created Recovery DIR");
    };
  });
  mkdirp("../../recovery/rollback", function (err) {
    if(err){
      error.throwError("RECOVERY_ROLLBACK_CREATE_BACKUP_DIR:"+err.code, err, err.code);
    }
    else {
      console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Created Rollback DIR");
    };
  });
  mkdirp("../../recovery/rollback/backup"+Date(), function (err) {
    if(err){
      error.throwError("RECOVERY_ROLLBACK_CREATE_BACKUP_DIR:"+err.code, err, err.code);
    }
    else {
      console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Created Rollback DIR for today");
    };
  });
}
