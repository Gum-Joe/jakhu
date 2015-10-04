var config = require('../configure.js').getdata();
var assert = require('assert');
var fs = require('fs');

module.exports = {
  instances: function instances(){
    //var data = config.getdata('instances');
    //console.log(data);
    for (var i = 0; i < config.instances.length; i++) {
      if(fs.existsSync('./instances/'+config.instances[i]) !== true){
        assert.fail('ERNOENT', null, 'Expected instance "'+config.instances[i]+'" to exist')
      };
    };
  }
};
