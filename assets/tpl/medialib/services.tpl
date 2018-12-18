<div>
	<?php if (!empty($title)) : ?>
	<h1 data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo $title; ?></h1>
	<?php endif; ?>
	<?php if (!empty($items)) : ?>
	<div class="services" data-uk-scrollspy="{cls:'uk-animation-fade uk-invisible', target:'> .services-container', delay:350, repeat: true}">
		<?php foreach ($items as $item) : ?>
		<div class="services-container uk-invisible">
			<div class="serv-pre">
				<img class="lazy" data-src="<?php echo $item['src']; ?>" alt="<?php echo $item['title']; ?>">
				<h2 class="yellow-text"><?php echo $item['title']; ?></h2>
			</div>
			<div class="serv-desc draw">
				<div>
					<?php echo $item['content']; ?>
					<?php load_inline('assets/img/buttons/goright.tpl'); ?>
					<a class="uk-position-cover" href="<?php echo $item['link']; ?>"></a>
				</div>
			</div>
		</div>
		<?php endforeach; ?>
		<?php endif; ?>
</div>