// Paralax on mouse move

var lFollowX = 0,
    lFollowY = 0,
    winX = $(window).width(),
    winY = $(window).height(),
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    var translate = 'translate(' + x * 2 + 'px, ' + y * 2 + 'px)';

    // Animate
    $('[data-paralax]').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });

    window.requestAnimationFrame(moveBackground);
}

$('[data-paralax]').closest('section').on('mousemove click', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, winX / 2 - e.clientX)),
        lMouseY = Math.max(-100, Math.min(100, winY / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
});

moveBackground();


// Paralax on scroll down
$(function() {

	var $el1 = $('.fs-bg-marker');
	var $el2 = $('.fs-bg-tablet');


	$(window).on('scroll', function () {

	    var scroll = $(document).scrollTop();

	    $el1.css({
	        'transform': 'translateX(-'+ scroll +'px)'
	        // 'transform': 'translateY(-'+ scroll +'px)'
	    });

	    $el2.css({
	        'transform': 'translateX('+ scroll +'px)'
	        // 'transform': 'translateY('+ scroll +'px)'
	    });
	});
});