var fs = require('fs')
var path = require('path')
var clicolour = require('cli-color')
var error = require('../../../libs/error/bsod.js')

var files = ["app.js", "node_modules", "libs"];

var i;

exports.checkFiles = function checkFiles(x){
      fs.stat(files[0], function(err, stat){
        if(err === null){
            console.log('Checked out file '+files[0]+"..."+clicolour.greenBright("OK"));
          }
          else if( err.code == 'ENOENT'){
            console.log('Checked out file '+files[0]+"..."+clicolour.redBright("ERROR!"));
            error.throwError("BOOT_"+err.code+"_CHECKS_NOT_FOUND:"+files[0], err, err.code);
          }
          else{
            console.log('Checked out file '+files[0]+"..."+clicolour.redBright("ERROR!"));
            error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+files[0], err, err.code);
              }
            });
            fs.stat(files[2], function(err, stat){
              if(err === null){
                  console.log('Checked out file '+files[2]+"..."+clicolour.greenBright("OK"));
                }
                else if( err.code == 'ENOENT'){
                  console.log('Checked out file '+files[2]+"..."+clicolour.redBright("ERROR!"));
                  error.throwError("BOOT_"+err.code+"_CHECKS_NOT_FOUND:"+files[2], err, err.code);
                }
                else{
                  console.log('Checked out file '+files[2]+"..."+clicolour.redBright("ERROR!"));
                  error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+files[2], err, err.code);
                    }
                  });
            fs.stat(files[1], function(err, stat){
              if(err === null){
                  console.log('Checked out file '+files[1]+"..."+clicolour.greenBright("OK"));
                }
                else if( err.code == 'ENOENT'){
                  console.log('Checked out file '+files[1]+"..."+clicolour.redBright("ERROR!"));
                  error.throwError("BOOT_"+err.code+"_CHECKS_NOT_FOUND:"+files[1], err, err.code);
                }
                else{
                  console.log('Checked out file '+files[1]+"..."+clicolour.redBright("ERROR!"));
                  error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+files[1], err, err.code);
                    }
                  });

    };
