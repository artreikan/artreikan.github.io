document.addEventListener('DOMContentLoaded', function () {
  var windowHeight = window.innerHeight;
  var skillsSection = document.querySelector('.skills');
  var isAnimated = false;

  window.addEventListener('scroll', function () {
    var posFromTop = skillsSection.getBoundingClientRect().top;
    if (posFromTop - windowHeight <= 0 && !isAnimated) {
      animateProgressBars(
        '.progressbar__element',
        '.progressbar__line',
        '.progressbar__value'
      );
      isAnimated = true;
    }
  });

  window.addEventListener('resize', function () {
    windowHeight = this.innerHeight;
  });
})

function animateProgressBars(progressBarClass, indicatorClass, tooltipClass) {
  var progressBars = document.querySelectorAll(progressBarClass);

  progressBars.forEach(function (el) {
    var value = +el.dataset.value;
    var indicator = el.querySelector(indicatorClass);
    var tooltip = el.querySelector(tooltipClass);
    indicator.style.width = value + '%';
    indicator.addEventListener('transitionend', function () {
      tooltip.textContent = value + '%';
      tooltip.style.opacity = 1;
    })
  })
}