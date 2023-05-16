//Sticky color header

window.addEventListener('scroll', function () {
  if (pageYOffset > 50) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
});
