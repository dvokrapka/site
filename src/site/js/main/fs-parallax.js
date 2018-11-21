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
    // var skew = 'skew(' + x/10 + 'deg, ' + y/10 + 'deg)';
    // var scale = 'scale('+ 1 + (x/1000) + ')';

    // Animate
    $('[data-paralax]').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
        // 'transform': translate + skew
        // 'transform': translate + rotate
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