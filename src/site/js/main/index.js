$(function() {
	jsAPI();
});

// Main app js
var jsAPI = function() {

    var $goTop = $('#goTop'),
        winH = window.innerHeight / 2,
        $toggled = $('header').add('#burger').add('.toplogo').add($goTop);

    // Toggle elements on window scroll
    $(window).on('scroll', function() {
        $toggled.toggleClass('appear', window.pageYOffset >= winH);
    });

    $toggled.toggleClass('appear', window.pageYOffset >= winH);

    // Scroll to top
    $goTop.on('click', function() {
        $('html').animate({ scrollTop: 0 }, 1000);
    });

    // Scroll to anchor without changing url
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 1000);

        return false;
    });

    // Hide mob menu on href click
    $('#mainMenu').find('a').on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });


    // Show|hide menu
    $('#burger').on('click', function() {
        toggleMenu();
    });

    // Submit form
    $('#contactMe').on('submit', function(event) {
        event.preventDefault();

        // Clean form
        $(this).trigger('reset');

        // Toggle accordion
        var accordion = UIkit.accordion(UIkit.$('#formAccordion'));

        accordion.toggleItem(UIkit.$('[data-wrapper]'), true, false);

        // Check
        UIkit.notify("<i class='uk-icon-check'></i> Повідомлення надіслано!", { pos: 'bottom-center' });
    });
};


// Toggle menu
function toggleMenu() {

    var $burger = $('#burger'),
        $menu = $('#mainMenu'),
        opened = $burger.attr('data-opened'),
        $items = $menu.find('a');

    // Toggle burger
    $burger.find('> span').toggleClass('toggle');

    // Show menu
    if (!opened) {
    		$burger.attr('data-opened', 1);
    		$menu.css("display", "flex").hide().slideDown();

    // Close menu
    } else {
    		$burger.removeAttr('data-opened');
    		$menu.slideUp();
    }
}
