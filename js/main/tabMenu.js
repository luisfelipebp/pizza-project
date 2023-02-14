$(".active-buttons li button").each(function () {
  $(this).on("click", function () {
    $(".active-buttons li button").removeClass("active-btn");
    $(this).addClass("active-btn");
    let dataAttr = "." + $(this).attr("data-tab");
    $(".tabmenu-item").addClass("disabled");
    $(dataAttr).removeClass("disabled");
  });
});
