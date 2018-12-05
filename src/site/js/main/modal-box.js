$(function() {
    var $modal = $('#modalBox'),
        $doc = $('window, body');

    // Open modal
    $('.portfolio-prev').on('click', function() {
        $modal.attr('data-scroll', window.scrollY).css("display", "flex").hide().slideDown(function(argument) {
        		// $doc.css({overflow : 'scroll'});
            $doc.addClass('noscroll');
        });
        $(document).keypress(function(event) {
            if (event.charCode === 0) {
                $doc.removeClass('noscroll');
                window.scrollTo(0, $modal.attr('data-scroll'));
                $modal.slideUp();
            }
        });
        // Close modal
        $('.dv-modal-close').on('click', function() {
            $doc.removeClass('noscroll');
            window.scrollTo(0, $modal.attr('data-scroll'));
            $modal.slideUp();
        });
    });
});