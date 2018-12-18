<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

<!-- Page template -->
<div class="uk-form-row uk-margin">
    <label class="uk-form-label">Шаблон сторінки:</label>
    <div class="uk-form-controls" data-uk-margin>
        <?php echo form_dropdown('options[tpl]', $tpl_select, $options['tpl'] ?? $parent['options']['pages_tpl'] ?? 'default', ' class="uk-width-large-1-5"'); ?>
    </div>
</div>

<!-- Page content type (JSON/different cells)-->
<?php echo form_hidden('json', true); ?>

<!-- Multilanguage switcher -->
<?php echo $this->lang_lib->lang_switcher('#defTr'); ?>

<ul id="defTr" class="uk-switcher uk-margin">
  <?php foreach ($langs as $lang) : ?>
  <li>
    <!-- First screen -->
    <div class="uk-form-row">
        <label class="uk-form-label">Заголовок (перший екран):</label>
        <div class="uk-form-controls" data-uk-margin>
    			<?php echo form_input('content['.$lang['slug'].'][fs_title]', $content[$lang['slug']]['fs_title'] ?? '', 'class="uk-width-1-1"'); ?>
        </div>
    </div>
		<div class="uk-form-row">
		    <label class="uk-form-label">Про нас (заголовок):</label>
		    <div class="uk-form-controls" data-uk-margin>
					<?php echo form_input('content['.$lang['slug'].'][about_title]', $content[$lang['slug']]['about_title'] ?? '', 'class="uk-width-1-1"'); ?>
		    </div>
		</div>
		<div class="uk-form-row">
		    <label class="uk-form-label">Про нас (текст):</label>
	      <div class="uk-form-controls" data-uk-margin>
	  			<?php echo form_textarea('content['.$lang['slug'].'][about]', $content[$lang['slug']]['about'] ?? '', 'class="mech-editor"'); ?>
	      </div>
		</div>
		<div class="uk-form-row">
		    <label class="uk-form-label">Останній екран:</label>
	      <div class="uk-form-controls" data-uk-margin>
	  			<?php echo form_input('content['.$lang['slug'].'][last]', $content[$lang['slug']]['last'] ?? '', 'class="uk-width-1-1"'); ?>
	      </div>
		</div>
  </li>
  <?php endforeach; ?>
</ul>

<!-- Services -->
<?php echo $this->media_lib->medialib_select('Послуги', 'services', $options['widget'] ?? null, $id ?? null); ?>

<!-- Portfolio preview -->
<?php echo $this->media_lib->medialib_select('Портфоліо', 'portfolio_preview', $options['widget'] ?? null, $id ?? null); ?>
