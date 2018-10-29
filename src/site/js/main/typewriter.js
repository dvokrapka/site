$(function() {

    $('#gaslo').t({
        delay: 2,
        speed: 75,
        // beep: true,
        // blink: 300,
        caret: '<span id="caret">|</span>',
        fin:function(elm){
        	$('#caret').fadeOut('5000');
        	$('#name > span').addClass('blink');
        	$('.scroll-btm').addClass('appear');
        }

    });

});