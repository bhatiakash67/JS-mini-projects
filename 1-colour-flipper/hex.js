const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let hexColour = "#";

const btn = document.getElementById("btn");
const colour = document.getElementById("colour");

function colourLogic() {
    hexColour = "#"
    for (let i = 1; i <= 6; i++) {
        randomHex = hex[Math.floor(Math.random() * hex.length)]
        hexColour += randomHex
    }
    return hexColour
}

btn.addEventListener("click", function(){
    colour.textContent = colourLogic()
    document.body.style.backgroundColor = colourLogic()
})

