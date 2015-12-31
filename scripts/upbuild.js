// Increment builds
var pack = require('../package.json');
var exec = require('child_process').exec;

exec("git rev-list HEAD --count", function (error, stdout, stderr) {
  var com = parseInt(stdout) - parseInt(pack.version.slice(4))
  console.log(com);
  for (var i = 0; i < com; i++) {
    exec("npm version minor")
  }
});
