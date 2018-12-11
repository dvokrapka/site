$(function() {
    var $modal = $('#modalBox'),
        $body = $modal.find('.dv-modal-body'),
        $close = $modal.find('.dv-modal-close'),
        $doc = $('window, body');

    // Open modal
    $('.portfolio-prev').on('click', function() {

        $modal
        		.attr('data-scroll', window.scrollY)
            .css("display", "flex")
            .hide()
            .slideDown(function(argument) {
                $doc.addClass('noscroll');
                $body.addClass('appear');
                $close.addClass('appear');
                $body.find('img').scrollTop(0);
            });

        // Hide modal on ESC press
        $(document).keypress(function(event) {
            if (event.charCode === 0) {
                closeBox();
            }
        });

        // Close modal
        $('.dv-modal-close').on('click', function() {
            closeBox();
        });

        function closeBox() {
        		$body.removeClass('appear');
        		$close.removeClass('appear');
            $doc.removeClass('noscroll');
            window.scrollTo(0, $modal.attr('data-scroll'));
            $modal.slideUp().scrollTop(0);
        }
    });
});