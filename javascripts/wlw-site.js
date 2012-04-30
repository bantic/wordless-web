$(document).ready(function(){
  $('#bookmarklet').click( function(e) {
    if ($(this).attr('href') == '#') {
      $('.inactive').removeClass('inactive');
      var bookmarklet_js = "javascript:void(function(){var jsCode=document.createElement('script');jsCode.setAttribute('src','//wordless-web-production.s3.amazonaws.com/wlw.js');document.body.appendChild(jsCode);}());";
      $(this).attr('href', bookmarklet_js);
      $(this).attr('title','Wordless Web');
      $('#about_link_outer').removeClass('hidden');
      var offset = $('#bookmarklet').offset();
      $('#arrow').removeClass('hidden').offset({
        left: offset.left + 133,
        top: offset.top - 234,
      });
    }
    return false;
  });
  $('#about_link').click( function() {
    $('#instructions').addClass('hidden');
    $('#about').removeClass('hidden');
    $('#about_link_outer').fadeOut();
    return false;
  });
});
