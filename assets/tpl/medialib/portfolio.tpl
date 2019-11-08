<div class="sect-container">
	<?php if (!empty($title)) : ?>
	<h1 class="titles" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo $title; ?></h1>
	<?php endif; ?>
	<?php if (!empty($items)) : ?>
	<div id="modalBox" class="dv-modal-box">
		<span class="dv-modal-close"></span>
		<div class="dv-modal-body">
			<div id="pfMedia">
			</div>
		</div>
	</div>
	<div class="uk-grid uk-grid-width-medium-1-2 uk-grid-width-large-1-3 uk-grid-collapse" data-uk-scrollspy="{cls:'uk-animation-fade uk-invisible', target:'> .portfolio-prev', delay:300}">
		<?php foreach ($items as $item): ?>
		<figure class="portfolio-prev uk-invisible uk-overlay uk-overlay-hover">
			<?php echo $item['thumb']; ?>
			<figcaption class="uk-overlay-panel uk-overlay-slide-top">
			<div class="portfolio-desc">
				<div class="title"><?php echo $item['title']; ?></div>
				<div class="desc"><?php echo $item['content']; ?></div>
			</div>
			</figcaption>
			<!-- Media -->
			<div class="uk-hidden" data-media>
				<?php echo $item['media']; ?>
			</div>
		</figure>
		<?php endforeach; ?>
	</div>
	<a href="<?php echo $this->frontend_lib->lang_url('portfolio'); ?>" class="sm-button sm-yellow uk-margin-large-top" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo lang('more'); ?></a>
</div>
<?php endif; ?>