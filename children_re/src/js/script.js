$(document).ready(function() {
  // header slider
  $('.page-header-slider__wrapper').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    focusOnSelect: true
  });

  // information slider
  const $informationSlider = $('.information-slider');
  const $current = $('.information-slider-counter__current');
  const $total = $('.information-slider-counter__total');
  const $rangeThumb = $('.information-slider-range__thumb');

  $informationSlider.on('init reInit afterChange', function(
    _,
    slick,
    currentSlide,
    __
  ) {
    const current = currentSlide ? currentSlide : 0;
    const total = slick.slideCount;
    const rangeThumbPos = (100 / (total - 1)) * current;

    $rangeThumb.css({
      top: `${rangeThumbPos}%`
    });

    $current.text(current + 1);
    $total.text(total);
  });

  $informationSlider.slick({
    vertical: true,
    dots: true,
    appendDots: $('.information-slider-controls'),
    dotsClass: 'information-slider-controls__dots',
    customPaging: function(_, index) {
      return `<button>
              <img src="dist/img/info-slider-icon-${index +
                1}.svg" alt="" width="25" height="29">
            </button>`;
    },
    prevArrow: $('.information-slider-controls__btn.up'),
    nextArrow: $('.information-slider-controls__btn.down'),
    focusOnSelect: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          vertical: false
        }
      }
    ]
  });

  let maxHeight = -1;
  $('.information-slider .slick-slide').each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  $('.information-slider .slick-slide').each(function() {
    if ($(this).height() < maxHeight) {
      $(this).css(
        'margin',
        Math.ceil((maxHeight - $(this).height()) / 2) + 'px 0'
      );
    }
  });

  // magic line
  const $nav = $('.for-whow-caption');
  const $line = $('<li id="magic-line"></li>').appendTo($nav);
  let $activeLi;
  let lineWidth;
  let liPos;

  function refresh() {
    $activeLi = $nav.find('li.active');
    lineWidth = $activeLi.innerWidth();
    liPos = $activeLi.position().left;
  }
  refresh();

  $nav.css('position', 'relative');

  function lineSet() {
    $line.animate(
      {
        left: liPos,
        width: lineWidth
      },
      200
    );
  }
  lineSet();

  $nav.find('li').on('click', function() {
    $activeLi.removeClass('active');
    $(this)
      .addClass('active')
      .closest('div.tabs')
      .find('div.tabs-content')
      .removeClass('active')
      .eq($(this).index())
      .addClass('active');
    refresh();
    lineSet();
  });

  // mobile menu
  const $menu = $('.page-header-nav__list');
  const $openMenuBtn = $('.open-menu-btn');

  $menu.on('click', 'a, button', function() {
    console.log('click');
    $menu.animate(
      {
        right: -265
      },
      400
    );
  });

  $openMenuBtn.on('click', function() {
    $menu.animate(
      {
        right: 0
      },
      400
    );
  });
});
