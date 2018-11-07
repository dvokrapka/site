$(function() {

    var $modal = $('#modalBox');

    // Open modal
    $('.more-href').on('click', function(e) {
        e.preventDefault();
        $modal.css("display", "flex").hide().slideDown();
    });

    // Close modal
    $('.modal-close').on('click', function() {
        $(this).closest('.dv-modal-box').slideUp();
    });
});