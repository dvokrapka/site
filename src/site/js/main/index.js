$(function() {
    jsAPI();
});

// Main app js
var jsAPI = function() {

    var $goTop = $('#goTop'),
        $burger = $('#burger'),
        winH = $(window).height() - 300,
        $toggled = $('header').add($burger).add('.toplogo').add($goTop);

    // Show|hide menu
    $burger.on('click', function() {
        toggleMenu();
    });

    // Scroll to top
    $goTop.on('click', function() {
        scrollToHash(0);
    });

    // Toggle elements on window scroll
    $(window).on('scroll', function() {
        $toggled.toggleClass('appear', window.pageYOffset >= winH);
    });

    $toggled.toggleClass('appear', window.pageYOffset >= winH);
};



// Scroll to anchor
$(function() {
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        var clicked = $(this),
            tag = clicked.attr('data-scroll'),
            menu = clicked.closest('#mainMenu'),
            scrollTo;

        if (tag && tag.length) {
            if (menu && menu.length) {
                toggleMenu();
            }

            scrollTo = (tag === '#') ? clicked.attr('href') : clicked.closest(tag).next(tag);

            scrollToHash($(scrollTo).offset().top);
        }
        return false;
    });
});

// Scroll function with browser accesibility
function scrollToHash(top) {
    var b = browserDetect();
    if (b === 'Firefox' || b === 'Chrome' || b === 'Opera') {
        $('html').scrollTop(top);
    } else {
        $('html, body').animate({
            scrollTop: top
        }, 500);
    }
}

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


// MechAlert
var mechAlert = (function() {

    var notify = UIkit.notify,
        text;

    return {
        yes: function(msg, callback) {
            if (msg || typeof(msg) === "string") {
                text = msg;
            } else {
                text = '<div class="uk-text-center"><i class="uk-icon-small uk-icon-check-square-o"></i></div>';
            }

            notify(text, {
                status: 'success',
                timeout: 1000,
                pos: 'top-center',
                onClose: function() {
                    if (callback && typeof(callback) === "function") {
                        callback();
                    }
                }
            });
        },
        no: function(msg) {
            notify(msg, {
                status: 'danger',
                timeout: 0,
                pos: 'top-center'
            });
        },
        info: function(msg) {
            notify(msg, {
                timeout: 1000,
                pos: 'top-center'
            });
        },

    };
})();


// Check if string is json
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}