const sidebar = document.querySelector(".sidebar")
const sidebarToggleButton = document.querySelector(".sidebar-toggle")
const close = document.querySelector(".close-btn")

sidebarToggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})

close.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar")
})