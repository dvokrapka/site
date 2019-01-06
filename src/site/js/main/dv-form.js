$(function() {
    BotCheck();
});

// Check for spam
function BotCheck() {

    $('form').each(function() {
        var $form = $(this),
            $inputs = $form.find(':input');

        $inputs.each(function() {
            $(this).on('blur', function() {
                $form.removeAttr('data-bot');
            });
        });
    });

}

// Open form with accordeon
$('.form-button').on('click', function() {
    var $form = $(this).closest('.uk-accordion').find('form');
    $form.find('input:visible:first').focus();
});

// Any form control
$('form').each(function(index, el) {

    var $form = $(this),
        $submit = $form.find('[type=submit]'),
        $inputs = $form.find('input').not($submit);

    // Submit form
    $submit.on('click', function(event) {
        event.preventDefault();
        formSubmit($(this));
    });

    // Prevent form submit by enter
    $inputs.on('keypress', function(event) {

        if (event.keyCode == 13) {

            event.preventDefault();

            // Focus on next input
            var inputs = $(this).parents("form").eq(0).find(":input"),
                idx = inputs.index(this);

            // Find if the last input (last == submit)
            if (idx == inputs.length - 1) {
                inputs[0].select();
            } else {
                inputs[idx + 1].focus();
                inputs[idx + 1].select();
            }
            return false;
        }
    });
});

// Submit form
function formSubmit(submit) {

    var $form = submit.closest('form'),
        $formName = $form.attr('data-form-submit'),
        formData = new FormData($form[0]);

    // Append page title
    formData.append('pagetitle', document.title);

    // Bot spam protect
    if ($form.attr('data-bot')) {
        formData.append('bot', true);
    }

    // Append form name
    if (typeof($formName !== 'undefined')) {
        formData.append('form', $formName);
    }

    $.post({
        url: $form.attr('action'),
        data: formData,
        contentType: false,
        processData: false,
        success: function(msg) {

        		// If success
            if (IsJsonString(msg)) {
                mechAlert.yes($.parseJSON(msg).success, function() {

                    // Reset form and bot check
                    $form.trigger('reset').attr('data-bot', 'true').slideToggle();

                });
            // If error
            } else {
                mechAlert.no(msg);
            }
        }
    });
    return false;
}