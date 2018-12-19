<main>
	<!-- First screen -->
	<section class="fs-screen">
		<div class="fs-logo"></div>
		<div class="grey-dots" data-paralax></div>
		<!-- <div id="preLoad" class="preload"></div> -->
		<div data-uk-parallax="{y: '0,-200', scale: '1,0.5', repeat: true}">
			<h1 class="typing white-text" data-typing="DVOKRAPKA"><?php echo $content['fs_title']; ?></h1>
			<a href="#" data-scroll="section">
				<?php load_inline('assets/img/buttons/gobtm.tpl'); ?>
			</a>
		</div>
	</section>
	<!-- Services description -->
	<section class="sect-container">
		<div class="uk-grid uk-flex uk-flex-middle">
			<div class="uk-width-medium-3-10">
				<?php load_inline('assets/img/logo-design.svg'); ?>
			</div>
			<div class="uk-width-medium-7-10">
				<?php echo $content['text']; ?>
			</div>
		</div>
	</section>
	<!-- Portfolio preview -->
	<section class="portfolio-screen">
		<?php echo Modules::run('medialib/show', $widget['portfolio_preview'], $this->page['id']); ?>
	</section>
	<!-- Timeline -->
	<section>
		<?php echo Modules::run('medialib/show', $widget['timeline'], $this->page['id']); ?>
	</section>
	<!-- Brief -->
	<section>
		<?php echo Modules::run('feedback/view', 'logo'); ?>
	</section>
</main>