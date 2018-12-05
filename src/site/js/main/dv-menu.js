// Toggle menu
function toggleMenu() {

    var $burger = $('#burger').find('> span'),
        $menu = $('#mainMenu'),
        $html = $('html');

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
            .css("display", "flex").hide().slideDown(function() {
                $html.addClass('noscroll');
                $burger.addClass('toggle');
            });
    }

    // Hide menu
    function closeMenu() {

        $html
            .removeClass('noscroll')
            .scrollTop($menu.attr('scrollTop'));
        $burger.removeClass('toggle');
        $menu.slideUp();
    }
}