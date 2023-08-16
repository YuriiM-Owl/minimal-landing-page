let scrollPosY = 0;
const btnScrollToTop = document.querySelector('.scroll-to-top-btn');

btnScrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  let windowPosY = window.scrollY;
  if (windowPosY < scrollPosY) {
    btnScrollToTop.classList.add('scroll-up-visible');
    btnScrollToTop.classList.remove('scroll-up-hidden');
  } else {
    btnScrollToTop.classList.add('scroll-up-hidden');
    btnScrollToTop.classList.remove('scroll-up-visible');
  }
  scrollPosY = windowPosY;
});
