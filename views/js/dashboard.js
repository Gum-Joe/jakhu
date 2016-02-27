// Javascript for dashboard
// Socket.io
var socket = io.connect();
// Process request socket
// and set html of #req

socket.on('uptime', function (uptime) {
  document.getElementById("uptime").innerHTML = uptime.toString('utf8')
})
socket.on('downtime', function (downtime) {
  document.getElementById("downtime").innerHTML = downtime.toString('utf8')
})
