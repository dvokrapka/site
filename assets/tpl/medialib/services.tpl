<div>
	<?php if (!empty($title)) : ?>
	<h1 data-uk-scrollspy="{cls:'uk-animation-slide-bottom', delay:200, repeat: true}"><?php echo $title; ?></h1>
	<?php endif; if (!empty($items)) : ?>
	<div class="services" data-uk-scrollspy="{cls:'uk-animation-fade uk-invisible', target:'> .services-container', delay:350, repeat: true}">
		<?php foreach ($items as $item) : ?>
		<div class="services-container uk-invisible">
			<div class="serv-pre">
				<img src="<?php echo $item['src']; ?>" alt="<?php echo $item['title']; ?>">
				<h2 class="yellow-text"><?php echo $item['title']; ?></h2>
			</div>
			<div class="serv-desc draw">
				<div class="serv-desc-txt">
					<h3 class="yellow-text"><?php echo $item['title']; ?></h3>
					<?php echo $item['content']; ?>
				</div>
				<a class="uk-position-cover" href="<?php echo $item['link']; ?>"></a>
			</div>
		</div>
		<?php endforeach; endif;?>
	</div>
</div>