let menu = document.getElementById("side_effect");
let button = document.getElementById("menu_btn"),
  span = button.getElementsByTagName("span")[0];
button.onclick = function () {
  span.classList.toggle("hamburger__menu__button__close");
};
function classToggle() {
  menu.classList.toggle("side_drawer_bl");
  menu.classList.toggle("side_drawer_none");
}

document.querySelector(".menu--btn").addEventListener("click", classToggle);
