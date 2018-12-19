<header class="hidden">
	<!-- Logo -->
	<div class="toplogo">
	    <?php echo $this->app['logo']; ?>
	</div>

	<!-- Burger -->
	<div id="burger" class="burger"><span></span></div>
	<!-- Scroll top -->
	<div id="goTop" class="scroll-top">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5000 5000">
			<path class="fil0" d="M590.55 0l3818.9 0c326.09,0 590.54,264.45 590.54,590.55l0.01 3818.9c-0.01,326.09 -264.46,590.55 -590.56,590.55l-3818.89 0c-326.09,0 -590.55,-264.46 -590.55,-590.56l0 -3818.89c0,-326.1 264.46,-590.55 590.55,-590.55l0 0z" />
			<path class="fil1" d="M5000 3948.71c-304.75,107.87 -632.66,166.76 -974.36,166.76 -1612.51,0 -2919.71,-1307.19 -2919.71,-2919.7 0,-426.08 91.33,-830.8 255.38,-1195.77l3048.14 0c324.8,0 590.55,265.75 590.55,590.55l0 3358.16 0 0z" />
			<path class="arrow-top fil2" d="M3888.59 2032.09c63.04,72.86 173.23,80.81 246.09,17.77 72.86,-63.04 80.81,-173.23 17.77,-246.09l-684.96 -790.9c-63.04,-72.86 -173.23,-80.81 -246.09,-17.77 -7.06,6.11 -13.49,12.65 -19.33,19.57l-685.99 789.1c-63.04,72.86 -55.09,183.05 17.77,246.09 72.86,63.04 183.05,55.09 246.09,-17.77l381.01 -438.28 -1 1237.62c0,96.27 78.05,174.32 174.32,174.32 96.27,0 174.32,-78.05 174.32,-174.32l1 -1236.96 379 437.62z" />
		</svg>
	</div>
	<!-- Menu -->
	<div id="mainMenu" class="main-menu">
		<div>
    	<!-- Language switcher -->
    	<?php if ($this->loc['multilang']) : ?>
				<div class="lang-switcher">
			  	<?php foreach ($this->config->item('switcher', 'localize') as $link) echo $link; ?>
				</div>
	    <?php endif; ?>
			<?php echo Modules::run('menu/show_menu', 'header'); ?>

      <?php if (isset($social[0])) : ?>
	      <div class="menu-social">
	  		<?php foreach ($social as $soc): ?>
						<a href="<?php echo $soc['href']; ?>" target="_blank" title="<?php echo $soc['title']; ?>"><i class="uk-icon-<?php echo $soc['icon']; ?>"></i></a>
				<?php endforeach; ?>
	      </div>
      <?php endif; ?>
		</div>
	</div>
</header>