$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.Evoque_scrollup').fadeIn();
        } else {
            $('.Evoque_scrollup').fadeOut();
        }
    });
    $('.Evoque_scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});