const btn = document.querySelector(".modal-btn")
const modalClose = document.querySelector(".close-btn")
const modal = document.querySelector(".modal-overlay")

btn.addEventListener("click", () => {
    modal.classList.add("open-modal")
})

modalClose.addEventListener("click", () => {
    modal.classList.remove("open-modal")
})