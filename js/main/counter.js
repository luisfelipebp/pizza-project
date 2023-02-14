function initCounter() {
  $(".container-rating div span").each(function () {
    let value = +$(this).text();
    $(this).text(0);
    let incremento = Math.floor(value / 30);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      $(this).text(start);
      if (start > value) {
        $(this).text(value);
        clearInterval(timer);
      }
    }, 40);
  });
}
