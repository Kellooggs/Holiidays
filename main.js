/*ANIMATION BUTTON MOBILE RESPONSIVE & MENU MOBILE NAVIGATION*/
const menuResponsive = document.querySelector(".menu-responsive");
const mobileMenu = document.querySelector(".mobile-nav");
const navLinkBtn = document.querySelectorAll(".nav-item");

menuResponsive.addEventListener("click", () => {
  menuResponsive.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});

navLinkBtn.forEach((navLinkBtn) => {
  navLinkBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-active");
    menuResponsive.classList.remove("is-active");
  });
});
