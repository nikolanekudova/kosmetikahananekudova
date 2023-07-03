const toggleButton = document.getElementById("hamburger-menu-button");
const navbarLinks = document.getElementById("navbar-links");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});
