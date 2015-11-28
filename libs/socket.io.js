var stream = require('./stream.js');
var app = require('../app.js');
var io = require('socket.io').listen(app.server);

module.exports = {
  start: function start() {
    io.sockets.on('connection', function(socket){
      console.log('New socket created.');
      stream.req.on('data', function (data) {
        socket.emit('request', data);
      });
    });
  }
}
