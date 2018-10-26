$(window).on('scroll', function() {
        toggleToTop();
        toggleHeader();
    })
    .on('load', function() {
        toggleToTop();
        toggleHeader();
    });

$('.mob-menu').find('a').on('click', function(e) {
    e.preventDefault();
    toggleMobMenu();
});


// Toggle scrolltop button
function toggleToTop() {

    var $toTop = $('#goTop');

    if (window.pageYOffset >= 80) {
        $toTop.fadeIn('slow');

    } else {
        $toTop.fadeOut('slow');
    }
}

// Show|hide mob menu
$('#openMenu').on('click', function() {
    toggleMobMenu(1);
});

$('#closeMenu').on('click', function() {
    toggleMobMenu();
});

function toggleMobMenu(bool) {

    if (bool) {
        $('.mob-menu')
            .css("display", "flex")
            .hide()
            .slideDown();
    } else {
        $('.mob-menu').slideUp();
    }
}

// Change opacity & size of header on scroll
function toggleHeader() {
    var scroll = window.pageYOffset >= 80;

    $('header').toggleClass('header-scroll', scroll);
    $('.main-menu').toggleClass('main-menu-vis', scroll);
    $('.burger').toggleClass('burger-scroll', scroll);
    $('.toplogo').toggleClass('toplogo-scroll', scroll);
}

// Scroll to top
$('#goTop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});

// Scroll to anchor without changing url
$(function() {
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        let elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 1000);

        return false;
    });
});

// Submit form
$('#contactMe').on('submit', function(event) {
    event.preventDefault();

    // Clean form
    $(this).trigger('reset');

    // Toggle accordion
    let accordion = UIkit.accordion(UIkit.$('#formAccordion'));

    accordion.toggleItem(UIkit.$('[data-wrapper]'), true, false);

    // Check
    UIkit.notify("<i class='uk-icon-check'></i> Повідомлення надіслано!", { pos: 'bottom-center' });
});


// Toggle services on hover
$(function() {

    $('.services-container').each(function() {

        var $container = $(this),
            $prev = $container.find('.prev'),
            $desc = $container.find('.services-hover');

        $container
            .mouseenter(function() {
                $desc.css("display", "flex").hide().fadeIn();
            })
            .mouseleave(function() {
                $desc.fadeOut('fast');
            });
    });
});