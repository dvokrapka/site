$(function() {
    $('.typing').t({
        delay: 2,
        speed: 75,
        // beep: true,
        caret: '<span id="caret">:</span>',
        fin: function(elm) {
            $('#caret').css('opacity', 0);
            $('.scroll-btm').addClass('appear');
        }
    });
});