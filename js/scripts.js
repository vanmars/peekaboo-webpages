$(document).ready(function() {

  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#cat-showing").fadeToggle();
    $("#cat-hidden").fadeToggle();
  });

});