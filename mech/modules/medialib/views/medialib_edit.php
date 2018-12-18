<!-- Options -->
<ul class="uk-tab" data-uk-tab="{connect:'#medialibOptions', swiping: false}">
	<li><a href=""><i class="uk-icon-small uk-icon-file-o"></i>&ensp;Загальні</a></li>
	<li><a href=""><i class="uk-icon-small uk-icon-list"></i>&ensp;Вміст</a></li>
	<li><a href=""><i class="uk-icon-small uk-icon-picture-o"></i>&ensp;Медіа</a></li>
	<li><a href=""><i class="uk-icon-small uk-icon-sliders"></i>&ensp;Налаштування</a></li>
</ul>
<ul id="medialibOptions" class="uk-switcher uk-margin">
	<!-- MAIN -->
	<li>
		<!-- Title -->
		<?php echo $this->lang_lib->lang_switcher('#titleTr'); ?>
		<ul id="titleTr" class="uk-switcher uk-margin">
			<?php foreach ($this->langs as $lang): ?>
			<li>
				<div class="uk-form-row">
					<label class="uk-form-label">Заголовок:</label>
					<div class="uk-form-controls">
						<?php echo form_input('title[' . $lang["slug"] . ']', $title[$lang["slug"]] ?? '', 'class="uk-width-1-1"'); ?>
					</div>
				</div>
			</li>
			<?php endforeach;?>
		</ul>
		<!-- Name -->
		<div class="uk-form-row">
			<label class="uk-form-label">Назва папки:</label>
			<div class="uk-form-controls">
				<?php echo form_input('name', $name ?? '', 'class="uk-width-large-1-1" data-alpha-num'); ?>
			</div>
		</div>
		<!-- Parent category -->
		<div class="uk-form-row uk-margin-top">
			<label class="uk-form-label">Категорія:</label>
			<div class="uk-form-controls" data-uk-margin>
				<select class="uk-width-1-1" name="pid" id="catSelect">
					<?php echo $cat_select; ?>
				</select>
			</div>
		</div>
		<!-- Publish -->
		<div class="uk-form-row">
			<label class="uk-form-label">Публікувати:</label>
			<div class="uk-form-controls" data-uk-margin>
				<i class="tf-toggle-icon"></i>
				<input type="hidden" name="pub" value="<?php echo $pub ?? 1; ?>">
			</div>
		</div>
	</li>
	<!-- Content -->
	<li>
		<?php echo $this->lang_lib->lang_switcher('#contentTr'); ?>
		<ul id="contentTr" class="uk-switcher uk-margin">
			<?php foreach ($this->langs as $lang): ?>
			<li>
				<?php echo form_textarea('content[' . $lang["slug"] . ']', $content[$lang["slug"]] ?? '', 'class="mech-editor"'); ?>
			</li>
			<?php endforeach;?>
		</ul>
	</li>
	<!-- Media upload & edit -->
	<li>
		<input type="hidden" id="mediaOptions" value='<?php echo $media_options ?? null ?>'>
		<?php echo $media_edit; ?>
	</li>
	<!-- Options -->
	<li>
		<?php if (!isset($id)) : ?>
		<!-- Medialib category -->
		<div class="uk-form-row">
			<label class="uk-form-label">Група бібліотек:</label>
			<div class="uk-form-controls" data-uk-margin>
				<i class="tf-toggle-icon" data-fieldset="#tplSelect"></i>
				<input type="hidden" name="cat" value="<?php echo $cat ?? 0; ?>">
			</div>
		</div>
		<?php endif; ?>
		<!-- Medialib type & template -->
		<fieldset id="tplSelect" data-invert="1" class="uk-margin-top">
			<div class="uk-form-row">
				<label class="uk-form-label">Шаблон:</label>
				<div class="uk-form-controls" data-uk-margin>
					<?php echo form_dropdown('tpl', $tpl_select, $tpl ?? '');
						if (!isset($id)) :
					echo '&ensp;&ensp;Тип шаблону:&ensp;' . form_dropdown('tpl_type', $form['tpl_type'], $tpl_type ?? 0);
					endif;	?>
				</div>
			</div>
			<hr>
			<!-- Image size -->
			<div class="uk-form-row uk-margin">
				<label class="uk-form-label">Зображення (px):</label>
				<div class="uk-form-controls" data-uk-margin>
					<?php echo form_input($form['subs_img_w'], $options['img_w'] ?? $default['img_w']) ?>
					&nbsp;x&nbsp;
					<?php echo form_input($form['subs_img_h'], $options['img_h'] ?? $default['img_h']) ?>
				</div>
			</div>
			<!-- Thumb size -->
			<div class="uk-form-row">
				<label class="uk-form-label">Мініатюра (px):</label>
				<div class="uk-form-controls" data-uk-margin>
					<?php echo form_input($form['subs_thumb_w'], $options['thumb_w'] ?? $default['thumb_w']) ?>
					&nbsp;x&nbsp;
					<?php echo form_input($form['subs_thumb_h'], $options['thumb_h'] ?? $default['thumb_h']) ?>
				</div>
			</div>
		</fieldset>
		<!-- Items sort -->
		<div class="uk-form-row uk-margin-top">
			<label class="uk-form-label">Сортування:</label>
			<div class="uk-form-controls" data-uk-margin>
				<?php echo form_dropdown('options[items_sort]', $form['items_sort'], $options['items_sort'] ?? 'sort', 'class="uk-width-large-1-5"'); ?>
				<?php echo form_dropdown('options[items_sort_dir]', $form['items_sort_dir'], $options['items_sort_dir'] ?? '', 'class="uk-width-large-1-5"'); ?>
			</div>
		</div>
	</li>
</ul>