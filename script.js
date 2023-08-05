const menuActiv = document.querySelector('.menu_activ');
const burgerMenu = document.querySelector('.burger_menu');

function toggleMenu() {
  menuActiv.classList.toggle('hidden_menu');
}

burgerMenu.addEventListener('click', toggleMenu);