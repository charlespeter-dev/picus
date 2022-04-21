$('.resource-slider').slick({
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  centerPadding: 0,
  slidesToScroll: 1,
  prevArrow: '<img src="{{ get_asset_url('/Shield/images/icons/slider-arrow-prev2-white.svg') }}" />',
  nextArrow: '<img src="{{ get_asset_url('/Shield/images/icons/slider-arrow-prev-white.svg') }}" />',
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
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
