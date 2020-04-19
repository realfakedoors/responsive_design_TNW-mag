document.addEventListener('DOMContentLoaded', function (){

  // When the user scrolls the page, execute scrollNav
  window.onscroll = function() {scrollNav()};

  // Get the navbar
  var navbar  = document.getElementById("fixed-navbar");
  
  // Get the department navbar's logo
  var navlogo = document.getElementById("nav-logo");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar and show the navlogo
  // when a user reaches its scroll position.
  
  // Remove "sticky" and hide the navlogo when a user scrolls above the navbar.
  function scrollNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      navlogo.style.display = "inline-block";
    } else {
      navbar.classList.remove("sticky");
      navlogo.style.display = "none";
    }
  }
  
})

// Dropdown menu in top navbar (only shows when screen is 768px or less).
  
function hamburgerDropdown() {
  document.getElementById("hamburger-dropdown").classList.toggle("show");
}