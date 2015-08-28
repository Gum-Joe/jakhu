var fs = require('fs');
var clicolour = require('cli-color');

exports.first = function first(x) {
  fs.stat('config', function(err, stat){
    if(err === null){
        // do noting
      }
      else if( err.code == 'ENOENT'){
        console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "Create config dir");
        // TODO: Add mkdrip config.
      }
      else{
        error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+"config", err, err.code);
          }
        });
  console.log("Web-OS first time setup");
}
