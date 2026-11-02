const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');

if (menuIcon && navMenu) {
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.18,
  });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}
