document.addEventListener('DOMContentLoaded', function () {
  const openMenuBtn = document.querySelector('.page-header__open-btn');
  const menu = document.querySelector('.page-header-nav');
  const body = document.body;

  openMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.add('active');
    body.classList.add('overlay');
  });

  body.addEventListener('click', function (e) {
    const targetClassList = e.target.classList;

    if (body.classList.contains('overlay') &&
        (targetClassList.contains('nav__link') || !targetClassList.contains('page-header-nav'))) {
      menu.classList.remove('active');
      body.classList.remove('overlay');
    }
  }, true);
});
