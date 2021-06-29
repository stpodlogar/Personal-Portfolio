
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
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked and hamburger
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
    menuBtn.classList.remove('open');
    menuOpen = false;
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#main-nav',
    offset: 72
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

// Hamburger Icon animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

