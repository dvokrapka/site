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
        $('html').scrollTop(0);
    });

    // Toggle elements on window scroll
    $(window).on('scroll', function() {
        $toggled.toggleClass('appear', window.pageYOffset >= winH);
    });

    $toggled.toggleClass('appear', window.pageYOffset >= winH);


};


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