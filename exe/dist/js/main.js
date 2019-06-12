$(document).ready(function() {
  var windowHeight = window.innerHeight;
  var skillsSection = document.querySelector(".skills__bars");
  var isAnimated = false;

  window.addEventListener("scroll", function() {
    var posFromTop = skillsSection.getBoundingClientRect().top;
    if (posFromTop - windowHeight <= 0 && !isAnimated) {
      animateProgressBars(
        ".progressbar__element",
        ".progressbar__line",
        ".progressbar__value"
      );
      isAnimated = true;
    }
  });

  window.addEventListener("resize", function() {
    windowHeight = this.innerHeight;
  });

  // init slider
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='btn carousel__button carousel__button--prev'>&lt;</button>",
    nextArrow:
      "<button type='button' class='btn carousel__button carousel__button--next'>&gt;</button>",
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
  var progressBars = document.querySelectorAll(progressBarClass);

  progressBars.forEach(function(el) {
    var value = +el.dataset.value;
    var indicator = el.querySelector(indicatorClass);
    var tooltip = el.querySelector(tooltipClass);
    indicator.style.width = value + "%";
    indicator.addEventListener("transitionend", function() {
      tooltip.textContent = value + "%";
      tooltip.style.opacity = 1;
    });
  });
}
