const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("rotate")
    links.classList.toggle("show-links")
})