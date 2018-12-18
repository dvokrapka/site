<!-- List menu -->
<div id="actionPanel" class="uk-navbar uk-navbar-attached uk-margin-bottom" data-type="medialib" data-uk-sticky>
	<ul class="uk-navbar-nav uk-text-uppercase">
		<!-- Module -->
		<li class="uk-active">
			<a href="<?php echo $mod['index']; ?>">
				<i class="uk-icon-small <?php echo $mod['icon']; ?>"></i>&ensp;<?php echo $mod['title']; ?>
			</a>
		</li>
		<?php if (isset($parent)) : ?>
		<li>
			<a href="<?php echo $mod['index'] .'list/'. $parent['id']; ?>" class="uk-link-muted uk-text-uppercase uk-text-primary">
				<?php echo $parent['title'][$this->app['def_lang']['slug']] ?? $parent['title']; ?>
			</a>
		</li>
		<li>
			<a href="" class="uk-link-muted uk-text-uppercase uk-text-primary" data-setup="<?php echo $mod['index'] . 'edit/medialib/' . $parent['id']; ?>">
				<i class="uk-icon-small uk-icon-edit"></i>
			</a>
		</li>
		<?php endif; ?>
	</ul>
	<!-- Add/Delete -->
	<div class="uk-navbar-content uk-navbar-flip">
		<div class="uk-button-group">
			<button class="uk-button uk-button-danger hidden" data-del>
			<i class="uk-icon-small uk-icon-trash"></i>
			</button>
			<button class="uk-button uk-button-success" data-create>
			<i class="uk-icon-small uk-icon-plus"></i>
			</button>
		</div>
	</div>
</div>
<!-- Parents list -->
<div id="elList" class="mech-box">
	<?php echo $list; ?>
</div>