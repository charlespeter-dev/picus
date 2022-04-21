(function() {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
  }

  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';

  var Nav = document.querySelector('.header__navigation')
  var Search = document.querySelector('.header__search')

  var allToggles = document.querySelectorAll('.header--toggle')
  var navToggle = document.querySelector('.header__navigation--toggle')
  var langToggle = document.querySelector('.header__language-switcher--toggle')
  var searchToggle = document.querySelector('.header__search--toggle')
  var closeToggle = document.querySelector('.header__close--toggle')

  var allElements = document.querySelectorAll('.header--element, .header--toggle')

  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function showFocusOutline() {
    document.body.classList.add(SHOW_FOCUS_STYLES_CLASS);
    document.body.classList.remove(HIDE_FOCUS_STYLES_CLASS);
  }

  function hideFocusOutline() {
    document.body.classList.add(HIDE_FOCUS_STYLES_CLASS);
    document.body.classList.remove(SHOW_FOCUS_STYLES_CLASS);
  }

  function toggleNav() {
    allToggles.forEach(function(toggle) {
      toggle.classList.toggle('hide')
    })

    Nav.classList.toggle('open')
    navToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function toggleSearch() {
    allToggles.forEach(function(toggle) {
      toggle.classList.toggle('hide')
    })

    Search.classList.toggle('open')
    searchToggle.classList.toggle('open')

    closeToggle.classList.toggle('show')
  }

  function closeAll() {
    allElements.forEach(function(element) {
      element.classList.remove('hide', 'open')
    })

    closeToggle.classList.remove('show')
  }

  domReady(function() {
    if (!document.body) {
      return;
    } else {

    }
  });
})();

/* Sticky Header */
$(window).scroll(function(){
  if ($(window).scrollTop() >= 100) {
    $('.header').addClass('position scroll');
  }
  else {
    $('.header').removeClass('position scroll');
  }
});

/* Mobile Navigation */
$(function() {

  $('.custom-menu-primary').addClass('js-enabled');
  
  /* Mobile button with three lines icon */
  $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><i></i></div>');  
  
  $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
  $('.mobile-trigger').click(function() {
      $(this).next('.custom-menu-primary .hs-menu-wrapper').slideToggle(250);
      $('body').toggleClass('mobile-open');
      $('.child-trigger').removeClass('child-open');
      $('.hs-menu-children-wrapper').slideUp(250);
      return false;
   });

  $('.child-trigger').click(function() {
      $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').slideToggle(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
      $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
      $(this).toggleClass('child-open');
      return false;
  });

});

/* logo alt */
  document.querySelector("#hs-link-site_logo_hs_logo_widget > img").alt='Picus Security Logo';