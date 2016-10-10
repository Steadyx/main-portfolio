$(document).ready(function(e) {

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
  });

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
    });
  });


  // var name = $('#name').val();
  // var email = $('#email').val();
  // var subject = $('#subject').val();
  // var messag = $('#message').val();
  //
  // var info = {
  //   "name": name,
  //   "email": email,
  //   "subject": subject,
  //   "message": message
  // };
  //
  //
  // $.ajax({
  //   type: 'post',
  //   url: '/',
  //   data: $('form').serialize(),
  //   dataType: 'json',
  // }).done(function(data) {
  //   JSON.parse(data);
  //   console.log(data)
  //   if (data.Success) {
  //     alert('success!');
  //     console.log(data.response)
  //   } else {
  //     alert(data.Error);
  //     console.log(data.response)
  //
  //   }
  //
  //
  // }).fail(function(data) {
  //   console.log(data);
  // });
  // event.preventDefault();
});
