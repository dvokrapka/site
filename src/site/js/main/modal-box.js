$(function() {


    // Open modal
    $('.portfolio-prev').on('click', function() {

        var $modal = $('#modalBox'),
        		$modalContent = $('#pfMedia'),
            $body = $modal.find('.dv-modal-body'),
            $close = $modal.find('.dv-modal-close'),
            $media = $(this).find('[data-media]').html(),
            $doc = $('window, body');

    		$modalContent.html($media);

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
        $close.on('click', function() {
            closeBox();
        });

        function closeBox() {
            $body.add($close).removeClass('appear');
            $doc.removeClass('noscroll');
            window.scrollTo(0, $modal.attr('data-scroll'));
            $modal.slideUp().scrollTop(0);
        }
    });
});