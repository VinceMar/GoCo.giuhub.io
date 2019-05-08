$(document).ready(function(){
  $("#name").hover(function(){
    $("#name").addClass("animated bounce infinite");
  },function(){
    $("#name").removeClass("animated bounce infinite");
  });
});
