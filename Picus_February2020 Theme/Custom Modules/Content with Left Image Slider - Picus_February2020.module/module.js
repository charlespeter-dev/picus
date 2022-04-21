$('.content-with-left-image-slider-wrapper .carousel-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  dots: true,
  adaptiveHeight: true,
  prevArrow: $('.content-with-left-image-slider-wrapper .carousel-control-prev'),
  nextArrow: $('.content-with-left-image-slider-wrapper .carousel-control-next')
});