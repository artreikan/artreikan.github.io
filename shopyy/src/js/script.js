$(document).ready(function() {
  $(".index-slider__list").slick({
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    dots: true,
    appendDots: $(".index-slider__pager-container"),
    customPaging: function(slick, index) {
      return `<a class="index__slider-pager-bullet" aria-label="Go to ${index + 1} slide"></a>`
    }
  });
});
