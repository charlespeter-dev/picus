(function($, undefined) {
  $.extend($.infinitescroll.prototype,{

    _setup_twitter: function infscr_setup_twitter () {
      var opts = this.options,
          instance = this;

      // Bind nextSelector link to retrieve
      $(opts.nextSelector).click(function(e) {
        if (e.which == 1 && !e.metaKey && !e.shiftKey) {
          e.preventDefault();
          instance.retrieve();
        }

        setTimeout(function(){
          $('body').find('#infscr-loading').remove();
        },1);

      });

      // Define loadingStart to never hide pager
      instance.options.loading.start = function (opts) {
        opts.loading.msg
          .appendTo(opts.loading.selector)
          .show(opts.loading.speed, function () {
          instance.beginAjax(opts);
        });
      }
    },
    _showdonemsg_twitter: function infscr_showdonemsg_twitter () {
      var opts = this.options,
          instance = this;

      //Do all the usual stuff
      opts.loading.msg
        .find('img')
        .hide()
        .parent()
        .find('div').html(opts.loading.finishedMsg).animate({ opacity: 1 }, 2000, function () {
        $(this).parent().fadeOut('normal');
      });

      //And also hide the navSelector
      $(opts.navSelector).fadeOut('normal');

      // user provided callback when done
      opts.errorCallback.call($(opts.contentSelector)[0],'done');

    }

  });
})(jQuery);

/**
 * Infinite Scroll + Masonry + ImagesLoaded
 */

(function() {

  // Main content container
  var $container =  $('.blog-listing-wrapper:not(.simple-listing) > .post-listing');

  // Infinite Scroll
  $container.infinitescroll({

    // selector for the paged navigation (it will be hidden)
    navSelector  : ".blog-pagination",
    // selector for the NEXT link (to page 2)
    nextSelector : ".load-more",
    // selector for all items you'll retrieve
    itemSelector : ".blog-listing-wrapper > .post-listing > .post-item",
    behavior     : 'twitter',

    // finished message
    loading: {
      finishedMsg: 'No more pages to load.'
    }
  },

                            // Trigger Masonry as a callback
                            function( newElements ) {
    // hide new items while they are loading
    var $newElems = $( newElements ).css({ opacity: 0 });
    // ensure that images load before adding to masonry layout
    $newElems.imagesLoaded(function(){
      // show elems now they're ready
      $newElems.animate({ opacity: 1 });
      $container.masonry( 'appended', $newElems, true );
    });

  });

  nx= $('a.next-posts-link').attr('data-total-page-count'); 
  nx = parseInt(nx);
  nxc = 2;
  $('a.load-more').click( function(){
    nxc < nx ? nxc+=1 : $(this).fadeOut()
  })


})();