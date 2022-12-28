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
socket.on('notification', function (n) {
  $("#notifications").prepend(`<li>
      <a href="#">
          <div>
              ${n}
              <span class="pull-right text-muted small">${new Date().getHours()}:${new Date().getMinutes()}</span>
          </div>
      </a>
  </li>`);
})
$(document).ready(function(){
  $('#appstable').DataTable();
  $('#requeststable').DataTable();
  $('.hamburger').click(function () {
    if ($(this).hasClass('is-active')) {
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
    }
  })
});
