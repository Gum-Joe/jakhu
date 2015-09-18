var exec = require('child_process').exec;
var os = require('os');
var fs = require('fs');
var https = require('https');
var mkdirp = require('mkdirp');
var unzip = require('unzip');
exports.start = function start(callback) {
  if(os.type() === "Windows_NT"){
    // start mongo
    // download if not Here
    // and exec
    // TODO: Make work in order
    fs.stat('./packages/mongo', function (err) {
      if(err){
        console.log("Downloading MongoDB, please wait");
        mkdirp('tmp/packages');
        mkdirp('packages/mongo')
        var file = fs.createWriteStream("tmp/packages/mongo.zip");
        var request = https.get("https://fastdl.mongodb.org/win32/mongodb-win32-i386-3.0.6.zip?_ga=1.80391703.1629961069.1442594180", function(response) {
          response.pipe(file);
        });
        // unzip
        fs.createReadStream('tmp/packages/mongo.zip').pipe(unzip.Extract({ path: 'packages/mongo' }));
      };
    });
  } else {
    callback("EOS", "Not windows")
  }
}
