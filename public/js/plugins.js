/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear — @markgdyr — http://markgoodyear.com
 * License: MIT
 */
!(function(l, o, e) {
  "use strict";
  (l.fn.scrollUp = function(o) {
    l.data(e.body, "scrollUp") ||
      (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function(r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l("<a/>", { id: p.scrollName, href: "#top" })),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({ display: "none", position: "fixed", zIndex: p.zIndex }),
        p.activeOverlay &&
          l("<div/>", { id: p.scrollName + "-active" })
            .css({
              position: "absolute",
              top: p.scrollDistance + "px",
              width: "100%",
              borderTop: "1px dotted" + p.activeOverlay,
              zIndex: p.zIndex
            })
            .appendTo("body"),
        p.animation)
      ) {
        case "fade":
          (s = "fadeIn"), (t = "fadeOut"), (c = p.animationSpeed);
          break;
        case "slide":
          (s = "slideDown"), (t = "slideUp"), (c = p.animationSpeed);
          break;
        default:
          (s = "show"), (t = "hide"), (c = 0);
      }
      (i =
        "top" === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function() {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? "number" == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : "string" == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function(o) {
          o.preventDefault(),
            l("html, body").animate(
              { scrollTop: a },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: "scrollUp",
      scrollDistance: 300,
      scrollFrom: "top",
      scrollSpeed: 300,
      easingType: "linear",
      animation: "fade",
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: "Scroll to top",
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647
    }),
    (l.fn.scrollUp.destroy = function(r) {
      l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7
          ? l(o).off("scroll", r)
          : l(o).unbind("scroll", r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*
 * classyNav.js 1.0.0
 * Responsive Megamenu plugins
 * Copyright (c) 2018 Designing World - https://themeforest.net/user/designing-world
 */

(function($) {
  $.fn.classyNav = function(options) {
    // Variables
    var navContainer = $(".classy-nav-container");
    var classy_nav = $(".classynav ul");
    var classy_navli = $(".classynav > ul > li");
    var navbarToggler = $(".classy-navbar-toggler");
    var closeIcon = $(".classycloseIcon");
    var navToggler = $(".navbarToggler");
    var classyMenu = $(".classy-menu");
    var var_window = $(window);

    // default options
    var defaultOpt = $.extend(
      {
        theme: "light",
        breakpoint: 991,
        openCloseSpeed: 350,
        megaopenCloseSpeed: 700,
        alwaysHidden: false,
        openMobileMenu: "left",
        dropdownRtl: false,
        stickyNav: false,
        stickyFooterNav: false
      },
      options
    );

    return this.each(function() {
      // light or dark theme
      if (defaultOpt.theme === "light" || defaultOpt.theme === "dark") {
        navContainer.addClass(defaultOpt.theme);
      }

      // open mobile menu direction 'left' or 'right' side
      if (
        defaultOpt.openMobileMenu === "left" ||
        defaultOpt.openMobileMenu === "right"
      ) {
        navContainer.addClass(defaultOpt.openMobileMenu);
      }

      // dropdown rtl
      if (defaultOpt.dropdownRtl === true) {
        navContainer.addClass("dropdown-rtl");
      }

      // navbar toggler
      navbarToggler.on("click", function() {
        navToggler.toggleClass("active");
        classyMenu.toggleClass("menu-on");
      });

      // close icon
      closeIcon.on("click", function() {
        classyMenu.removeClass("menu-on");
        navToggler.removeClass("active");
      });

      // add dropdown & megamenu class in parent li class
      classy_navli.has(".dropdown").addClass("cn-dropdown-item");
      classy_navli.has(".megamenu").addClass("megamenu-item");

      // adds toggle button to li items that have children
      classy_nav.find("li a").each(function() {
        if ($(this).next().length > 0) {
          $(this)
            .parent("li")
            .addClass("has-down")
            .append('<span class="dd-trigger"></span>');
        }
      });

      // expands the dropdown menu on each click
      classy_nav.find("li .dd-trigger").on("click", function(e) {
        e.preventDefault();
        $(this)
          .parent("li")
          .children("ul")
          .stop(true, true)
          .slideToggle(defaultOpt.openCloseSpeed);
        $(this)
          .parent("li")
          .toggleClass("active");
      });

      // add padding in dropdown & megamenu item
      $(".megamenu-item").removeClass("has-down");

      // expands the megamenu on each click
      classy_nav.find("li .dd-trigger").on("click", function(e) {
        e.preventDefault();
        $(this)
          .parent("li")
          .children(".megamenu")
          .slideToggle(defaultOpt.megaopenCloseSpeed);
      });

      // check browser width in real-time
      function breakpointCheck() {
        var windoWidth = window.innerWidth;
        if (windoWidth <= defaultOpt.breakpoint) {
          navContainer.removeClass("breakpoint-off").addClass("breakpoint-on");
        } else {
          navContainer.removeClass("breakpoint-on").addClass("breakpoint-off");
        }
      }

      breakpointCheck();

      var_window.on("resize", function() {
        breakpointCheck();
      });

      // always hidden enable
      if (defaultOpt.alwaysHidden === true) {
        navContainer.addClass("breakpoint-on").removeClass("breakpoint-off");
      }

      // sticky
      if (defaultOpt.stickyNav === true) {
        var_window.on("scroll", function() {
          if (var_window.scrollTop() > 0) {
            navContainer.addClass("classy-sticky");
          } else {
            navContainer.removeClass("classy-sticky");
          }
        });
      }

      // footer sticky
      if (defaultOpt.stickyFooterNav === true) {
        navContainer.addClass("classy-sticky-footer");
      }
    });
  };
})(jQuery);

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function(factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node/CommonJS
    module.exports = factory(require("jquery"));
  } else {
    // Browser globals
    factory(jQuery);
  }
})(function($) {
  var slice = Array.prototype.slice; // save ref to original slice()
  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: "is-sticky",
      wrapperClassName: "sticky-wrapper",
      center: false,
      getWidthFrom: "",
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: "inherit"
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = scrollTop > dwh ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css("height", s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement.css({
              width: "",
              position: "",
              top: "",
              "z-index": ""
            });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger("sticky-end", [s]);
            s.currentTop = null;
          }
        } else {
          var newTop =
            documentHeight -
            s.stickyElement.outerHeight() -
            s.topSpacing -
            s.bottomSpacing -
            scrollTop -
            extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
              padding = s.stickyElement.innerWidth() - s.stickyElement.width();
              newWidth = $(s.getWidthFrom).width() - padding || null;
            } else if (s.widthFromWrapper) {
              newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
              newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css("width", newWidth)
              .css("position", "fixed")
              .css("top", newTop)
              .css("z-index", s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger("sticky-start", [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger("sticky-update", [s]);
            }

            if (
              (s.currentTop === s.topSpacing && s.currentTop > newTop) ||
              (s.currentTop === null && newTop < s.topSpacing)
            ) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger("sticky-bottom-reached", [s]);
            } else if (
              s.currentTop !== null &&
              newTop === s.topSpacing &&
              s.currentTop < newTop
            ) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger("sticky-bottom-unreached", [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick =
            s.stickyElement.offset().top + s.stickyElement.outerHeight() >=
              stickyWrapperContainer.offset().top +
                stickyWrapperContainer.outerHeight() &&
            s.stickyElement.offset().top <= s.topSpacing;

          if (unstick) {
            s.stickyElement
              .css("position", "absolute")
              .css("top", "")
              .css("bottom", 0)
              .css("z-index", "");
          } else {
            s.stickyElement
              .css("position", "fixed")
              .css("top", newTop)
              .css("bottom", "")
              .css("z-index", s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
          if (s.responsiveWidth) {
            newWidth = $(s.getWidthFrom).width();
          }
        } else if (s.widthFromWrapper) {
          newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
          s.stickyElement.css("width", newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr("id");
          var wrapperId = stickyId
            ? stickyId + "-" + defaults.wrapperClassName
            : defaults.wrapperClassName;
          var wrapper = $("<div></div>")
            .attr("id", wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
              return wrapper;
            }
          });

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({
              width: stickyElement.outerWidth(),
              marginLeft: "auto",
              marginRight: "auto"
            });
          }

          if (stickyElement.css("float") === "right") {
            stickyElement
              .css({ float: "none" })
              .parent()
              .css({ float: "right" });
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css("height", element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(
            mutations
          ) {
            if (
              mutations[0].addedNodes.length ||
              mutations[0].removedNodes.length
            ) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {
            subtree: true,
            childList: true
          });
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener(
              "DOMNodeInserted",
              function() {
                methods.setWrapperHeight(stickyElement);
              },
              false
            );
            stickyElement.addEventListener(
              "DOMNodeRemoved",
              function() {
                methods.setWrapperHeight(stickyElement);
              },
              false
            );
          } else if (window.attachEvent) {
            stickyElement.attachEvent("onDOMNodeInserted", function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent("onDOMNodeRemoved", function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
              splice.call(sticked, i, 1);
              removeIdx = i;
            }
          }
          if (removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement.css({
              width: "",
              position: "",
              top: "",
              float: "",
              "z-index": ""
            });
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener("scroll", scroller, false);
    window.addEventListener("resize", resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent("onscroll", scroller);
    window.attachEvent("onresize", resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery.sticky");
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === "object" || !method) {
      return methods.unstick.apply(this, arguments);
    } else {
      $.error("Method " + method + " does not exist on jQuery.sticky");
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
});
