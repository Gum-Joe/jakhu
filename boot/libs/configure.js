// Gets the config for web-os
var YAML = require('yamljs');
var fs = require('fs');
var assert = require('assert');
var checks = require('./checks/instances.js')
// parse YAML string
module.exports = {
loadconfig: function loadconfig() {
  // body...
  fs.open('./tmp/config.yml', 'w', function (err) {
    if(err){
      //assert.fail(err.code, null, " File config.yml could not be created");
    };
  });
  fs.readFile('./config/main.yml','utf8', function (err, data) {
    if(err){
      assert.fail(err.code, null, " Could not read config file main.yml");
    }
    var parse = YAML.parse(data);
    // create full file
    fs.openSync('tmp/config.yml', 'w');
    // Check out imports and contruct one big yml
    for (var i = 0; i < parse.import.length; i++) {
      if(fs.existsSync('config/'+parse.import[i]) !== true){
        assert.fail('ERNOENT || other', null, " File "+parse.import[i]+" does not exist, please check the location of the file so it can be imported");
      } else {
        fs.readFile('./config/'+parse.import[i], 'utf8', function (err, data) {
          if(err){
            assert.fail(err.code, null, " File "+parse.import[i]+" could not be read from");
          } else {
            fs.appendFile("./tmp/config.yml", data, 'utf8', function(err) {
              if(err) {
                assert.fail(err.code, null, " Could not write to tmp file for config");
              }
            });
          }
        });
      }
    }

    fs.appendFile("./tmp/config.yml", data, 'utf8', function(err) {
      if(err) {
        assert.fail(err.code, null, " Could not write to tmp file for config");
      }
    });

    // read imports
    //console.log(parse.import);
  });
  //checks.checkinstances('instances');

  // parse big one
}, getdata: function getdata() {
  // parse YAML
  var parsed = YAML.parse(fs.readFileSync('./tmp/config.yml','utf8'));
  return parsed

}};
