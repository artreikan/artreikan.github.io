$(document).ready(function () {
  // slick slider init
  $('.gallery__items').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 4,
    prevArrow: `<button class="gallery__btn gallery__btn--prev">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#back"></use>
                  </svg>
                </button>`,
    nextArrow: `<button class="gallery__btn gallery__btn--next">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#next"></use>
                  </svg>
                </button>`,

    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          centerPadding: '60px',
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '40px',
          arrows: false
        }
      }
    ]
  });

  // slider in sidebar
  $('.sidebar__slider').slick({
    dots: true,
    dotsClass: 'sidebar__slider-dots',
    prevArrow: `<button type="button" class="sidebar__slider-btn sidebar__slider-btn--prev" aria-label="Предыдущий слайд">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#back"></use>
                  </svg>
                </button>`,
    nextArrow: `
                <button type="button" class="sidebar__slider-btn sidebar__slider-btn--next" aria-label="Следующий слайд">
                  <svg>
                    <use xlink:href="dist/img/symbol/sprite.svg#next"></use>
                  </svg>
                </button>`,
    customPaging: function(slick, index) {
      return `<button type="button" class="sidebar__slider-dots-btn">
                <svg>
                  <use xlink:href="dist/img/symbol/sprite.svg#dot"></use>
                </svg>
              </button>`;
    }
  });

  // accordion
  $('.accordion__head').on('click', function () {
    const $this = $(this);

    $this.toggleClass('accordion__head--active')
    .siblings('.accordion__head')
    .removeClass('accordion__head--active');

    $('.accordion__body').not($this.next()).slideUp(300);
    $this.next().slideToggle(300);
  });

  // mobile menu
  const $mobileMenu = $('.mobile-menu');

  function openMenu() {
    $mobileMenu.addClass('mobile-menu--active');
  }

  function closeMenu() {
    $mobileMenu.removeClass('mobile-menu--active');
  }

  $('.open-menu').on('click', openMenu);

  $mobileMenu.on('click', '.close-menu, .mobile-menu__link', closeMenu);
});