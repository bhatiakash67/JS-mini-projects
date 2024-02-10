const showBtns = document.querySelectorAll(".open-btn")
const closeBtns = document.querySelectorAll(".close-btn")
const answers = document.querySelectorAll(".answer")

showBtns.forEach((showBtn, index) => {
    showBtn.addEventListener("click", () => {
        answers[index].classList.add("showanswer")
        showBtn.style.display = "none";
        closeBtns[index].style.display = "inline";
    })
})

closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        answers[index].classList.remove("showanswer")
        showBtns[index].style.display = "inline";
        closeBtn.style.display = "none";
    })
})