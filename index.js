function checkCompatibility() {
  const main = document.querySelector('.main');
  const unsupported = document.querySelector('.unsupported-section');

  if (screen.width < 360 && main) {
    main.classList.add('hide');
  } else if (main) {
    main.classList.remove('hide');
  }

  if(screen.width < 360 && unsupported) {
    unsupported.classList.remove('hide');
  } else if (unsupported) {
    unsupported.classList.add('hide');
  }
}

checkCompatibility();
window.addEventListener('resize', checkCompatibility);
