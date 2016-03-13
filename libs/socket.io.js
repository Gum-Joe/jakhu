'use strict';
const socketio = require('socket.io');
const spawn = require('child_process').spawn;
const mkdirp = require('mkdirp');
let ioe = module.exports = {};
const fs = require('fs');
ioe.start = (app) => {
  const io = socketio.listen(app);
  io.sockets.on('connection', function(socket){
    console.log('New socket created.');
    // parse yml for req
    console.log();
    var yml = require("yamljs")
    // Watch file
    fs.watchFile('app/etc/requesttotal.txt', (curr, prev) => {
      io.emit('uptime', fs.readFileSync('app/etc/requesttotal.txt'))
    });
    function downtime() {
      const start = Date.now();
      let runtime;
      let frun;
      fs.readFile('app/etc/starttime.txt', 'utf8', (err, data) => {
        if (err) {
          throw err;
        } else {
          runtime = parseInt(start) - parseInt(data);
          fs.readFile('app/etc/requesttotal.txt', 'utf8', (err, data) => {
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
    io.emit('request', yml.parse('app/etc/requests.yml').req);
    function f() {
      if (!fs.statSync('app/etc/date.txt')) {
        fs.openSync('app/etc/date.txt', 'w')
        fs.appendSync('app/etc/date.txt', new Date().getHours().toString()+new Date().getMinutes().toString())
      }
      var d = fs.readFileSync('app/etc/date.txt').toString();
      var fd = parseInt(d);
      var de = new Date().getHours().toString()+new Date().getMinutes().toString();
      io.emit('runtime', de-fd);
    }
    setInterval(f, 60 * 1000);
    fs.watchFile('app/etc/requesttotal.txt', {persistent:true,interval:1}, (curr, prev) => {
      fs.readFile('app/etc/requesttotal.txt', 'utf8', function (err, data) {
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
    socket.on('taskserver', function (task) {
      console.log(task);
      io.emit('task', task)
    })
    // tasks
    socket.on('clonerepo', function (cmd) {
      // Start task
      // Create dir
      mkdirp('./app/instances/'+cmd.repo)
      // Start clone
      const tas = spawn('git', ['clone', `https://github.com/${cmd.repo}`, './app/instances/'+cmd.repo])
      tas.stdout.on('data', (data) => {
        io.emit('clonerepoupdate', {id: cmd.id, out: data.toString('utf8')});
        console.log(data.toString('utf8'));
      })
      tas.stderr.on('data', (data) => {
        io.emit('clonerepoupdate', {id: cmd.id, out: data.toString('utf8')});
        console.log(data.toString('utf8'));
      })
      tas.on('exit', (code) => {
        io.emit('clonerepoupdateexit', {id: cmd.id, out: `Cloning exited with ${code}.`});
      })
    })
  });
  // Return io
  return io;
}
