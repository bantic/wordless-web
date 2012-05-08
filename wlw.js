;(function() {
  // This is hosted off of github
  // because we don't want to deal with setting up and serving off of SSL
  // through our domain provider
  // Edit this file here and upload it there
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
      window.__wlw.hideWords(jQuery, true);
      window.__wlw.live(jQuery);
    }
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

  window.__wlw.getTextNodesIn = function(jQuery, el) {
    return jQuery(el).find(":not(iframe)").andSelf().contents().filter(function() {
        return this.nodeType == 3;
    });
  };

  window.__wlw.hideWords = function(jQuery, include_transitions) {
    window.__wlw.getTextNodesIn(jQuery, jQuery('body')).remove();
    jQuery('iframe').css('opacity',0);
    jQuery('input').val('').attr('placeholder','');
    jQuery('textarea').val('').attr('placeholder','');
    jQuery('object').remove(); // bye, flash
    window.__wlw.queued_update = false;
  }
  window.__wlw.loader();
})();

