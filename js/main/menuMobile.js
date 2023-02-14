$(window).resize(function () {
  if ($(window).width() <= 906) {
    $(".nav-header").hide();
    $(".btn-mobile").show();
  } else {
    $(".nav-header").show();
    $(".btn-mobile").hide();
    $(".container-mobile").hide();
    $(".btn-mobile").removeClass("active");
  }
});

$(".btn-mobile").on("click", function (event) {
  $(".btn-mobile").toggleClass("active");
  $(".container-mobile").slideToggle(300);
});
