$(document).ready(function() {
  // header slider
  $('.page-header-slider__wrapper').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });

  // information slider
  var $informationSlider = $('.information-slider');
  var $current = $('.information-slider-counter__current');
  var $total = $('.information-slider-counter__total');
  var $range = $('.information-slider-range');
  var $rangeThumb = $('.information-slider-range__thumb');

  $informationSlider.on('init reInit afterChange', function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var current = (currentSlide ? currentSlide : 0);
    var total = slick.slideCount;
    var rangeThumbPos = 100 / (total - 1) * current;
    
    $rangeThumb.css({
      'top': `${rangeThumbPos}%`
    })
    
    $current.text(current + 1);
    $total.text(total);
  });

  $informationSlider.slick({
    vertical: true,
    dots: true,
    appendDots: $('.information-slider-controls'),
    dotsClass: 'information-slider-controls__dots',
    customPaging: function(slider, i) {
      return `<button>
              <img src="dist/img/info-slider-icon-${i +
                1}.svg" alt="" width="25" height="29">
            </button>`;
    },
    prevArrow: $('.information-slider-controls__btn.up'),
    nextArrow: $('.information-slider-controls__btn.down')
  });

  var $nav = $('.for-whow-caption'),
    $line = $('<li id="magic-line"></li>').appendTo($nav),
    $activeLi,
    lineWidth,
    liPos;

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
});
