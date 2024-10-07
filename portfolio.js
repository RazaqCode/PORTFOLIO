// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Smooth Scroll to Sections (Optional since CSS already has smooth scroll)
  // If you prefer JavaScript-based smooth scrolling, uncomment the following:
  
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
  // Hero Section Animation
  const heroText = document.querySelector('.hero h1');
  const heroDesc = document.querySelector('.hero p');
  const heroButton = document.querySelector('.hero button');
  
  window.addEventListener('load', () => {
    heroText.classList.add('fade-in');
    heroDesc.classList.add('fade-in');
    heroButton.classList.add('fade-in');
  });
  
  // Picture Animation for the About Section
  const aboutPic = document.querySelector('.about-pic');
  window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;
  
    if (sectionPosition < screenPosition) {
      aboutPic.classList.add('slide-in');
    }
  });
  