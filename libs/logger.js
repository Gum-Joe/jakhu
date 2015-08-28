var winston = require('winston');
var fs = require('fs');
var clicolour = require('cli-color');
winston.emitErrs = true;

var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: false,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: false,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

exports.createlog = function createlog(argument) {
  fs.stat('./logs/wos.log', function(err, stat){
    if(err === null){
        // do noting
      }
      else if( err.code == 'ENOENT'){
        console.log(clicolour.cyanBright("webOS ") + clicolour.yellowBright("oobe ") + "Create log file");
        // TODO: Add creating logs.
      }
      else{
        error.throwError("BOOT_CHECKS_FILES_"+err.code+":"+"config", err, err.code);
          }
        });
}

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
