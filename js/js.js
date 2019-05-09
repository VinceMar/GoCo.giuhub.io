
$(document).ready(function() {
  $("#name").hover(function() {
    $("#name").addClass("animated bounce infinite");
  }, function() {
    $("#name").removeClass("animated bounce infinite");
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function() {
    $("html,body").animate({
      scrollTop: 0
    }, 800);
  });

  $("#left").height($("#right").height());
});
