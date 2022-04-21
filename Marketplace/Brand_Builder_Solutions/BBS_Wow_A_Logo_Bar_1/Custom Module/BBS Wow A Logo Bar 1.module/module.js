var $logoSlider = jQuery.noConflict();

var elems = document.getElementsByClassName('bbs-slideshow');

for (let i = 0; i < elems.length; i++) {
  let timeinterval = 10;
  let spaceinterval = 1;
  let max;
  let firstrun = true;
  let timer = null;
  let gallery = function() {
    if (firstrun) {
      max = elems[i].scrollWidth;
      while (elems[i].scrollWidth < max * 2) {
        var length = elems[i].children.length;
        for (let j = 0; j < length; j++) {
          elems[i].appendChild(elems[i].children[j].cloneNode(true));
        }
        break;
      }
      firstrun = false;
    }
    if (elems[i].scrollLeft >= max) {
      elems[i].scrollLeft -= max;
    }
    else {
      elems[i].scrollLeft += spaceinterval;
    }
  };
  function startInterval() {
    var speed = $logoSlider(elems[i]).attr('data-speed');
    timer = setInterval(gallery, speed)
  }
  startInterval();
}


