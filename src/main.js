import "./style.css";

const menuIcon = document.getElementById("menu-icon");
const popupMenu = document.getElementById("popup-menu");
const crossIcon = document.getElementById("cross-icon");
const mainContainer = document.getElementById("main-container");

menuIcon.addEventListener("click", () => {
  popupMenu.classList.remove("hidden");
  popupMenu.classList.add("block");
  document.body.classList.add("bg-upper");
});

crossIcon.addEventListener("click", () => {
  popupMenu.classList.remove("block");
  popupMenu.classList.add("hidden");
  document.body.classList.remove("bg-upper");
});
