<div class="uk-overflow-container">
	<table class="mech-table uk-table uk-table-hover">
		<thead>
			<tr>
				<th class="uk-width-1-10 uk-text-center">
					<input type="checkbox" id="checkAll">
				</th>
				<th class="uk-width-2-10">Назва</th>
				<th class="uk-width-3-10">Заголовок</th>
				<th class="uk-width-2-10">Тип</th>
				<th class="uk-width-1-10 uk-text-center">
					<i class="uk-icon-small uk-icon-eye"></i>
				</th>
				<th class="uk-width-1-10 uk-text-center">
					<i class="uk-icon-small uk-icon-edit"></i>
				</th>
			</tr>
		</thead>
		<tbody>
			<?php if (!empty($elems)) : foreach ($elems as $el) : ?>
			<tr class="uk-table-middle uk-visible-hover<?php echo ($el['pub']) ? '' : ' uk-overlay-grayscale'; ?>" data-id="<?php echo $el['id']; ?>">
				<td class="uk-width-1-10 uk-text-center">
					<input type="checkbox" value="<?php echo $el['id']; ?>">
				</td>
				<!-- Medialib name -->
				<td class="uk-width-2-10 uk-text-bold">
					<?php
					// If template library
					if ($el['tpl_type'] == 1) { echo ellipsize($el['name'], 50); } else {
					// If category / simple library
					if ($el['cat']) { ?>
					<a href="<?php echo $mod['index'] .'list/'. $el['id']; ?>"><?php echo ellipsize($el['name'], 50); ?></a>
					<?php } else { ?>
					<a href="<?php echo $mod['index'] .'items/'. $el['id']; ?>"><?php echo ellipsize($el['name'], 50); ?></a>
					<?php } } ?>
				</td>
				<!-- Medialib title -->
				<td class="uk-width-3-10 uk-text-bold">
					<?php echo ellipsize($el['title'], 100); ?>
				</td>
				<!-- Medialib type -->
				<td class="uk-width-2-10">
					<?php echo ($el['cat']) ? 'група' : 'бібліотека'; ?>
				</td>
				<!-- Publish -->
				<td class="uk-width-1-10 uk-text-center">
					<?php
					$class = ($el['pub']) ? 'uk-text-success' : 'uk-text-muted';
					$icon  = ($el['pub']) ? 'uk-icon-eye' : 'uk-icon-eye-slash';
					?>
					<i class="<?php echo $class; ?> uk-icon-small uk-icon-hover <?php echo $icon; ?>" data-pub></i>
				</td>
				<!-- Edit -->
				<td class="uk-width-1-1 uk-text-center">
					<div class="uk-hidden uk-grid uk-grid-width-1-2 uk-grid-small uk-icon-small">
						<i class="uk-icon-hover uk-icon-pencil" data-edit></i>
						<i class="uk-icon-hover uk-icon-trash" data-del></i>
					</div>
				</td>
			</tr>
			<?php endforeach; endif; ?>
		</tbody>
	</table>
</div>