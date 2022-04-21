$('.resource-slider').slick({
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: 0,
  slidesToScroll: 1,
  prevArrow: '<img src="https://www.picussecurity.com/hubfs/Shield/Icons/slider-arrow-prev.svg" alt="left" />',
  nextArrow: '<img src="https://www.picussecurity.com/hubfs/Shield/Icons/slider-arrow-next.svg" alt="right"/>',
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }
    }
  ]
});

$(".resource-slider div.slick-slide").mouseover(function(){
    $(".resource-slider div.slick-slide").removeClass("slick-current"); 
    $(this).addClass("slick-current");
});
