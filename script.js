jQuery(document).ready(function($) {
    $('header').on('click', '#nav-trigger', function(event) {
      $('.mob-nav').show();
    });
    $('header').on('click', '#close-nav', function(event) {
      $('.mob-nav').hide();
    });
    $(window).resize(function() {
      if($(window).width() >= 768) {
        $('.mob-nav').hide();
      };
    });
  });