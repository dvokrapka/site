// Toggle menu
function toggleMenu() {

    var $burger = $('#burger').find('> span'),
        $menu = $('#mainMenu'),
        $html = $('html'),
        $items = $menu.find('a');


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
            .attr('scrollTop', $(window).scrollTop())
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