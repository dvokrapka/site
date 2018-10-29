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

        let elementClick = $(this).attr("href"),
            destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 1000);

        return false;
    });
});

// Hide mob menu on href click
$('.mob-menu').find('a').on('click', function(e) {
    e.preventDefault();
    toggleMobMenu();
});


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