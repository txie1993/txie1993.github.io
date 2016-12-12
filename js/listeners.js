$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: (window.innerHeight)*6
      }, 3000);

  });
});
