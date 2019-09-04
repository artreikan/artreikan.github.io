$(document).ready(function(){
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
});