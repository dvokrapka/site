$(function() {

    var $input = $('input[type=file]');

    $input.on('change', function() {

        if (this.files && this.files[0]) {

            $('.upload-preview').remove();

            var up = this.files,
                l = up.length;

            for (var i = 0; i < l; i++) {

                var $span = $('<span />').html(up[i].name).addClass('upload-preview');
                $input.closest('.dv-file-upload').append($span);
            }
        }
    });
});