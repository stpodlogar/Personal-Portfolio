// Dark Mode Functionality
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const closeBtn = document.querySelector('.btn-close');

console.log(closeBtn);

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  if (isDark) {
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    closeBtn.classList.add('btn-close-white');
  } else {
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    closeBtn.classList.remove('btn-close-white');
  } 
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

