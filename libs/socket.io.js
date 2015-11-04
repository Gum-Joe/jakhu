module.exports = {
  start: function start(app) {
    var io = require('socket.io')(app.listen);
    io.on('connection', function(socket){
      console.log('New socket created.');
    });
  }
}
