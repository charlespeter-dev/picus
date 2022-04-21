$(window).scroll(function() {
    var $html = $("html");
    var windowScrollTop = $(window).scrollTop();
    if (windowScrollTop > 200) {
        $html.addClass("slide-in");
    } else {
    }
});



