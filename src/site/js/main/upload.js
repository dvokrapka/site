$(function() {
    $('input[type=file]').on('change', function() {

        if (this.files && this.files[0]) {

            var up = this.files,
                l = up.length;

            for (var i = 0; i < l; i++) {

                console.log(up[i].name);
            }

        }
    });
});