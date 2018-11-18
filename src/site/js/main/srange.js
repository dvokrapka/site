  $(function() {

      $('.srange-slider').each(function(index, el) {

          var $sRange = $(this),
              $spans = $sRange.siblings('.srange-spans'),
              $low = $spans.find('.min-cost'),
              $high = $spans.find('.max-cost'),
              $min = parseInt($low.attr('min')),
              $max = parseInt($high.attr('max')),
              $step = parseInt($low.attr('step'));

          $sRange.slider({
              range: true,
              animate: 400,
              min: 0,
              max: $max,
              step: $step,
              values: [$min, $max],
              slide: function(event, ui) {

                  if (ui.values[0] < $min) {
                      $low.val($min);
                      return false;
                  } else {
                      $low.val(ui.values[0]);
                      $high.val(ui.values[1]);
                  }
              }
          });

          // Min cost input change
          $low.on('change', function() {

              var low = parseInt($(this).val()),
                  high = parseInt($high.val());

              if (low < $min) {
                  low = $min;
                  $low.val(low);
              }

              if (low > high) {
                  low = high;
                  $low.val(low);
              }

              $sRange.slider({ 'values': [low, high] });
          });

          // Max cost input change
          $high.on('change', function() {

              var high = parseInt($(this).val()),
                  low = parseInt($low.val());

              if (high < low) {
                  high = low;
                  $high.val(high);
              }

              $sRange.slider({ 'values': [low, high] });
          });

          $low.val($sRange.slider("values", 0));
          $high.val($sRange.slider("values", 1));
      });
  });