(function($) {
  "use strict";

  var browserWindow = $(window);

  // :: 2.0 Nav Active Code
  if ($.fn.classyNav) {
    $("#vizewNav").classyNav();
  }
  // :: 4.0 Sticky Active Code
  if ($.fn.sticky) {
    $("#sticker").sticky({
      topSpacing: 0
    });
  }

  // :: 7.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="ti-angle-up"></i>'
    });
  }
})(jQuery);
