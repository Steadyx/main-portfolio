(function($) {

  $('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'right' // Displays dropdown with edge aligned to the left of button
  });

  $(function() {

    $('.parallax').parallax();

  });

  $(function() {

    $('.scrollspy').scrollSpy();
    
  });




})(jQuery);
