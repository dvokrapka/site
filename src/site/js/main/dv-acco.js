$(function() {

    $('.dv-acco-toggle').on('click', function() {

        var $acco = $($(this).attr('data-acco'));

        $acco.slideToggle(function() {

            if ($acco.is(':visible')) {
                $acco.find('input:first').focus();
            }
        });
    });
});