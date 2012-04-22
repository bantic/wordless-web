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
      window.__wlw.hideWords(jQuery);
    }
  }
  window.__wlw.hideWords = function(jQuery) {
    jQuery('body').find('*').each( function() {
      jQuery(this).css({'-webkit-transition':'all 1s ease-out',
                   '-moz-transition':'all 1s ease-out',
                   '-o-transition':'all 1s ease-out',
                   'transition':'all 1s ease-out',
                   'color':'#FFF',
                   'background-color':'#FFF',
                   'border-color':'#FFF'});
    });
  }
  window.__wlw.loader();
})();
