$(".fabs").hover(function() {
  $(".prime").toggleClass("zmdi-plus");
  $(".prime").toggleClass("rotateInUpLeft");
  $(".prime").toggleClass("zmdi-share");
  $(".prime").toggleClass("flipInX");
  $(".sec").toggleClass("fadeInUp");
});

$(".fab").hover(function() {
  $(this).children(".sec").toggleClass("wobble");
  $(this).children(".sec").toggleClass("fadeInUp");
});