$(function() {
    editMediaLib();
});

// Edit medialib in frame (modal)
function editMediaLib() {

    // Toggle medialib edit button on medialib select
    $('[data-lib-select]')
        .on('change', function() {
            $(this).siblings('[data-lib-edit]').slideToggle($(this).val() > 0);
        })
        .each(function() {
            $(this).siblings('[data-lib-edit]').toggle($(this).val() > 0);
        });


    // Edit medialib in frame
    $('[data-lib-edit]')
        .on('click', function() {

            var $control = $(this).closest('[data-lib'),
                $select = $control.find('[data-lib-select]'),

                $data = {
                    'lib_name': $control.attr('data-lib'),
                    'lib_id': $select.val(),
                    'lib_title': $select.find('option:selected').text(),
                    'page_id': $control.attr('data-page')
                };

            // AJAX load modal with widget list
            $.get(baseUrl + 'admin/medialib/tpl_items_edit', $data, function(data) {

                // Load data
                $('body').append(data);

                // Open modal for template Type-1
                if ($('#itemsModal').length) {

                    // Load list
                    listLibItems($data.lib_name);

                    // Open modal
                    UIkit.modal('#itemsModal')
                        .show()
                        .on({
                            'hide.uk.modal': function() {
                                $(this).remove();
                            }
                        });
                }

                // Open modal for template Type-2
                if ($('#frameModal').length) {

                    // Resize dash
                    toggleDash();
                    Cookies.set('page_id', $data.page_id);

                    // Open modal
                    UIkit.modal('#frameModal')
                        .show()
                        .on({
                            'hide.uk.modal': function() {
                                $(this).remove();
                                toggleDash();

                                if (Cookies.get('page_id')) {
                                    Cookies.remove('page_id');
                                }
                            }
                        });
                }
            });
        });
}

// Autoappend page_id in frame
$(function() {

    var $showOn = $('input[data-get-pageid]');

    if ($showOn.length && Cookies.get('page_id')) {
        $showOn.val(Cookies.get('page_id'));
    }

});


// Control items to show on page
function listLibItems(libName) {

    var list = $('#itemsList'),
        showAll = list.find('[data-show-all]'),
        items = list.find('tr[data-id]'),
        input = $('input[name="options[widget][' + libName + '][items]"]'),
        obj = input.val().split(","),
        allState = (obj[0] == '-1') ? 1 : 0;

    items
        // Toggle items on load
        .each(function() {
            toggleItemState($(this), input);
            setItemState($(this), input);
        })

        // Toggle items on click
        .on('click', '[data-item-view]', function() {

            var item = $(this).closest('tr[data-id]'),
                show = (item.attr('data-show') == 1) ? 0 : 1;

            // Save show attribute to item
            item.attr('data-show', show);

            // Change item view
            setItemState(item, input);

            // Save to input
            saveToInput(input, items);
        });

    // Toggle all|none items
    showAll
        .attr('data-show-all', allState)
        .toggleClass('uk-text-success', allState == 1)
        .on('click', function() {

            var all = $(this),
                state = (all.attr('data-show-all') == 1) ? 0 : 1;

            all
                .toggleClass('uk-text-success', state == 1)
                .attr('data-show-all', state);

            items.each(function() {

                // Change item state
                $(this).attr('data-show', state);

                // Change item view
                setItemState($(this), input);
            });

            // Save to input
            saveToInput(input, items);
        });
}

// Toggle each lib item
function toggleItemState(item, input) {

    var id = item.attr('data-id'),
        obj = input.val().split(",");

    item.attr('data-show', (obj.includes(id) || obj[0] == -1) ? 1 : 0);
}

// Set shown|hidden item view
function setItemState(item) {

    var show = item.attr('data-show'),
        view = item.find('[data-item-view]'),
        shown = 'uk-text-success',
        hidden = 'inactive uk-overlay-grayscale';

    if (show == 1) {
        view.addClass(shown);
        item.removeClass(hidden);
    } else {
        view.removeClass(shown);
        item.addClass(hidden);
    }
}

// Save items array to input
function saveToInput(input, items) {

    var selected = items.filter('[data-show="1"]'),
        all = $('[data-show-all]'),
        count1 = items.length,
        count2 = selected.length,
        obj = [],
        i = 0;

    // All items
    if (count2 === count1) {
        obj = '-1';
        all.attr('data-show-all', 1).addClass('uk-text-success');
    }

    // No items
    else if (count2 === 0) {
        obj = '0';
        all.attr('data-show-all', 0).removeClass('uk-text-success');
    }

    // If some selected
    else {
        all.attr('data-show-all', 0).removeClass('uk-text-success');
        selected.each(function() {
            obj[i++] = parseInt($(this).closest('tr[data-id]').attr('data-id'));
        });
    }

    // Save object to inputs
    input.val(obj);
}