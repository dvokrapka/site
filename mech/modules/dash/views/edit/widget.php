<div class="uk-form-row" data-lib="<?php echo $lib_name; ?>" data-page="<?php echo ($page_id ?? null); ?>">
	<label class="uk-form-label"><?php echo $label; ?></label>
	<div class="uk-form-controls" data-uk-margin>
		<?php echo form_dropdown('options[widget]['.$lib_name.'][id]', $libs, $lib_id, 'class="uk-width-large-1-2" data-lib-select'); ?>
		&ensp;<i class="uk-text-success uk-icon-small uk-icon-hover uk-icon-edit" data-lib-edit data-uk-tooltip title="Редагувати список елементів"></i>
		<input type="hidden" name="options[widget][<?php echo $lib_name; ?>][items]" value='<?php echo $items ?? '-1'; ?>'>
	</div>
</div>