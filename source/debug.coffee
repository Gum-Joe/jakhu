normalizePort = (val) ->
  port = parseInt(val, 10)
  
  # named pipe
  return val  if isNaN(port)
  
  # port number
  return port  if port >= 0
  false

###*
Event listener for HTTP server "error" event.
###
onError = (error) ->
  throw error  if error.syscall isnt 'listen'
  bind = (if typeof port is 'string' then 'Pipe ' + port else 'Port ' + port)
  
  # handle specific listen errors with friendly messages
  switch error.code
    when 'EACCES'
      console.error bind + ' requires elevated privileges'
      process.exit 1
    when 'EADDRINUSE'
      console.error bind + ' is already in use'
      process.exit 1
    else
      throw error
  return

###*
Event listener for HTTP server "listening" event.
###
onListening = ->
  addr = server.address()
  bind = (if typeof addr is 'string' then 'pipe ' + addr else 'port ' + addr.port)
  debug 'Listening on ' + bind
  return
app = require('../app')
debug = require('debug')('Web-OS:server')
http = require('http')
app.on 'error', onError
app.on 'listening', onListening
module.exports = app
module.exports = normalizePort()
module.exports = onError()
module.exports = onListening()