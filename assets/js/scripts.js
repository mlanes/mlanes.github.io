$(document).ready(function () {
  const console = Console;
  console.customMessage();

  let sidenav = $('.sidenav');
  let buttonRocket = $('a.button-rocket');

  // Menu Mobile Initialization
  sidenav.sidenav();

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

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

  // Verifing size position scroll to show or not the Button Rocket when page was load
  if ($(window).scrollTop() >= 760) {
    buttonRocket.addClass('visible');
  }

  // Verifing size of my screen and position scroll
  $(window)
    .on('resize', function () {
      if ($(this).outerWidth() < 992) {

        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').click(() => {
          sidenav.sidenav('close');
        });
      }
    })
    .scroll(function (event) {
      // Get position scroll
      let scroll = $(this).scrollTop();

      // Show Rocket Button in this proportion
      if (scroll >= 760) {
        buttonRocket.addClass('visible');
      } else {
        buttonRocket.removeClass('visible');
      }
    });

  // Method back to top
  buttonRocket.click(function (event) {
    event.preventDefault();
    if ($(window).scrollTop() >= 760) { 
      buttonRocket.addClass('toInfinityAndBeyond');
      $('html, body').animate({ scrollTop: 0 }, 800, () => buttonRocket.removeClass('toInfinityAndBeyond'));
    }
  });
});
