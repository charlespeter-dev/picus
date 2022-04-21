// js
$("document").ready(function(){
var clicky = "#" + $("#clickerName").html();
var lastFocus;  
  function disappear (){
    $(".modal-outer").removeClass("visible");
  }
$(clicky).click(function() {
  event.preventDefault();
  $(".modal-outer").addClass("visible");
});
$("#close").click(function() {
  event.preventDefault();
  disappear();
});
$(document).mouseup(function(e) {
  var container = $(".modal");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    disappear();
  }
});
  function modalClose ( e ) {
  if ( !e.keyCode || e.keyCode === 27 ) {
    disappear();
  }
}
document.addEventListener('keydown', modalClose);
})