import "./style.css";

const menuIcon = document.getElementById("menu-icon");
const popupMenu = document.getElementById("popup-menu");
const crossIcon = document.getElementById("cross-icon");

menuIcon.addEventListener("click", () => {
  popupMenu.classList.remove("hidden");
  popupMenu.classList.add("block");
});

crossIcon.addEventListener("click", () => {
  popupMenu.classList.remove("block");
  popupMenu.classList.add("hidden");
});
