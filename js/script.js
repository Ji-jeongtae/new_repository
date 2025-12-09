$(function () {
  $("#home").show();
  $("#poster").hide().attr("aria-hidden", "true");

  $(".버튼-포스터보기").on("click", function (e) {
    e.preventDefault();
    $("#home").fadeOut(250, function () {
      $("#poster").fadeIn(350).attr("aria-hidden", "false");
    });
  });

  $(".버튼-뒤로").on("click", function () {
    $("#poster").fadeOut(250, function () {
      $("#poster").attr("aria-hidden", "true");
      $("#home").fadeIn(350);
    });
  });
});
