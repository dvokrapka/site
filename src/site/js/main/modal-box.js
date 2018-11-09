$(function() {
    var $modal = $('#modalBox');

    // Open modal
    $('.more-href').on('click', function(e) {
        e.preventDefault();
        $modal
            .css("display", "flex")
            .hide().slideDown()
            .attr('data-scroll', window.scrollY);

        $('window, body').addClass('noscroll');
    });

    // Close modal
    $('.modal-close').on('click', function() {

        var $mod = $(this).closest('.dv-modal-box');

        $('window, body').removeClass('noscroll');
        window.scrollTo(0, $mod.attr('data-scroll'));
        $mod.slideUp();
    });
});