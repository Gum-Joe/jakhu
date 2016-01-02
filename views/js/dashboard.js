// Javascript for dashboard
$(document).ready(function () {
  //notie.alert(1, 'Success!', 1.5);
  $('.carousel').carousel();
});
// Socket.io
var socket = io.connect();
// Process request socket
// and set html of #req
socket.on('request', function(req){
  document.getElementById("req").innerHTML = "Got "+req+" requests today";
});
// Process runtime socket
// and set html of #wruntime
socket.on('runtime', function(req){
  document.getElementById("wruntime").innerHTML = "Been running for "+req+' mins';
});
// Jquery
$(document).ready(function (){
      $(".ase").click(function (){
          $('html, body').animate({
              scrollTop: $("#info").offset().top}, 800);
          $('nav').removeClass('navbar-fixed-top');
      });
      // Move page to the right to show sidebar
      // onclick of hamburger icon
      // Move to right
      // if sidebar is showing
      $(".hamburger1").click(function (){
          //$(".page").css("margin-left", "204.9px");
          // 61.47px
            if($(".page").css("margin-left") !== "204.9px"){
              $(".page").animate({marginLeft: '204.9px'});
              if(!($(window).width() <= 460)){
                $("#projectheader").animate({paddingRight: '15%'});
              }
            } else {
              $(".page").animate({marginLeft: '61.47px'});
            }
      });
      // ?
      if(!($(window).width() <= 460)){
        $("#projectheader").animate({paddingRight: '5%'});
      }
      $('[data-toggle="tooltip"]').tooltip();
      // Set to active mode on click of sidevar <li>
      $(".sidebar-li").click(function () {
        $(this).css('background-color', "#2c3e50");
      })
      // hover over sidebar <li>
      $(".sidebara").mouseover(function () {
        $(this).css('background-color', "#2c3e50");
      })
      // move mouse away from sidebar <li>
      $(".sidebara").mouseout(function () {
        $(this).css('background-color', "#34495e");
      });
  });
  // Set icons in project-head to being icons
  // if window width is less than 989px
  if($(window).width() <= 989){
    // ids;
    // nwa
    // delwa
    // syncwa
    document.getElementById("nwa").innerHTML = '<span class="glyphicon glyphicon-plus"></span>';
    document.getElementById("delwa").innerHTML = '<span class="glyphicon glyphicon-remove"></span>';
    document.getElementById("syncwa").innerHTML = '<span class="glyphicon glyphicon-refresh"></span>';
  }
  // remove info if windows width is less than 463px
  // and make navbar only search bar
  if($(window).width() < 463){
    $("#info12").detach();
    $("#jumptonomobile").detach();
    $("#jumptonomobile2").detach();
    $("#jumptonomobile3").detach();
    $("#jumptonomobile4").detach();
    $("#jumptonomobile5").detach();
    $("#jumptonomobile6").detach();
  }
