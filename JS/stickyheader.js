$(function() {
  // Navigation Bar links | Header
  $(document).ready(function() {
    $(".ab_arrow").on("click", function() {
      $(".nav_act").removeClass("active");
      $(".about_act").addClass("active");
    });
    $(".nav_act").on("click", function() {
        $(".nav_act").removeClass("active");
        $(this).addClass("active");
    });
  });

  // Sticky Header | Header
  $(window).scroll(function() {
    var secHeight = $(".section1").height();

    if($(this).scrollTop() > secHeight) {
      $("#headersti").addClass("sticky_header");
    } else if($(this).scrollTop() >= secHeight - 120) {
      $(".circle-img").css({"opacity":"0","margin-top":"-100px"});
      $(".nm_prof_hide").css({"opacity":"1", "padding-top": "0px"});
    } else {
      $("#headersti").removeClass("sticky_header");
      $(".circle-img").css({"opacity":"1","margin-top":"0px"});
      $(".nm_prof_hide").css({"opacity":"0", "padding-top": "100px"});
    }
  });

  // Show more | Resumé
  $(".show_more_container").on("click", function(){
    var $education = $(".education, .certificates");

    if ($education.hasClass("expanded")) {
        // If already expanded, collapse it
        $education.removeClass("expanded");
        $education.css("max-height", "525px");
        $(this).find(".show_hide").text("View More Details");
    } else {
        // If collapsed, expand to natural height
        $education.addClass("expanded");
        $education.css("max-height", $education.prop('scrollHeight') + "px");
        $(this).find(".show_hide").text("Show Less Details");
    }
  });

  // Choose Device | Portfolio
  $(".dvc").on("click", function() {
      $(".dvc").removeClass("active");
      $(this).addClass("active");
  });

  // Randomize | Portfolio
  $(document).ready(function() {
    var container = $('#grid-container');

    Math.seedrandom('25');
    var items = container.children().get();
    items.sort(function() {
      return Math.random() - 0.5;
    });

    container.html(items);
  });
});
