const menuToggle = document.getElementById('menuToggle');
const navbarContainer = document.getElementById('navbar-container');

function toggleNavbar() {
  navbarContainer.classList.toggle('show');
}

function closeNavbar(event) {
  if (!navbarContainer.contains(event.target) && !menuToggle.contains(event.target)) {
    navbarContainer.classList.remove('show');
  }
}

menuToggle.addEventListener('click', toggleNavbar);
document.addEventListener('click', closeNavbar);
