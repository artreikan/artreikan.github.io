document.addEventListener(
  'DOMContentLoaded',
  function() {
    document.body.classList.remove('preload');
    const navBtn = document.querySelector('.page-header-nav__btn');
    const navList = document.querySelector('.page-header-nav__list');

    navBtn.addEventListener('click', function(e) {
      e.preventDefault();
      navList.classList.add('active');
      document.body.classList.add('overlay');
    });

    window.addEventListener('click', function(e) {
      const targetClassList = e.target.classList;

      if (
        !navList.classList.contains('active') ||
        targetClassList.contains('page-header-nav__btn') ||
        targetClassList.contains('btn__line')
      ) {
        return;
      }

      if (
        targetClassList.contains('page-header-nav__link') ||
        !targetClassList.contains('page-header-nav__list')
      ) {
        navList.classList.remove('active');
        document.body.classList.remove('overlay');
      }
    });
  },
  false
);
