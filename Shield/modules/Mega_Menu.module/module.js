/* Mobile Navigation */
var x = window.matchMedia("(max-width: 769px)");
  
$(".dt-mobile-burger .burger").click(function(){
  $(".header__row-2, .header__navigation, .dt-mobile-burger").addClass("active");
  $(".dt-mobile-burger .burger").addClass("hide");
  $(".dt-mobile-burger .close").addClass("show");
});
$(".dt-mobile-burger .close").click(function(){
  $(".header__row-2, .header__navigation, .dt-mobile-burger").removeClass("active");
  $(".dt-mobile-burger .burger").removeClass("hide");
  $(".dt-mobile-burger .close").removeClass("show");
});
$("div.custom-menu-primary-mega div.hs-item-has-children a:first-of-type").click(function(event){
  if (x.matches) {
  event.preventDefault();
  }
  $(".dropdown").removeClass("no-hover");
  $(this + " .dropdown-content").addClass("active");
});
$("div.custom-menu-primary-mega .sub-menu-back").click(function(event){
  $(".dropdown").addClass("no-hover");
});

/* Header background change */
$('div.custom-menu-primary-mega div.dropdown a, .dropdown-content').hover(function() {
    $('header:not(.scroll)').addClass('mm-bg');
});

$('.dnd-section, .blog-header__inner, .blog-post').hover(function() {
    $('header:not(.scroll)').removeClass('mm-bg');
});