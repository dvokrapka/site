$(function() {

    var $modal = $('#modalBox'),
    		$doc = $('window, body');

    // Open modal
    $('.portfolio-prev').on('click', function() {

        $modal
            .css("display", "flex")
            .hide().slideDown()
            .attr('data-scroll', window.scrollY);

        $doc.addClass('noscroll');

        $(document).keypress(function(event) {
            if (event.charCode === 0) {

                $doc.removeClass('noscroll');
                window.scrollTo(0, $modal.attr('data-scroll'));
                $modal.slideUp();
            }
        });
    });

    // Close modal
    $('.modal-close').on('click', function() {

        var $mod = $(this).closest('.dv-modal-box');

        $doc.removeClass('noscroll');
        window.scrollTo(0, $mod.attr('data-scroll'));
        $mod.slideUp();
    });

});