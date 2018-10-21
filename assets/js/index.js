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
    $('header').toggleClass('header-scroll', window.pageYOffset >= 80);
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
    $('.services-container').mouseenter(function() {

        $(this)
            .find('.services-hover').css("display", "flex")
            .hide()
            .fadeIn()
            .find('.services-hover-block > *')
            .addClass('show-services');

    }).mouseleave(function() {
        $(this)
            .find('.services-hover').fadeOut();
    });
});