$(".section-main > :first").addClass("active");

function rotateSlide() {
  let activeSlide = $(".section-main > .active");
  let nextSlide = activeSlide.next();

  if (nextSlide.length == 0) {
    nextSlide = $(".section-main > :first");
  }
  activeSlide.removeClass("active");
  nextSlide.addClass("active");
}

setInterval(rotateSlide, 10000);
