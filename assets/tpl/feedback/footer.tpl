<button class="dv-acco-toggle sm-button sm-black" data-acco="#callBack">Напишіть нам</button>
<?php echo form_open(base_url('feedback/submit'), 'id="callBack" class="dv-acco-body callback-form" data-form-submit="simple" data-bot="true"'); ?>
    <input type="text" name="name" placeholder="Як до Вас звертатись">
    <input type="email" name="email" placeholder="Ваш e-mail">
    <textarea placeholder="Питання. Побажання. Привітання" rows="5"></textarea>
    <button type="submit" class="sm-button sm-yellow">Надіслати</button>
<?php echo form_close();?>
