$(document).ready(function() {

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

  // var options = [{
  //   selector: '.title',
  //   offset: 0,
  //   callback: function(el) {
  //     Materialize.fadeInImage($(el));
  //   }
  // }, {
  //   selector: '.description',
  //   offset: 0,
  //   callback: function(el) {
  //     Materialize.fadeInImage($(el));
  //   }
  // }, {
  //   selector: '.timeline-col',
  //   offset: 0,
  //   callback: function(el) {
  //     Materialize.fadeInImage($(el));
  //   }
  //
  // }];
  // Materialize.scrollFire(options);


  $('.collapsible').collapsible({
    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style

  });

  $('.skillbar').each(function() {
    $(this).find('.skill-bar').css({
      width: $(this).attr('data-skills'),
      backgroundColor: 'rgba(89, 232, 200, 0.95)'
    })
    console.log($(this).attr('data-skills'));
    console.log($(this))
  })

  //
  // var $toastContent = $('<span>I am toast content</span>');
  // Materialize.toast($toastContent, 5000);


});
