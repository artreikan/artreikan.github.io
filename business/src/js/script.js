document.addEventListener('DOMContentLoaded', () => {
  // mobile menu
  const openMenuBtn = document.querySelector('.page-header__open-btn');
  const menu = document.querySelector('.page-header-nav');
  const body = document.body;

  openMenuBtn.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.add('active');
    body.classList.add('overlay');
  });

  body.addEventListener('click', e => {
    const targetClassList = e.target.classList;

    if (body.classList.contains('overlay') &&
        (targetClassList.contains('nav__link') || !targetClassList.contains('page-header-nav'))) {
      menu.classList.remove('active');
      body.classList.remove('overlay');
    }
  }, true);

  // smooth scroll
  menu.addEventListener('click', e => {
    if (e.target.tagName !== 'A') {
      return;
    }

    e.preventDefault();

    // highlightActiveElement(e.target, 'nav__link--active');

    const sectionId = e.target.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest'
    });
  });

  // fix header on scroll
  const headerBottom = document.querySelector('.page-header__bottom');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      headerBottom.classList.add('page-header__bottom--fixed');
    } else {
      headerBottom.classList.remove('page-header__bottom--fixed');
    }
  });

  // scroll spy
  const sections = document.querySelectorAll('.js-section');

  const sectionsOffset = Object.create(null);

  sections.forEach(section => sectionsOffset[section.id] = section.offsetTop);
  console.log(sectionsOffset);

  window.addEventListener('scroll', () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let sectionId in sectionsOffset) {
      if (sectionsOffset[sectionId] <= (scrollPosition + 500)) {
        document.querySelector('.nav__link--active').classList.remove('nav__link--active');
        document.querySelector(`a[href*=${sectionId}]`).classList.add('nav__link--active');
      }
    }
  });
});

function highlightActiveElement(el, activeClassName) {
  document.querySelector(`.${activeClassName}`).classList.remove(activeClassName);
  el.classList.add(activeClassName);
}
