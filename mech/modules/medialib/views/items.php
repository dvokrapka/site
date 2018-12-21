<!-- List menu -->
<div id="actionPanel" class="uk-navbar uk-navbar-attached uk-margin-bottom" data-type="item" data-uk-sticky>
	<ul class="uk-navbar-nav uk-text-uppercase" data-lib-header>
		<!-- Module -->
		<li class="uk-active">
			<a href="<?php echo $mod['index']; ?>">
				<i class="uk-icon-small <?php echo $mod['icon']; ?>"></i>&ensp;<?php echo $mod['title']; ?>
			</a>
		</li>
		<li>
			<a href="<?php echo $mod['index'] .'list/'. $lib['id']; ?>" class="uk-link-muted uk-text-uppercase uk-text-primary">
				<?php echo $lib['name']; ?>
			</a>
		</li>
		<li>
			<a href="" class="uk-link-muted uk-text-uppercase uk-text-primary" data-setup="<?php echo $mod['index'] . 'edit/medialib/' . $lib['id']; ?>">
				<i class="uk-icon-small uk-icon-edit"></i>
			</a>
		</li>
	</ul>
	<!-- Add/Delete -->
	<div class="uk-navbar-content uk-navbar-flip">
		<div class="uk-button-group">
			<button class="uk-button uk-button-danger hidden" data-del>
			<i class="uk-icon-small uk-icon-trash"></i>
			</button>
			<button class="uk-button uk-button-success" data-create="<?php echo $lib['id']; ?>">
			<i class="uk-icon-small uk-icon-plus"></i>
			</button>
		</div>
	</div>
</div>
<!-- Items list -->
<div id="elList" class="mech-box">
	<?php echo $list; ?>
</div>