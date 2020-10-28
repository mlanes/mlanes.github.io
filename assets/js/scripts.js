$(document).ready(function () {
  // Menu Mobile Initialization
  $('.sidenav').sidenav();

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // Verifing size of my screen
  $(window).on('resize', function () {
    if ($(this).outerWidth() < 992) {
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(() => {
        $('.sidenav').sidenav('close');
      });
    }
  });
});
