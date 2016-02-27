// Javascript for dashboard
// Socket.io
var socket = io.connect();
// Process request socket
// and set html of #req

socket.on('uptime', function (uptime) {
  console.log("hi");
  document.getElementById("uptime").innerHTML = uptime.toString('utf8')
})
