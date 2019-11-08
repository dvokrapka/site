<!-- WYSIWYG -->

<script src="<?php echo base_url('mech/app/vendor/jodit/jodit.min.js'); ?>"></script>

<!-- <script src="<?php echo base_url('mech/app/vendor/ckeditor/ckeditor.js'); ?>"></script>
<script src="<?php echo base_url('mech/app/vendor/ckeditor/adapters/jquery.js'); ?>"></script> -->

<script>

	$(function() {
     wysiwygLoader();
	});

	function wysiwygLoader() {

			$('textarea.mech-editor').each(function() {

					var joPath = "<?php echo base_url('mech/app/vendor/jodit/'); ?>";

			    var editor = new Jodit(this, {
			        // Set uploader
			        uploader: {
			            url: joPath + 'index.php?action=fileUpload'
			        },
			        // Set file browser
			        filebrowser: {
			            ajax: {
			                url: joPath + 'index.php'
			            }
			        },
			        // Options
			        // fullsize: true,
			        language: 'ru'
			    });

			});

			// CKeditor
			// // Filemanager
			// var fileman = "<?php echo base_url('mech/modules/filemanager'); ?>";

	  //   // CKeditor
	  //   var $editor = $('textarea.mech-editor').ckeditor({
	  //       filebrowserBrowseUrl: fileman + '/dialog.php?type=2&editor=ckeditor&fldr=',
	  //       filebrowserUploadUrl: fileman + '/dialog.php?type=2&editor=ckeditor&fldr=',
	  //       filebrowserImageBrowseUrl: fileman + '/dialog.php?type=1&editor=ckeditor&fldr='
	  //   });

	  //   // Correct 'italic' to 'em' conversion
	  //   CKEDITOR.config.coreStyles_italic = {
	  //       element: 'i',
	  //       attributes: { 'class': 'Italic' }
	  //   };

	  //   CKEDITOR.on('instanceReady', function(ev) {
	  //       ev.editor.on('focus', function(evt) {
	  //           CKEupdate();
	  //       });
	  //       ev.editor.on('blur', function(evt) {
	  //           CKEupdate();
	  //       });
	  //   });

	  //   function CKEupdate() {
	  //       for (var instance in CKEDITOR.instances)
	  //           CKEDITOR.instances[instance].updateElement();
	  //   }
	}
</script>