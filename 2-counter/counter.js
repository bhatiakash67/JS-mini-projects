const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const counterUpdate = document.querySelector(".counter");

let counter = 0;

function decreasing() {
    --counter
    if (counter < 0) {
        counterUpdate.style.color = "red"
    }
    else if (counter === 0) {
        counterUpdate.style.color = "black";}
    counterUpdate.textContent = counter
}

function defaultCounter() {
    counter = 0
    counterUpdate.style.color = "black"
    counterUpdate.textContent = counter
}

function increasing() {
    ++counter
    if (counter > 0) {
        counterUpdate.style.color = "rgb(60, 136, 37)"
    }
    else if (counter === 0) {
        counterUpdate.style.color = "black";}
    counterUpdate.textContent = counter
}

minus.addEventListener("click", decreasing)
reset.addEventListener("click", defaultCounter)
plus.addEventListener("click", increasing)