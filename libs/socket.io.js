'use strict';
var socketio = require('socket.io');
var ioe = module.exports = {};
const fs = require('fs');
ioe.start = (app) => {
  const io = socketio.listen(app);
  io.sockets.on('connection', function(socket){
    console.log('New socket created.');
    // parse yml for req
    console.log();
    var yml = require("yamljs")
    // Watch file
    fs.watchFile('etc/requesttotal.txt', (curr, prev) => {
      io.emit('uptime', fs.readFileSync('etc/requesttotal.txt'))
    });
    function downtime() {
      const start = Date.now();
      let runtime;
      let frun;
      fs.readFile('etc/starttime.txt', 'utf8', (err, data) => {
        if (err) {
          throw err;
        } else {
          runtime = parseInt(start) - parseInt(data);
          fs.readFile('etc/requesttotal.txt', 'utf8', (err, data) => {
            if (err) {
              throw err;
            } else {
              frun = runtime - parseInt(data);
              if (frun > 10000) {
                const x = Math.round(frun / 1000);
                io.emit('downtime', x.toString()+" s")
              } else {
                io.emit('downtime', frun.toString()+" ms")
              }
            }
          })
        }
      });
    }
    setInterval(downtime, 1000);
    io.emit('request', yml.parse('etc/requests.yml').req);
    function f() {
      if (!fs.statSync('etc/date.txt')) {
        fs.openSync('etc/date.txt', 'w')
        fs.appendSync('etc/date.txt', new Date().getHours().toString()+new Date().getMinutes().toString())
      }
      var d = fs.readFileSync('etc/date.txt').toString();
      var fd = parseInt(d);
      var de = new Date().getHours().toString()+new Date().getMinutes().toString();
      io.emit('runtime', de-fd);
    }
    setInterval(f, 60 * 1000);
    fs.watchFile('etc/requesttotal.txt', {persistent:true,interval:1}, (curr, prev) => {
      fs.readFile('etc/requesttotal.txt', 'utf8', function (err, data) {
        if (err) {
          throw err
        } else {
          if (parseInt(data) > 10000) {
            const nda = parseInt(data) / 1000
            const nnda = Math.round(nda)
            io.emit('uptime', nnda.toString()+ " s")
          } else {
            io.emit('uptime', data+ " ms")
          }
        }
      });
    });
  });
  // Return io
  return io;
}
