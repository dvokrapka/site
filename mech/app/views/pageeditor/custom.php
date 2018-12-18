<!-- Page template -->
<div class="uk-form-row">
    <label class="uk-form-label">Шаблон сторінки:</label>
    <div class="uk-form-controls" data-uk-margin>
        <?php echo form_dropdown('options[tpl]', $tpl_select, $options['tpl'] ?? $parent['options']['pages_tpl'] ?? 'default', ' class="uk-width-large-1-5"'); ?>
    </div>
</div>

<!-- Test medialib -->
<?php echo $this->media_lib->medialib_select('Бібліотека', 'testlib', $options['widget'] ?? null, $id ?? null); ?>
