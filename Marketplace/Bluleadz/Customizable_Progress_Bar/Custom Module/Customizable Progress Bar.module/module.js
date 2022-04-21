$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

  var scrollPercent = (s / (d - c)) * 100;
  
  $('#progress-bar').width(scrollPercent + '%');
  if ( s == 0) {
    $(".progress-container").css({ "max-height": '0px'});
  } else {
  $(".progress-container").css({ "max-height": '30px'});
  }
});

$("#scrolling-progress-container").appendTo("body");