$(window).on('load', function() {
  /* Get number of fieldsets in form */
  var numItems = $('.multi-step-form fieldset').length;
  
  /* Load navigation below form based on number of fieldsets */
  for(var i=0; i < numItems; i++){
    $("#multi-step-nav").append("<div class='nav-step'></div>");
  };
  
  /* Set counter variables and class declarations */
  var formstep = 0;
  var nextstep = 0;
  var fieldset = ".multi-step-form fieldset:nth-of-type(";
  var heading = ".multi-step-form h3:nth-of-type(";
  var step = ".multi-step-form div#multi-step-nav div.nav-step:nth-of-type(";
  
  /* Behaviour on 'Next' button click */
  $("input.multi-step-next").on("click", function(){
    formstep = formstep + 1;
    nextstep = formstep + 1;

    $(fieldset + formstep + ")").hide();
    $(fieldset + nextstep + ")").show();
    
    $(heading + formstep + ")").hide();
    $(heading + nextstep + ")").show();
    
    $(step + nextstep + ")").addClass("complete");
    
    if(formstep == (numItems - 1)) {
      $(".multi-step-form div.hs-submit").show();
      $(".multi-step-form input.multi-step-next").hide();      
    }
  }); 
  
});