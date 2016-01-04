(function($) {
  'use strict';

  var $courrent_option = $('#custom-select'),
      $customOptionsBlock = $("#custom-options"),
      $custom_options_li = $("#custom-options li"),
      $curent_option = $('#current-option')

  $courrent_option.on('click', function() {
    if($customOptionsBlock.is(":hidden")) {
      $customOptionsBlock.slideDown('fast');
      $curent_option.css('border-radius', '5px 5px 0 0');
    }
    else {
      $customOptionsBlock.slideUp('fast');
      $curent_option.css('border-radius', '5px');
    }
  });

  $custom_options_li.on('click', function() {
    var choosenValue = $(this).attr("data-value");
    $("select").val(choosenValue).prop("selected", true);
    $("#current-option span").text($(this).text());
    $curent_option.attr("data-value", choosenValue);
  })

})(jQuery);
