$(document).ready(function() {
  $('.page-header__nav-menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('page-header__nav-menu-btn--active');
    $('.page-header__nav-list').slideToggle(300);
  });

  // slick slider init
  $('.index-slider__list').slick({
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    dots: true,
    appendDots: $('.index-slider__pager-container'),
    customPaging: function(slick, index) {
      return `<a class="index-slider__pager-bullet" aria-label="Go to ${index +
        1} slide"></a>`;
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          vertical: false,
          verticalSwiping: false
        }
      }
    ]
  });

  const $newArrivalsItem = $('.new-arrivals__item');
  let newArrivalsItemHeight = $newArrivalsItem.outerHeight() + 'px';

  $(window).on('resize', function() {
    if ($(window).width() > 720) {
      $('.page-header__nav-list').removeAttr('style');
      $('.page-header__nav-menu-btn').removeClass(
        'page-header__nav-menu-btn--active'
      );
    }
    newArrivalsItemHeight = $newArrivalsItem.outerHeight() + 'px';
  });

  $newArrivalsItem.hover(function() {
    $(this).css('height', newArrivalsItemHeight);
  });
});
