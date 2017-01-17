$(function() {
  $(".main-header .pointer").on("click", function(e) {
    e.preventDefault();

    var nav = $(".navbar-default").height();

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $("body, html").animate({scrollTop: top - nav}, 1000);
  });

  $("#home .navbar-nav a").on("click", function(e) {
    e.preventDefault();

    var nav = $(".navbar-default").height();

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $("body, html").animate({scrollTop: top - nav}, 1500);
  });

  $("footer .up").on("click", function() {
    $("body, html").animate({scrollTop: 0}, 1500);
  });

  $(".mobile-menu").on("click", function() {
    $(this).toggleClass("active");
    $("aside").toggleClass("active-menu");
  });

  $("aside .nav li a").on("click", function(e) {
    e.preventDefault();

    var nav = $(".navbar-default").height();

    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $(".mobile-menu").removeClass("active");
    $("aside").removeClass("active-menu");
    $("body, html").animate({scrollTop: top - nav}, 1000);
  });
});
