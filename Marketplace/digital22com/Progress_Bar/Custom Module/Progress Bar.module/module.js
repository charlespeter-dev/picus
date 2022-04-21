var getHeight = 0;
$('.progress-container').each(function(index){
  getHeight += $(this).height(); 
  
  $(this).css('top',getHeight-$(this).height());
  
});

console.log(getHeight);