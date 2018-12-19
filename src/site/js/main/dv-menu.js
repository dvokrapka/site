// Toggle menu
function toggleMenu() {

    var $burger = $('#burger'),
        $menu = $('#mainMenu'),
        $html = $('html'),
        $items = $menu.find('a'),
        loc = window.location.href;

    // Show/Hide menu
    if (!$menu.is(':visible')) {

        $(document).keypress(function(event) {
            if (event.charCode === 0) {
                closeMenu();
            }
        });
        showMenu();
    } else {
        closeMenu();
    }

    // Show menu
    function showMenu() {

        $menu
            .attr('scrollTop', $('html').scrollTop())
            .css("display", "flex")
            .hide()
            .slideDown(function() {
                $html.addClass('noscroll');
                $burger.addClass('toggle');
            });

        // Show menu items
        $items.fadeIn(function() {

            $.each($items, function(i, t) {
                setTimeout(function() {
                    $(t).addClass('sweep');
                }, i * 80);
            });
        });

        // Make menu items active
        $items.each(function() {
            if (loc === this.href) {
                $(this).addClass('active');
            }
        });
    }

    // Hide menu
    function closeMenu() {
        $html
            .removeClass('noscroll')
            .scrollTop($menu.attr('scrollTop'));
        $menu
            .slideUp(function() {
                $items.removeClass('sweep');
                $burger.removeClass('toggle');
            });
    }
}


$(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var clicked = $(this),
            tag = clicked.attr('data-scroll'),
            menu = clicked.closest('#mainMenu');

        if (tag && tag.length) {
            if (menu && menu.length) {
                toggleMenu();
            }

            if (tag === '#') {
                scrollTo = clicked.attr('href');
            } else {
                scrollTo = clicked.closest(tag).next(tag);
            }

            $('html').scrollTop($(scrollTo).offset().top);
        }
        return false;
    });
});

// Remove anchor from url
$(function() {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
});