let menu = document.getElementById("side_effect");
let button = document.getElementById("menu_btn"),
  span = button.getElementsByTagName("span")[0];
button.onclick = function () {
  span.classList.toggle("hamburger-menu-button-close");
};
function classToggle() {
  //   button.classList.toggle("hamburger-menu-button-close");
  menu.classList.toggle("side_drawer_bl");
  menu.classList.toggle("side_drawer_none");
}

document.querySelector(".menu_btn").addEventListener("click", classToggle);
