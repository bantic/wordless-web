$(document).ready(function(){
  var bookmarklet_js = "javascript: (function () { var jsCode = document.createElement('script');jsCode.setAttribute('src', '//wordless-web-production.s3.amazonaws.com/wlw.js'); document.body.appendChild(jsCode); }());";
  $('#bookmarklet').click( function(e) {
    if ($(this).attr('href') == '#') {
      $('.inactive').removeClass('inactive');
      e.preventDefault();
      $(this).attr('href', bookmarklet_js);
      $(this).attr('title','Wordless Web Bookmarklet');
      $('#about_link_outer').removeClass('hidden');
      var offset = $('#bookmarklet').offset();
      $('#arrow').removeClass('hidden').offset({
        left: offset.left + 128,
        top: offset.top - 274,
      });
    }
  });
  $('#about_link').click( function() {
    $('#instructions').addClass('hidden');
    $('#about').removeClass('hidden');
    $('#about_link_outer').fadeOut();
    return false;
  });
});
