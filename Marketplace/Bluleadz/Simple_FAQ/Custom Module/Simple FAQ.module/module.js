$('.faq-card').click(function() {
  if ( $(this).hasClass('open') ) {
        $(this).find('.faq-answer').slideUp();
        $(this).removeClass('open');
      } else {
        $(this).find('.faq-answer').slideDown();
        $(this).addClass('open')
      }
});
