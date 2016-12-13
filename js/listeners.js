$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#projects-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*6
      }, 3000);

  });
  $("#edu-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*14
      }, 4000);

  });
  $("#contact-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*18
      }, 6000);

  });
  $("#redux-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*8
      }, 800);

  });
  $("#ember-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*10
      }, 1600);

  });
  $("#js-scroll").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*12
      }, 2400);

  });
});
