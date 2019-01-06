<button class="dv-acco-toggle sm-button sm-black" data-acco="#callBack"><?php echo lang('write_us'); ?></button>
<?php echo form_open(base_url('feedback/submit'), 'id="callBack" class="dv-acco-body callback-form" data-form-submit="simple" data-bot="true"'); ?>
<input type="text" name="name" placeholder="<?php echo lang('form_name'); ?>">
<input type="email" name="email" placeholder="<?php echo lang('form_email'); ?>">
<textarea name="message" placeholder="<?php echo lang('form_message2'); ?>" rows="5"></textarea>
<button type="submit" class="sm-button sm-yellow"><?php echo lang('form_send'); ?></button>
<?php echo form_close();?>