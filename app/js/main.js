$(function () {
  $(".products_slider").slick({
    prevArrow:
      '<button class="slider-btn slider-btn__left"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.7816 32L34 24L25.7816 16"/></svg></button>',
    nextArrow:
      '<button class="slider-btn slider-btn__right"><svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2184 16L26 24L34.2184 32"/></svg></button>',
    infinite: false,
  });

  $(".questions_item-title").on("click", function () {
    $(".questions_item").removeClass("questions_item-active");
    $(this).parent().addClass("questions_item-active");
  });
});
