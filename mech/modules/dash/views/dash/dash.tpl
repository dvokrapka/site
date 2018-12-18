<!-- MechaniCMS Dashboard -->
<div id="mechDash" class="mech-dash">

    <!-- Sidebar panel -->
    <div id="mechSidebar" class="mech-sidebar">
			<!-- Menu -->
			<div data-uk-sticky>
      	<?php echo $sidebar; ?>
      </div>
      <div class="mech-info">
      		<details>
      		  <summary>MechaniCMS <i class="uk-icon-info-circle"></i></summary>
      		  <p>&copy;&ensp;2016 - <?php echo date('Y'); ?> <br> Codeigniter <?php echo CI_VERSION; ?> <br> Loaded: {elapsed_time} s | {memory_usage} RAM <br><span id="jq"></span></p>
      		</details>
      </div>
    </div>

    <!-- Dashboard panel -->
    <div id="mechContent" class="mech-content">
        <?php echo $dash_content; ?>
    </div>

</div>