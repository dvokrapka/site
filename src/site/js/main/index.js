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

        var clicked = $(this),
            tag = clicked.attr('data-scrolldown'),
            scrollTo;

        if (tag) {
            scrollTo = clicked.closest(tag).next(tag);
        } else {
            scrollTo = clicked.attr("href");
        }

        $('html, body').animate({ scrollTop: $(scrollTo).offset().top }, 800);

        return false;
    });

    // Hide mob menu on href click
    $('#mainMenu').find('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        toggleMenu();
    });


    // Show|hide menu
    $('#burger').on('click', function() {
        toggleMenu();
    });

    // Toggle header for dark|light background
    if ($('[data-dark]').length) {
        $('header').addClass('dark-header');
    }

    $('.form-button').on('click', function() {
        var $form = $(this).closest('.uk-accordion').find('form');
        $form.find('input:visible:first').focus();
    });

    // Any form control
    $('form').each(function(index, el) {

        var $form = $(this),
            $submit = $form.find('[type=submit]'),
            $inputs = $form.find('input').not($submit);

        // Submit form
        $submit.on('click', function(event) {

            event.preventDefault();

            // Toggle accordion
            $form.slideToggle(function() {
                // Clean form
                $(this).trigger('reset');
                // Notify
                UIkit.notify("<i class='uk-icon-check'></i> Повідомлення надіслано!", { pos: 'bottom-center' });
            });

        });

        // Prevent form submit by enter
        $inputs.on('keypress', function(event) {

            if (event.keyCode == 13) {

                event.preventDefault();

                // Focus on next input
                var inputs = $(this).parents("form").eq(0).find(":input"),
                    idx = inputs.index(this);

                // Find if the last input (last == submit)
                if (idx == inputs.length - 1) {
                    inputs[0].select();
                } else {
                    inputs[idx + 1].focus();
                    inputs[idx + 1].select();
                }
                return false;
            }
        });
    });
};


// Toggle menu
function toggleMenu() {

    var $burger = $('#burger').find('> span'),
        $menu = $('#mainMenu'),
        $items = $menu.find('a');

    // Show menu
    if (!$menu.is(':visible')) {
        $burger.addClass('toggle');
        $menu.css("display", "flex").hide().slideDown();

        $(document).keypress(function(event) {
            if (event.charCode === 0) {

                $burger.removeClass('toggle');
                $menu.slideUp();
            }
        });

        // Close menu
    } else {
        $burger.removeClass('toggle');
        $menu.slideUp();
    }
}
