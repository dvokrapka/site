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