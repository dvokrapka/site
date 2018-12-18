<!-- List orders -->
<div id="actionPanel" class="uk-navbar uk-navbar-attached uk-margin-bottom" data-type="order" data-uk-sticky>
	<ul class="uk-navbar-nav uk-text-uppercase">
		<!-- Module -->
		<li class="uk-active">
			<a href="<?php echo $mod['index']; ?>">
				<i class="uk-icon-small <?php echo $mod['icon']; ?>"></i>&ensp;<?php echo $mod['title']; ?>
			</a>
		</li>
	</ul>
	<!-- Add/Delete -->
	<div class="uk-navbar-content uk-navbar-flip">
		<button class="uk-button uk-button-danger hidden" data-del>
		<i class="uk-icon-small uk-icon-trash"></i>
		</button>
	</div>
</div>
<!-- Orders list -->
<div id="elList" class="mech-box">
	<?php echo $list; ?>
</div>