const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-menu-button");

const toggleMenu = (event) => {
  menu.classList.toggle("is-open-navbar");
}

menuButton.addEventListener("click", toggleMenu);
closeMenuButton.addEventListener("click", toggleMenu);
