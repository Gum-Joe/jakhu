var fs = require('fs')
var path = require('path')
var clicolour = require('cli-color')
var error = require('../../../libs/error/bsod.js')

var files = ["../../../app.js", "../../../node_modules"]

var i;

exports.checkInstances = function(x){
  for(i = 0; i > files.length; i++){
  fs.stat('instances', function(err, stat){
      if(err == null){
        console.log('Checked out file '+i+"..."+clicolour.greenBright("OK"));
        }
      else if( err.code == 'ENOENT'){
        console.log('Checked out file '+i+"..."+clicolour.redBright("ERROR!"));
      }
      else{
        error.throwError("BOOT_NOT_FOUND:"+i, err, err.code)
          }
        });
      };
    };
