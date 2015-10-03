var config = require('../configure.js');
var assert = require('assert');
var fs = require('fs');

module.exports = {
  instances: function instances(data){
    //var data = config.getdata('instances');
    //console.log(data);
    for (var i = 0; i < data.instances.length; i++) {
      if(fs.existsSync('./instances/'+data.instances[i]) !== true){
        assert.fail('ERNOENT', null, 'Expected instance "'+data.instances[i]+'" to exist')
      };
    };
  }
};
