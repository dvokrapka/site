<main>
	<section class="fs-screen">
		<div class="fs-portfolio"></div>
		<div class="grey-dots" data-paralax></div>
		<!-- <div id="preLoad" class="preload"></div> -->
		<div data-uk-parallax="{y: '0,-200', scale: '1,0.5', repeat: true}">
			<h1 class="typing white-text" data-typing="DVOKRAPKA"><?php echo $content['fs_title']; ?></h1>
			<a href="#" class="scroll-btm" data-scroll="section">
				<?php load_inline('assets/img/buttons/gobtm.tpl'); ?>
			</a>
		</div>
	</section>
	<section class="portfolio-screen">
		<?php echo Modules::run('medialib/show', $widget['portfolio'], $this->page['id']); ?>
	</section>
</main>