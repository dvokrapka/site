<footer>
    <div class="footer-bg1"></div>
    <div class="footer-bg2"></div>
    <div id="contacts" class="footer-contacts">

        <?php if (isset($emails)) :
          foreach ($emails as $email): echo safe_mailto($email, $email) . "\n";
          endforeach;
        endif; ?>

        <!-- <a href="tel:+0679992091">(067) 999 20 91</a> -->

        <!--Callback form-->
				<button class="dv-acco-toggle sm-button sm-black" data-acco="#callBack">Напишіть нам</button>
				<form id="callBack" class="dv-acco-body callback-form">
				    <input type="text" name="name" placeholder="Як до Вас звертатись">
				    <input type="email" name="email" placeholder="Ваш e-mail">
				    <textarea placeholder="Питання. Побажання. Привітання" rows="5"></textarea>
				    <button type="submit" class="sm-button sm-yellow">Надіслати</button>
				</form>
    </div>
    <div class="footer-bottom">
        <!--Footer Social-->
        <?php if (isset($social[0])) : ?>
        <div class="footer-social" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:150, repeat: true}">
    		<?php foreach ($social as $soc): ?>
						<a href="<?php echo $soc['href']; ?>" target="_blank" title="<?php echo $soc['title']; ?>"><i class="uk-icon-<?php echo $soc['icon']; ?>"></i></a>
				<?php endforeach; ?>
        </div>
        <?php endif; ?>
        <!-- Copyright -->
        <p data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:500, repeat: true}">Copyright © DVOKRAPKA 2018. All rights reserved.</p>
    </div>
</footer>