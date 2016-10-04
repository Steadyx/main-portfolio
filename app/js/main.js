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

  $(function(handledata) {
    $('#contact-form').on('submit', function(e) {

      $.ajaxSetup({
        error: function(jqXHR, exception) {
          if (jqXHR.status === 0) {
            console.log('Not connect.\n Verify Network.');
          } else if (jqXHR.status == 404) {
            console.log('Requested page not found. [404]');
          } else if (jqXHR.status == 500) {
            console.log('Internal Server Error [500].');
          } else if (exception === 'parsererror') {
            console.log('Requested JSON parse failed.');
          } else if (exception === 'timeout') {
            console.log('Time out error.');
          } else if (exception === 'abort') {
            console.log('Ajax request aborted.');
          } else {
            console.log('Uncaught Error.\n' + jqXHR.responseText);
          }
        }
      });


      $.ajax({
        type: 'post',
        url: '/',
        data: $('#contact-form').serialize(),
        dataType: 'JSON',
        success: function(data) {
          console.log(data.status);
        }
      });
      e.preventDefault();
    });
  });
});
