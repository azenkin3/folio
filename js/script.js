$(window).scroll(function () {
    var ws = $(this).scrollTop();
    if (matchMedia("screen and (min-width: 800px)").matches) {
    
    if (ws > 50) {
        $('.lime').css("transform", "translateX(0px)").css("animation-iteration-count", "45")
    }
}
});