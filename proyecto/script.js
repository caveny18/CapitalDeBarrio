
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = '#08111f';
  } else {
    navbar.style.background = 'rgba(13, 27, 42, 0.9)';
  }
});
