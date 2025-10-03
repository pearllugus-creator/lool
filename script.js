// Menú hamburguesa para móviles
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  // Cerrar menú al hacer clic en un enlace (en móviles)
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });
  
  // Animación de aparición para elementos al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);
  
  // Observar elementos para animación
  const elementsToAnimate = document.querySelectorAll('.recipe-card, .category, .about-text, .about-image');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});