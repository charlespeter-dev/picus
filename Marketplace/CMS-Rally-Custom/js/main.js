(function() {

  // Variables
  var nav = document.querySelector('.header__navigation');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');

  // Functions
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function toggleNav() {
    nav.classList.toggle('open');
    navToggle.classList.toggle('hide');
    closeToggle.classList.toggle('show');
  }

  function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('hide');
    closeToggle.classList.remove('show');
  }

  // Event Listeners
  domReady(function() {
    if (!document.body) {
      return;
    } else {
      navToggle.addEventListener('click', toggleNav);
      closeToggle.addEventListener('click', closeNav);
    }
  });

})();

// Window Load for Forms
window.onload = function() {

  // Variables
  var i = 0;
  var formInputs = document.querySelectorAll('.hs-input');

  // Polyfills
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // Forms: Adding classes for inputs that are focused or blurred
  for (i = 0; i < formInputs.length; i++) {
    if (formInputs.length !== 0) {
      formInputs[i].closest('.hs-form-field').classList.add('in-focus');
    }

    formInputs[i].addEventListener('focus', function(event) {
      event.target.closest('.hs-form-field').classList.add('in-focus');
      event.target.closest('.hs-form-field').classList.remove('has-error');
    });

    formInputs[i].addEventListener('blur', function(event) {
      if (event.target.value.length == 0) {
        event.target.closest('.hs-form-field').classList.remove('in-focus');
      }

      var errorMsgs = event.target
        .closest('.hs-form-field')
        .getElementsByClassName('hs-error-msgs');

      setTimeout(function() {
        if (errorMsgs.length !== 0 && event.target.value.length == 0) {
          console.log('has errors');
          event.target.closest('.hs-form-field').classList.add('has-error');
        } else {
          console.log('does not have errors');
          event.target.closest('.hs-form-field').classList.remove('has-error');
        }
      }, 10);
    });
  }
};

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