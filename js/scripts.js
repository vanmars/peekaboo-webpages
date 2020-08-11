$(document).ready(function() {

  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".clickable2").click(function(){
    $("#cat-showing").fadeToggle();
    $("#cat-hidden").fadeToggle();
  });

  $(".expand").click(function(){
    $(".text-hidden").fadeToggle();
    $(".text-showing").fadeToggle();
  });

});