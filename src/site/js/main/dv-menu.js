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
            .css({ 'scroll-behavior': 'auto' })
            .scrollTop($menu.attr('scrollTop'));

        $menu.slideUp(function() {
            $items.removeClass('sweep');
            $burger.removeClass('toggle');
            $html.css({ 'scroll-behavior': 'smooth' });
        });
    }
}