var mkdirp = require('mkdirp');
var error = require('../../libs/error/bsod.js');
var clicolour = require("cli-color");
var datea = "./recovery/rollback/backup";
var exec = require('child_process').exec;

//var PythonShell = require('python-shell');
exports.createBackup = function createBackup(x){
  mkdirp(datea, function (err) {
    if(err){
      error.throwError("RECOVERY_ROLLBACK_CREATE_BACKUP_DIR:"+err.code, err, err.code);
    }
    else {
      console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Created Rollback DIR for today");
    };
  });
  // Create backup
  if(process.env.NODE_ENV !== "dev"){
  exec("cp -R ./ ./recovery/rollback/backup", function(error, stdout, stderr){
    console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Created rollback Backup");
  });
  // rm .git
  exec("rm -rf ./recovery/rollback/backup/.git ./recovery/rollback/backup/node_modules", function(error, stdout, stderr){
    console.log(clicolour.cyanBright("webOS ")  + clicolour.yellowBright("recovery ")  + "Removed .git folder and node_modules");
  });
} else {
  console.log(clicolour.redBright("rollback: ") + "Not backing up as dev env");
}
  };
