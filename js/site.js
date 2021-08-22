
// Smooth Scroll
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked and hamburger

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#main-nav',
    offset: 0
  });

})(jQuery); // End of use strict

// $(window).scroll(function() {
//   if ($(window).scrollTop() > 0) {
//     console.log("scrolled");
//     $('.bg-transparent').css("background-color", "#fff !important");
//   };
// });

$(window).scroll(function() {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
});


