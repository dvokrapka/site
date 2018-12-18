<section>
	<?php if (!empty($title)) : ?>
	<div class="timeline-title">
		<h1><?php echo $title; ?></h1>
	</div>
	<?php endif; ?>
	<?php if (!empty($items)) : ?>
	<div class="timeline">
		<?php $count = count($items);
		for ($i=0; $i < $count ; $i++) : ?>
		<!-- Left -->
		<?php if (!($i % 2)): ?>
		<div class="left">
			<span><?php echo $i+1; ?></span>
			<div class="tm-content">
				<img src="<?php echo $items[$i]['src']; ?>" alt="<?php echo $items[$i]['title']; ?>">
				<span><?php echo $items[$i]['title']; ?></span>
				<?php echo $items[$i]['content']; ?>
			</div>
		</div>
		<?php endif ?>
		<!-- Right -->
		<?php if (($i % 2)): ?>
		<div class="right">
			<span><?php echo $i+1; ?></span>
			<div class="tm-content">
				<img src="<?php echo $items[$i]['src']; ?>" alt="<?php echo $items[$i]['title']; ?>">
				<span><?php echo $items[$i]['title']; ?></span>
				<?php echo $items[$i]['content']; ?>
			</div>
		</div>
		<?php endif ?>
		<?php endfor; ?>
	</div>
	<?php endif; ?>
</section>