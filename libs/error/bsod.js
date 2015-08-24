// Generated by CoffeeScript 1.9.3
(function() {
  var blue, clicolour, red, space, yell;

  clicolour = require('cli-color');

  red = function(text) {
    return console.error(clicolour.redBright(text));
  };

  yell = function(text) {
    return console.error(clicolour.yellowBright(text));
  };

  blue = function(text) {
    return console.error(clicolour.blueBright(text));
  };

  space = "                                                                 ";

  exports.throwError = function(code, err, ercode) {
    console.log("                                   ");
    blue(space + "             -- BEGIN ERROR --");
    red(space + "          Web-OS ran into a problem");
    yell(space + "To protect your data, we have shut down Web-OS");
    yell(space + "                          ");
    yell(space + "        This error code may help:");
    yell(space + "                    " + code);
    yell(space + "     ");
    yell(space + "          Here's the full error:");
    red(space + "        " + ercode + " - Web-OS error " + code);
    yell(space + "       " + err);
    blue(space + "             -- END OF ERROR --");
    console.log("                                   ");
    return process.exit(1);
  };

}).call(this);
