$(document).ready(function () {
  // slick init
  $('.carousel-items').slick({
    autoplay: true,
    prevArrow: $('.carousel__btn_prev'),
    nextArrow: $('.carousel__btn_next'),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  });

  // tabs
  $('ul.catalog__tabs-caption').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
    .addClass('catalog__tab_active')
    .siblings()
    .removeClass('catalog__tab_active')
    .closest('div.container')
    .find('div.catalog__tabs-content')
    .removeClass('catalog__tabs-content_active')
    .eq($(this).index())
    .addClass('catalog__tabs-content_active');
  });
});