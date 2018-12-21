<main>
	<!-- First screen -->
	<section class="fs-screen">
		<div class="fs-homepage"></div>
		<div class="grey-dots" data-paralax></div>
		<!-- <div id="preLoad" class="preload"></div> -->
		<div data-uk-parallax="{y: '0,-200', scale: '1,0.1', repeat: true}">
			<h1 class="typing white-text" data-typing="DVOKRAPKA"><?php echo $content['fs_title']; ?></h1>
			<a href="#" class="scroll-btm" data-scroll="section">
				<?php load_inline('assets/img/buttons/gobtm.tpl'); ?>
			</a>
		</div>
	</section>
	<!-- Services -->
	<section id="services" class="home-services sect-container">
		<div class="light-dots"></div>
		<?php echo Modules::run('medialib/show', $widget['services'], $this->page['id']); ?>
	</section>
	<!-- Portfolio preview -->
	<section class="portfolio-screen">
		<?php echo Modules::run('medialib/show', $widget['portfolio_preview'], $this->page['id']); ?>
	</section>
	<!-- About us -->
	<section class="about-us">
		<h1 class="grey-text" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo $content['about_title']; ?></h1>
		<div class="about-us-screen">
			<div class="about-us-col">
				<?php echo $content['about']; ?>
			</div>
		</div>
	</section>
	<!-- Lyrics -->
	<section class="home-design">
		<h1 class="home-design-txt" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo $content['last']; ?></h1>
	</section>
</main>