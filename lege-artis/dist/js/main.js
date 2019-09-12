"use strict";

$(document).ready(function () {
  // slick slider init
  $('.gallery__items').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 4,
    prevArrow: "<button class=\"gallery__btn gallery__btn--prev\">\n                  <svg>\n                    <use xlink:href=\"dist/img/symbol/sprite.svg#back\"></use>\n                  </svg>\n                </button>",
    nextArrow: "<button class=\"gallery__btn gallery__btn--next\">\n                  <svg>\n                    <use xlink:href=\"dist/img/symbol/sprite.svg#next\"></use>\n                  </svg>\n                </button>",
    responsive: [{
      breakpoint: 860,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        centerPadding: '60px',
        arrows: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '40px',
        arrows: false
      }
    }]
  }); // slider in sidebar

  $('.sidebar__slider').slick({
    dots: true,
    dotsClass: 'sidebar__slider-dots',
    prevArrow: "<button type=\"button\" class=\"sidebar__slider-btn sidebar__slider-btn--prev\" aria-label=\"\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434\">\n                  <svg>\n                    <use xlink:href=\"dist/img/symbol/sprite.svg#back\"></use>\n                  </svg>\n                </button>",
    nextArrow: "\n                <button type=\"button\" class=\"sidebar__slider-btn sidebar__slider-btn--next\" aria-label=\"\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0441\u043B\u0430\u0439\u0434\">\n                  <svg>\n                    <use xlink:href=\"dist/img/symbol/sprite.svg#next\"></use>\n                  </svg>\n                </button>",
    customPaging: function customPaging(slick, index) {
      return "<button type=\"button\" class=\"sidebar__slider-dots-btn\">\n                <svg>\n                  <use xlink:href=\"dist/img/symbol/sprite.svg#dot\"></use>\n                </svg>\n              </button>";
    }
  }); // accordion

  $('.accordion__head').on('click', function () {
    var $this = $(this);
    $this.toggleClass('accordion__head--active').siblings('.accordion__head').removeClass('accordion__head--active');
    $('.accordion__body').not($this.next()).slideUp(300);
    $this.next().slideToggle(300);
  }); // mobile menu

  var $mobileMenu = $('.mobile-menu');

  function openMenu() {
    $mobileMenu.addClass('mobile-menu--active');
  }

  function closeMenu() {
    $mobileMenu.removeClass('mobile-menu--active');
  }

  $('.open-menu').on('click', openMenu);
  $mobileMenu.on('click', '.close-menu, .mobile-menu__link', closeMenu);
});