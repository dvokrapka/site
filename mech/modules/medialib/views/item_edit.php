<!-- Parent id -->
<input type="hidden" name="pid" value="<?php echo $pid ?? $medialib['id'] ?>">

<!-- Show on page (w js)-->
<input type="hidden" name="show_on" value="0" data-get-pageid>

<ul class="uk-tab" data-uk-tab="{connect:'#itemOptions', swiping: false}">
	<li><a href=""><i class="uk-icon-small uk-icon-edit"></i>&ensp;Вміст</a></li>
	<li><a href=""><i class="uk-icon-small uk-icon-picture-o"></i>&ensp;Медіавміст</a></li>
</ul>
<ul id="itemOptions" class="uk-switcher uk-margin">
	<!-- Main -->
	<li>
		<!-- Multilanguage switcher -->
		<?php echo $this->lang_lib->lang_switcher('.contentTr'); ?>
		<ul class="contentTr uk-switcher uk-margin">
			<?php foreach ($this->langs as $lang) : ?>
			<li>
				<!-- Title -->
				<label>Заголовок:</label>
				<?php echo form_input('title['.$lang["slug"].']', $title[$lang["slug"]] ?? '', 'class="uk-width-1-1"'); ?>
				<!-- Description -->
				<div class="uk-margin">
					<label>Опис:</label>
					<?php echo form_textarea('content['.$lang["slug"].']', $content[$lang["slug"]] ?? '', 'class="mech-editor"'); ?>
				</div>
			</li>
			<?php endforeach; ?>
		</ul>
		<div class="uk-form-row">
			<label class="uk-form-label">Посилання на сторінку:</label>
			<div class="uk-form-controls" data-uk-margin>
				<i class="tf-toggle-icon" data-fieldset="#urlField"></i>
				<input type="hidden" name="href" value="<?php echo $href ?? 0; ?>">
			</div>
		</div>
		<fieldset id="urlField">
			<hr>
			<!-- URL Select -->
			<div class="uk-form-row">
				<label class="uk-form-label" data-uk-margin>Сторінка:</label>
				<div class="uk-form-controls">
					<select id="urlIdSelect" class="uk-width-1-1">
						<?php echo $url_select; ?>
					</select>
				</div>
			</div>
			<!-- URL Input-->
			<div class="uk-form-row">
				<label class="uk-form-label">URL:</label>
				<div class="uk-form-controls" data-uk-margin>
					<div class="uk-grid uk-grid-small">
						<div class="uk-width-large-9-10">
							<!-- URL Preview/Edit -->
							<?php
								$disabled = (isset($link) && $link) ? '' : 'disabled';
								$enabled = (isset($link) && !$link) ? 'disabled' : '';
																$fin_link = $url ?? $link ?? '';
							?>
							<?php echo form_input('', $fin_link . ($anchor ?? ''), 'id="linkPreview" class="uk-width-1-1" '. $disabled); ?>
							<!-- Anchor/other url -->
							<input type="hidden" name="link" value="<?php echo $link ?? ''; ?>" <?php echo $enabled; ?>>
							<!-- Page link -->
							<input type="hidden" name="url_id" value="<?php echo $url_id ?? '0'; ?>">
						</div>
						<div class="uk-width-large-1-10">
							<button id="linkChange" type="button" class="uk-button uk-width-1-1"><i class="uk-icon-small uk-icon-pencil uk-text-primary"></i></button>
						</div>
					</div>
				</div>
			</div>
			<hr>
		</fieldset>
		<!-- Publish -->
		<div class="uk-form-row uk-margin-top">
			<label class="uk-form-label">Публікувати:</label>
			<div class="uk-form-controls" data-uk-margin>
				<i class="tf-toggle-icon"></i>
				<input type="hidden" name="pub" value="<?php echo $pub ?? 1 ;?>">
			</div>
		</div>
	</li>
	<!-- Media -->
	<li>
		<!-- Media options -->
		<input type="hidden" id="mediaOptions" value='<?php echo $media_options ?? null ?>'>
		<!-- Source & target select -->
		<div class="uk-form-row">
			<?php $id = $id ?? null; ?>
			<?php echo form_dropdown('src', $form['src'], $src ?? 'file', 'class="mech-tab-select" data-mediasrc-select="'. $id.'"'); ?>
		</div>
		<!-- Media upload & edit -->
		<div id="mediaSrc" class="uk-margin">
			<?php echo $media_edit; ?>
		</div>
	</li>
</ul>