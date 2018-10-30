var $goTop = $('#goTop'),
    winH = window.innerHeight / 2,
    $toggled = $('header').add('.main-menu').add('.burger').add('.toplogo').add($goTop);

$(window)
    .on('scroll', function() {
        scrollToggle();
    })
    .on('load', function() {
        scrollToggle();
    });


// Toggle elements on window scroll
function scrollToggle() {
    $toggled.toggleClass('appear', window.pageYOffset >= winH);
}

// Scroll to top
$goTop.on('click', function() {
    $('html').animate({ scrollTop: 0 }, 1000);
});

// Scroll to anchor without changing url
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 1000);

        return false;
    });
});

// Hide mob menu on href click
$('.mainmenu').on('click', 'a', function(e) {
    e.preventDefault();
    toggleMenu();
});


// Show|hide menu
$('#burgerMenu').on('click', function() {
    toggleMenu();
});

// Toggle menu
function toggleMenu() {

    var $burger = $('#burgerMenu'),
        $menu = $('.mainmenu'),
        opened = $burger.attr('data-opened');

    // Toggle burger
    $burger.find('> div').toggleClass('toggle');

    if (opened) {
        // Close menu
        $burger.removeAttr('data-opened');
        $menu.slideUp();

    } else {
        // Show menu
        $burger.attr('data-opened', 1);
        $menu.css("display", "flex").hide().slideDown();
    }
}

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