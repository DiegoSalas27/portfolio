let btnMenu = document.querySelector(".btn-menu");
let nav = document.querySelector(".menu");
let navItems = document.querySelectorAll(".nav-item");
let main = document.querySelector(".main");
let footer = document.getElementById("main-footer");

btnMenu.addEventListener("click", function() {
  nav.classList.toggle("show");
  navItems.forEach(item => {
    item.classList.toggle("show");
  });
  main.classList.toggle("move");
  footer.classList.toggle("move");
});
