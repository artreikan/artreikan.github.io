document.addEventListener('DOMContentLoaded', function() {
  const navBtn = document.querySelector('.page-header-nav__btn');
  const navList = document.querySelector('.page-header-nav__list');

  navBtn.addEventListener('click', function(e) {
    e.preventDefault();
    navList.classList.add('active');
  });

  window.addEventListener('click', function(e) {
    const classList = e.target.classList;

    if (
      !navList.classList.contains('active') ||
      classList.contains('page-header-nav__btn') ||
      classList.contains('btn__line')
    ) {
      return;
    }

    if (
      classList.contains('page-header-nav__link') ||
      !classList.contains('page-header-nav__list')
    ) {
      navList.classList.remove('active');
    }
  });
}, false);
