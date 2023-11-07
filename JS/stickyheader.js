$(function() {
      // Sticky Header
      $(window).scroll(function() {
        var secHeight = $(".section1").height();

        if ($(this).scrollTop() >= secHeight) {
          $("#headersti").addClass("sticky_header");
          $(".circle-img").css({"opacity":0,"transform":"translateY(5%)"});
          $(".nm-prof").css({"opacity":1});
        } else {
          $("#headersti").removeClass("sticky_header");
          $(".circle-img").css({"opacity":1,"transform":"translateY(5%)"});
          $(".nm-prof").css({"opacity":0});
        }
      });
    });
