// Prettified by js-prettify (https://www.npmjs.com/package/js-prettify)
'use strict';
const socketio = require('socket.io');
const spawn = require('child_process').spawn;
const mkdirp = require('mkdirp');
const Git = require('./git.js');
const debug = require("debug")('socket.io');
const GithubPrefix = 'https://github.com/';

let ioe = module.exports = {};
const fs = require('fs');
ioe.start = (app) => {
    const io = socketio.listen(app);
    io.sockets.on('connection', function(socket) {
        if (~process.env.DEBUG.indexOf('socket.io')) {
            debug('New socket created.')
        } else {
            console.log('New socket created.');
        }
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
                                io.emit('downtime', x.toString() + " s")
                            } else {
                                io.emit('downtime', frun.toString() + " ms")
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
                fs.appendSync('app/etc/date.txt', new Date().getHours().toString() + new Date().getMinutes().toString())
            }
            var d = fs.readFileSync('app/etc/date.txt').toString();
            var fd = parseInt(d);
            var de = new Date().getHours().toString() + new Date().getMinutes().toString();
            io.emit('runtime', de - fd);
        }
        setInterval(f, 60 * 1000);
        fs.watchFile('app/etc/requesttotal.txt', {
            persistent: true,
            interval: 1
        }, (curr, prev) => {
            fs.readFile('app/etc/requesttotal.txt', 'utf8', function(err, data) {
                if (err) {
                    throw err
                } else {
                    if (parseInt(data) > 10000) {
                        const nda = parseInt(data) / 1000
                        const nnda = Math.round(nda)
                        io.emit('uptime', nnda.toString() + " s")
                    } else {
                        io.emit('uptime', data + " ms")
                    }
                }
            });
        });
        socket.on('taskserver', function(task) {
                console.log(task);
                io.emit('task', task)
            })
            // tasks
        socket.on('clonerepo', function(repositary) {
            // Start task
            // Clone using git tools
            let repo = new Git.Repo(`${__dirname}/../app/instances/${Git.normalizeURL(repositary.repo)}`)
            console.log(`${__dirname}/../app/instances/${Git.normalizeURL(repositary.repo)}`);
            // Checks
            repo.checks(
                (step, totalsteps, status) => {
                    const stepsdone = step - 1
                    const percent = 100 / totalsteps * stepsdone;
                    if (step > totalsteps) {
                        io.emit('clonerepoupdate', {
                            group: 'preparing',
                            message: '[code] done'
                        })
                    } else {
                        io.emit('clonerepoupdate', {
                            group: 'preparing',
                            percent: percent,
                            message: status
                        })
                    }
                },
                (err) => {
                    if (err) {
                        io.emit('clonerepoerr', {
                            id: repositary.id,
                            err: {
                                message: err.message
                            }
                        })
                    }
                },
                () => {
                    // Onfinsh
                    if (repositary.repo.startsWith('https://') || repositary.repo.startsWith('http://') || repositary.repo.startsWith('git://')) {
                        // Clone
                        debug('Repo url specified. Using that.')
                        io.emit('clonerepoupdate', {
                            group: 'cloning',
                            percent: 50,
                            message: "Cloning repo..."
                        })
                        repo.clone(repositary.repo, (repo, err) => {
                            if (!err) {
                                io.emit('clonerepoupdate', {
                                    group: 'cloning',
                                    message: '[code] done'
                                })
                            } else {
                                io.emit('clonerepoerr', {
                                    id: repositary.id,
                                    err: {
                                        message: err.message
                                    }
                                })
                            }
                        });
                    } else {
                        debug('Repo not in url form. Appending github prefix.')
                        io.emit('clonerepoupdate', {
                            group: 'cloning',
                            percent: 50,
                            message: "Cloning repo..."
                        })
                        repo.clone(GithubPrefix + repositary.repo, (repo, err) => {
                            if (!err) {
                                io.emit('clonerepoupdate', {
                                    group: 'cloning',
                                    message: '[code] done'
                                })
                            } else {
                                io.emit('clonerepoerr', {
                                    id: repositary.id,
                                    err: {
                                        message: err.message
                                    }
                                })
                            }
                        });
                    }
                }
            )

        });
        // Return io
        return io;
    });
};