$(document).ready(function(){
  var bookmarklet_js = "javascript: (function () { var jsCode = document.createElement('script');jsCode.setAttribute('src', '//wordlessweb.spintoapp.com/wlw.js'); document.body.appendChild(jsCode); }());";
  $('#bookmarklet').click( function(e) {
    if ($(this).attr('href') == '#') {
      $('.inactive').removeClass('inactive');
      e.preventDefault();
      $(this).attr('href', bookmarklet_js);
      $(this).attr('title','Wordless Web Bookmarklet');
    }
  });
  $('#about').click( function() {

  });
});
