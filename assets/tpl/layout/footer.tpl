<footer>
	<div class="footer-bg0"></div>
	<div class="footer-bg1"></div>
	<div class="footer-bg2"></div>
	<div id="contacts" class="footer-contacts">
		<!-- Email -->
		<?php if (isset($emails)) : foreach ($emails as $email): echo safe_mailto($email, $email) . "\n";
		endforeach; endif; ?>
		<!-- Tels -->
		<?php if (isset($tels)) : foreach ($tels as $tel): ?>
		<a href="tel:+<?php echo $tel['href']; ?>"><?php echo $tel['tel']; ?></a>
		<?php endforeach; endif; ?>
		<!-- Callback -->
		<?php echo Modules::run('feedback/view', 'footer'); ?>
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
		<p data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:500, repeat: true}">Copyright © <b>DVOKRAPKA DESIGN TEAM</b> 2018. All rights reserved.</p>
	</div>
</footer>