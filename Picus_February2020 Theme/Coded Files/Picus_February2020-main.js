$(function() {

  /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */

  $('.custom-menu-primary').addClass('js-enabled');

  /* Mobile button with three lines icon */
  $('.cm-logo-wrapper').before('<button class="mobile-trigger" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span> </span><span> </span><span> </span></button>');

  $('.mobile-trigger').click(function() {
    $('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
    $('body').toggleClass('mobile-open');
    return false;
  });

  $(window).scrollTop() >= 15 ? $("body").addClass("sticked") : $("body").removeClass("sticked");
  $(window).scroll(function() {
    var e = $(window).scrollTop();
    var n = $("body").hasClass("sticked");
    e >= 15 && !n ? $("body").addClass("sticked") : e < 15 && n && $("body").removeClass("sticked");
  });
  
  if ($('.banner-area, .home-banner-area').length<1){
    $('body').addClass('no-banner-page sticked');
  }
  
  // Header Height
  var headerFixHeight = function() {
    var headerHeight = $('.custom-header').outerHeight();
    $('.no-banner-page .custom-header-wrapper').css('min-height', headerHeight + 'px')
  }
  $(document).ready(function() {
    headerFixHeight();
  });
  $(window).on('load resize', function() {
    headerFixHeight();
  });
  
});

window.onload = function() {  
  $('.post-comments-form-wrapper').each(function(){
    if ( $(this).find('form').length < 1 && $('div#comments-listing').html() == "" ){
      $(this).addClass('no-comment-form')
    }
  });
  setTimeout(function() {
    $('.form-module-wrapper .hs-fieldtype-select .input').append('<span class="arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>');
    $('.hs-form .actions').append('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>');
  }, 500);
}

// Smooth Scroll JS
$(function() {
  $('.banner-area #click').click(function() {
    var bannerHeight = $('.banner-area').outerHeight();
    var headerHeight = $('.custom-header').outerHeight();
    var offsetValue = bannerHeight - headerHeight;
    $('html,body').animate({
      scrollTop: offsetValue
    }, 1000);
  });
});

/* Smooth scroll for anchor links */
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

/* Play Gif on hover */
$(document).ready(function()
{
    $(".animated-gif").hover(
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });
});

