const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

closeMenu.addEventListener('click', closeMenuFn);
overlay.addEventListener('click', closeMenuFn);

function closeMenuFn() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}


if (menuToggle && sideMenu && closeMenu && overlay) {
  menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
  });

  closeMenu.addEventListener('click', closeMenuFn);
  overlay.addEventListener('click', closeMenuFn);
}

function closeMenuFn() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}



const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});
