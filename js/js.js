
$(document).ready(function() {

  //左侧栏昵称鼠标悬浮动画
  $("#name").hover(function() {
    $("#name").addClass("animated bounce infinite");
  }, function() {
    $("#name").removeClass("animated bounce infinite");
  });

  //回到顶部按钮点击事件
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

  //左侧栏自适应右侧内容高度
  $("#left").height($("#right").height());
});
