function typeWrite() {

    var $preLoader = $('#preLoad'),
        $typing = $('[data-typing]'),
        afterTxt = $typing.html();

    // Get url & check if its an anchor
    var url = window.location.href,
        arr = url.split('/'),
        href = arr[arr.length - 1],
        anchor = /^#/.test(href);

    // Check if preloader is active
    if (!$preLoader.length || anchor) {
        $preLoader.removeClass('preload');
        $('header').removeClass('hidden');
    } else {
        $('html').addClass('noscroll');
        $typing.addClass('yellow-text');
    }

    $typing
        .html($typing.attr('data-typing'))
        .t({
            delay: 1.2,
            speed: 100,
            // beep: true,
            caret: ':',
            fin: function(elm) {
                // Hide caret and replace text
                elm
                    .delay(500).data('blinking', 0)
                    .fadeOut(function() {
                        clearInterval(elm.data('bi'));
                        elm.removeClass('yellow-text').html(afterTxt).fadeIn(1500);

                        // Hide preloader (or skip, if an anchor load)
                        if ($preLoader.length && !anchor) {
                            $preLoader
                                .fadeOut(1000, function() {
                                    $('header').removeClass('hidden');
                                    $('html').removeClass('noscroll');
                                    showScrollBtm();
                                });
                        } else {
                            showScrollBtm();
                        }
                    });
            }
        });
}

// Show scroll down button
function showScrollBtm() {
    $('.scroll-btm').fadeOut(function() {
        $(this).addClass('appear').fadeIn();
    });
}

$(function() {
    typeWrite();
});