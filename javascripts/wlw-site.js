$(document).ready(function(){
  "use strict";
  if ($.browser.mozilla) {
    $('#bookmarklet').addClass('firefox');
  }
  var wlw_js_src = 'https://www.wordlessweb.com/javascripts/wlw.js';
  var bookmarklet_js = "javascript:void(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','"+wlw_js_src+"');document.body.appendChild(jsCode);}());";
  $('#bookmarklet').attr('href', bookmarklet_js);
  window.clicked_bookmarklet = false;
  $('#bookmarklet').click( function(e) {
    e.preventDefault();
    if (window.clicked_bookmarklet) {
      return;
    }
    window.clicked_bookmarklet = true;
    $('#instructions').removeClass('hidden');
    $('#about_link_wrapper').removeClass('hidden');
    $('#header').removeClass('inactive');
    $('#arrow').removeClass('hidden');
    placeArrow();
  });
  $('#header').click( function() {
    if (!window.clicked_bookmarklet) {
      return false;
    }
    $('#instructions').removeClass('hidden');
    $('#about').addClass('hidden');
  });
  $('#about_link').click( function() {
    $('#instructions').addClass('hidden');
    $('#about').removeClass('hidden');
    return false;
  });
  function placeArrow() {
    var offset = $('#bookmarklet').offset();
    $('#arrow').offset({
      left: offset.left + 149,
      top: offset.top - 232,
    });
  }
  $(window).resize(placeArrow);
});

