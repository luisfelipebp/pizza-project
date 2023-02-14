let $target = $(".scrollTop");
let offset = $(window).height() * (3 / 4);

rotateSlide();

function animeScroll() {
  let documentTop = $(document).scrollTop();

  $target.each(function () {
    let itemTop = $(this).offset().top;

    if (documentTop > itemTop - offset) {
      $(this).addClass("animate");
    } else {
      $(this).removeClass("animate");
    }
  });
}

animeScroll();

$(document).on("scroll", function () {
  animeScroll();
});
