
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

// Dark Mode Functionality
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
  }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for current theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}

