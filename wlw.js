;(function() {
  window.__wlw = {};
  window.__wlw.jQuery = (typeof jQuery === 'undefined');
  window.__wlw.loading_jQuery = false;
  window.__wlw.loader = function() {
    if (!window.__wlw.jQuery) {
      if (window.__wlw.loading_jQuery) {
        console.log('loading...trying again in 100ms');
        setTimeout(window.__wlw.loader, 100);
      } else {
        console.log('no jquery...loading for the first time');
        window.__wlw.loading_jQuery= true;
        var jq_script = document.createElement('script');
        jq_script.src = '';
        document.body.appendChild(jq_script);
        window.__wlw.loader();
      }
    } else {
      console.log('got JQUERY');
      window.__wlw.hideWords(jQuery);
    }
  }
  window.__wlw.hideWord = function(jQuery) {
    console.log("hiding words");
    jQuery('body').find('*').each( function() {
      $(this).css({color:'#FFF',background-color:'#FFF',border:'none'});
    });
  }
})();
