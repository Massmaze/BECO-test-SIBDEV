const burgerMenu = document.querySelector(".burger-menu");
const navBar = document.querySelector(".navbar-burger");

burgerMenu.addEventListener("click", () => {
    navBar.classList.toggle('clicked');
})