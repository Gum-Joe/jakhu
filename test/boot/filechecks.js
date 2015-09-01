// This test checks out files
var kernal = require('../../boot/index.js');
var fs = require('fs');
var clicolour = require('cli-color');
var assert = require("assert");

describe('File checks', function() {
    it('tests checking out files', function (done) {
      var files = ['app.js', 'libs', 'boot'];
      for (var i = 0; i < files.length; i++) {
        fs.stat(files[i], function(err, stat){
          if(err === null){
              console.log('Checked out file '+files[i]+"..."+clicolour.greenBright("OK"));
            }
            else if( err.code == 'ENOENT'){
              throw err;
              console.log('Checked out file '+files[i]+"..."+clicolour.redBright("ERROR!"));
              error.throwError("BOOT_"+err.code+"_CHECKS_NOT_FOUND:"+files[i], err, err.code);
            }
            else{
              throw err;
              console.log('Checked out file '+files[i]+"..."+clicolour.redBright("ERROR!"));
              error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+files[i], err, err.code);
                }
              });
      }
      done();
    });
});
