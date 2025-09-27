// scripts/main.js
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const nowOpen = navLinks.classList.toggle('active'); // true when menu opened
    hamburger.classList.toggle('open');
    // update aria-expanded for accessibility
    hamburger.setAttribute('aria-expanded', nowOpen);
  });

  // close menu when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // optional: close menu if a nav link is clicked (useful on mobile)
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

\