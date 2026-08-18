// Scroll-reveal for elements marked .reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // On mobile, tapping the "Offerings" trigger expands its submenu instead
  // of navigating away; on desktop the CSS :hover/:focus-within handles it.
  const dropdownTrigger = document.querySelector('.has-dropdown > .dropdown-trigger');
  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        e.preventDefault();
        dropdownTrigger.parentElement.classList.toggle('expanded');
      }
    });
  }

  navLinks.querySelectorAll('a').forEach(link => {
    if (link === dropdownTrigger) return;
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    question.setAttribute('aria-expanded', isOpen);
  });
});
