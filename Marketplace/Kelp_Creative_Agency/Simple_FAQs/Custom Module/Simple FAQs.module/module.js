var questions = document.querySelectorAll('.simple-faqs-item');
questions.forEach(function(item, index) {
  item.addEventListener('click', function() {
    item.classList.toggle('simple-faqs-item--open');
  });
});