$(document).ready(function(){
  var bookmarklet_js = "javascript:void(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','//wordless-web-production.s3.amazonaws.com/wlw.js');document.body.appendChild(jsCode);}());";
  $('#bookmarklet').attr('href', bookmarklet_js);
  window.clicked_bookmarklet = false;
  $('#bookmarklet').click( function(e) {
    e.preventDefault();
    if (window.clicked_bookmarklet) {
      return;
    }
    window.clicked_bookmarklet = true;
    $('.inactive').removeClass('inactive');
    var bookmarklet_js = "javascript:void(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','//wordless-web-production.s3.amazonaws.com/wlw.js');document.body.appendChild(jsCode);}());";
    $(this).attr('href', bookmarklet_js);
    $(this).attr('title','Wordless Web');
    $('#about_link_outer').removeClass('hidden');
    $('#arrow').removeClass('hidden');
    /* this puts the arrow right next to the button
    var offset = $('#bookmarklet').offset();
    $('#arrow').removeClass('hidden').offset({
      left: offset.left + 133,
      top: offset.top - 234,
    });
   */
  });
  $('#header').click( function() {
    $('#instructions').removeClass('hidden');
    $('#about').addClass('hidden');
    $('#about_link_outer').removeClass('hidden');
  });
  $('#about_link').click( function() {
    $('#instructions').addClass('hidden');
    $('#about').removeClass('hidden');
    $('#about_link_outer').addClass('hidden');
    return false;
  });
});
