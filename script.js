$(function () {
  $("#home").show();
  $("#poster").hide().attr("aria-hidden", "true");

  $(".btn-view").on("click", function (e) {
    e.preventDefault();
    $("#home").fadeOut(250, function () {
      $("#poster").fadeIn(350).attr("aria-hidden", "false");
    });
  });

  $(".btn-back").on("click", function () {
    $("#poster").fadeOut(250, function () {
      $("#poster").attr("aria-hidden", "true");
      $("#home").fadeIn(350);
    });
  });
});
