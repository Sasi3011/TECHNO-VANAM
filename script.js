// Navbar scroll effect
const navbar = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobileMenu');
let isMenuOpen = false;

// Mobile menu toggle
function toggleMobileMenu() {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('active');
  
  const menuIcon = document.querySelector('.menu-icon');
  if (isMenuOpen) {
    menuIcon.style.background = 'transparent';
    menuIcon.style.transform = 'rotate(45deg)';
    menuIcon.style.setProperty('--before-transform', 'rotate(90deg)');
    menuIcon.style.setProperty('--after-transform', 'rotate(-90deg)');
  } else {
    menuIcon.style.background = 'var(--color-text)';
    menuIcon.style.transform = 'rotate(0)';
    menuIcon.style.setProperty('--before-transform', 'rotate(0)');
    menuIcon.style.setProperty('--after-transform', 'rotate(0)');
  }
}

// Smooth scroll
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      toggleMobileMenu();
    }
  }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
});