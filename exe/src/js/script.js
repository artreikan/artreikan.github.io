$(document).ready(function() {
  var windowHeight = window.innerHeight;
  var $skillsBars = $(".skills__bars")[0];
  var isAnimated = false;

  $(window).on("scroll", function() {
    var posFromTop = $skillsBars.getBoundingClientRect().top;
    if (posFromTop - windowHeight <= 0 && !isAnimated) {
      animateProgressBars(
        ".progressbar__element",
        ".progressbar__line",
        ".progressbar__value"
      );
      isAnimated = true;
    }
  });

  $(window).on("resize", function() {
    windowHeight = $(this).innerHeight;
  });

  // init slider
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button type='button' class='btn carousel__button carousel__button--prev'>
                  <svg>
                    <use xlink:href='dist/img/symbol/sprite.svg#arrow-left'></use>
                  </svg>
                </button>`,
    nextArrow: `<button type='button' class='btn carousel__button carousel__button--next'>
                  <svg>
                    <use xlink:href='dist/img/symbol/sprite.svg#arrow-right'></use>
                  </svg>
                </button>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 380,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });
});

function animateProgressBars(progressBarClass, indicatorClass, tooltipClass) {
  var $progressBars = $(progressBarClass);

  $progressBars.each(function() {
    var value = parseInt($(this).data("value"));
    var $indicator = $(this).find(indicatorClass);
    var $tooltip = $(this).find(tooltipClass);
    $indicator.css("width", value + "%");
    $indicator.on("transitionend", function() {
      $tooltip.text(value + "%");
      $tooltip.css("opacity", 1);
    });
  });
}
