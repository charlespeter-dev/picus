$('.testimonial-slider').slick({
  infinite: true,
  centerMode: false,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<img src="https://www.picussecurity.com/hubfs/Shield/Icons/slider-arrow-prev.svg" />',
  nextArrow: '<img src="https://www.picussecurity.com/hubfs/Shield/Icons/slider-arrow-next.svg" />',
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});