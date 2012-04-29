;(function() {
  window.__wlw = {};
  window.__wlw.loading_jQuery = false;
  window.__wlw.loader = function() {
    if (typeof(jQuery) === 'undefined') {
      if (window.__wlw.loading_jQuery) {
        setTimeout(window.__wlw.loader, 100);
      } else {
        window.__wlw.loading_jQuery= true;
        var jq_script = document.createElement('script');
        jq_script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        document.body.appendChild(jq_script);
        window.__wlw.loader();
      }
    } else {
      window.__wlw.fixCSSStyleDeclaration();
      jQuery = window.__wlw.addWhitenToJquery(jQuery);
      jQuery = window.__wlw.addStyleToJquery(jQuery);
      window.__wlw.hideWords(jQuery, true);
      window.__wlw.live(jQuery);
    }
  }

  window.__wlw.fixCSSStyleDeclaration = function() {
    // see http://stackoverflow.com/questions/2655925/jquery-css-applying-important-styles
    // For those who need them (< IE 9), add support for CSS functions
    var isStyleFuncSupported = CSSStyleDeclaration.prototype.getPropertyValue != null;
    if (!isStyleFuncSupported) {
        CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
            return this.getAttribute(a);
        };
        CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
            this.setAttribute(styleName,value);
            var priority = typeof priority != 'undefined' ? priority : '';
            if (priority != '') {
                // Add priority manually
                var rule = new RegExp(RegExp.escape(styleName) + '\\s*:\\s*' + RegExp.escape(value) + '(\\s*;)?', 'gmi');
                this.cssText = this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
            } 
        }
        CSSStyleDeclaration.prototype.removeProperty = function(a) {
            return this.removeAttribute(a);
        }
        CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
            var rule = new RegExp(window.__wlw.escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?', 'gmi');
            return rule.test(this.cssText) ? 'important' : '';
        }
    }
  }

  // Escape regex chars with \
  window.__wlw.escape = function(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  window.__wlw.addStyleToJquery = function(jQuery) {
    // The style function
    jQuery.fn.style = function(styleName, value, priority) {
        // DOM node
        var node = this.get(0);
        // Ensure we have a DOM node 
        if (typeof node == 'undefined') {
            return;
        }
        // CSSStyleDeclaration
        var style = this.get(0).style;
        // Getter/Setter
        if (typeof styleName != 'undefined') {
            if (typeof value != 'undefined') {
                // Set style property
                var priority = typeof priority != 'undefined' ? priority : '';
                style.setProperty(styleName, value, priority);
            } else {
                // Get style property
                return style.getPropertyValue(styleName);
            }
        } else {
            // Get CSSStyleDeclaration
            return style;
        }
    }
    return jQuery;
  }

  window.__wlw.addWhitenToJquery = function(jQuery) {
    jQuery.fn.whiten = function(include_transitions) {
      var css_changes = {
        '-webkit-transition':'all 1s ease-out',
        '-moz-transition':'all 1s ease-out',
        '-o-transition':'all 1s ease-out',
        'transition':'all 1s ease-out'
      };
      var style_changes = {
        'color':'#FFF',
        'background-color':'#FFF',
        'border-color':'#FFF',
        'text-shadow':'none'
      };
      if (include_transitions) {
        this.css(css_changes);
      }
      for (var style_change in style_changes) {
        if (style_changes.hasOwnProperty(style_change)) {
          this.style(style_change, style_changes[style_change], 'important');
        }
      }
      // hide text filled into inputs
      this.val('');
      this.attr('placeholder','');
      return this;
    }
    return jQuery;
  }

  window.__wlw.live = function(jQuery) {
    jQuery(document).bind('DOMNodeInserted', function(event) {
      if (!window.__wlw.queued_update) {
        window.__wlw.queued_update = true;
        var my_jquery = jQuery;
        var doUpdate = function() {
          window.__wlw.hideWords(my_jquery, true);
        };
        window.setTimeout( doUpdate, 1500 );
      }
    });
  };

  window.__wlw.getTextNodesIn = function(el) {
      return jQuery(el).find(":not(iframe)").andSelf().contents().filter(function() {
          return this.nodeType == 3;
      });
  };

  window.__wlw.hideWords = function(jQuery, include_transitions) {
    window.__wlw.getTextNodesIn(jQuery('body')).remove();
    window.__wlw.queued_update = false;
  }
  window.__wlw.loader();
})();

