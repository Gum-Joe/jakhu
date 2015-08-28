var fs = require('fs');
var clicolour = require('cli-color');
var mkdirp = require('mkdirp');
var error = require('../error/bsod.js')
//var setup = require('')

exports.first = function first(x) {
    console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ")+"Beginning Web-OS first time setup...");
  fs.stat('../../config', function(err, stat){
    if(err === null){
        // do noting
      }
      else if( err.code == 'ENOENT'){
        // TODO: Add mkdrip config.
        mkdirp('config', function(err) {
          if (err) {
            error.throwError("SETUP_CREATE_DIR_CONFIG", err, err.code);
          } else {
            console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "Created config dir");
          }
        });

      }
      else{
        error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+"config", err, err.code);
          }
        });
}
