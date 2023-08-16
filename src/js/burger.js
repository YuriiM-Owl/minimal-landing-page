(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  // const anchorScrolls = document.querySelectorAll('.goto-anchor');
  const anchorScrolls = document.querySelectorAll('.anchor-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('scroll-lock');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('burger-active');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
    document.body.classList.remove('scroll-lock');
  });

  // ! Close the mobile menu with click on anchor link

  for (let anchorScroll of anchorScrolls) {
    anchorScroll.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      openMenuBtn.classList.remove('burger-active');
      bodyScrollLock.enableBodyScroll(document.body);
      document.body.classList.remove('scroll-lock');
    });
  }
})();

// ? ===============================================
