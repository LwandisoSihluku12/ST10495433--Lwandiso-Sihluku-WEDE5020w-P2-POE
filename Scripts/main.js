// scripts/main.js

// Select the hamburger button (☰) and the navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

// Make sure both elements exist on the page before adding behavior
if (hamburger && navLinks) {

  // When the hamburger button is clicked...
  hamburger.addEventListener('click', () => {
    // Toggle (add/remove) the "active" class on the nav menu
    // If the class is added, 'nowOpen' will be true, meaning menu is open
    const nowOpen = navLinks.classList.toggle('active');

    // Toggle (add/remove) the "open" class on the hamburger button itself
    hamburger.classList.toggle('open');

    // Update the aria-expanded attribute for accessibility
    // This tells screen readers whether the menu is open or closed
    hamburger.setAttribute('aria-expanded', nowOpen);
  });

  // Allow closing the menu when the Escape key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      // Close the menu if it is open
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Optional: close the menu when a navigation link is clicked (good for mobile)
  navLinks.addEventListener('click', (e) => {
    // Check if the clicked element is a link <a>
    if (e.target.tagName === 'A' && navLinks.classList.contains('active')) {
      // Close the menu
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}
// End of main.js

