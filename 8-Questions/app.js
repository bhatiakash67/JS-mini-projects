const answers = document.querySelectorAll(".answer")
const showBtns = document.querySelectorAll(".open-btn")
const closeBtns = document.querySelectorAll(".close-btn")

showBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        answers[index].classList.add("showanswer")
        showBtns[index].style.display = "none"
        closeBtns[index].style.display = "inline"
    })
})
closeBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        answers[index].classList.remove("showanswer")
        closeBtns[index].style.display = "none"
        showBtns[index].style.display = "inline"
    })
})