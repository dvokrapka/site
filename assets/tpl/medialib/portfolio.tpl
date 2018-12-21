<?php if (!empty($items)) : foreach ($items as $item): ?>

<figure class="portfolio-prev uk-overlay uk-overlay-hover" data-uk-filter="<?php echo $item['filter']; ?>">
	<?php echo $item['thumb']; ?>
	<figcaption class="uk-overlay-panel uk-overlay-slide-top">
	<div class="portfolio-desc">
		<span><?php echo $item['title']; ?></span>
		<p><?php echo $item['content']; ?></p>
	</div>
	</figcaption>
</figure>
<?php endforeach;endif; ?>