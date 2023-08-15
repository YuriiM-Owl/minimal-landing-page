const btnScrollToTop = document.querySelector('.scroll-to-top-btn');

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
