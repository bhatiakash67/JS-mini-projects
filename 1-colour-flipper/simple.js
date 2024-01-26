const colours = ["rgb(61, 12, 17)", "rgb(216, 0, 50)", "rgb(247, 140, 162)","rgb(249, 222, 201)"]
const btn = document.getElementById("btn")
const colour = document.getElementById("colour")

function randColour(){
    let randomColour = Math.floor(Math.random() * colours.length)
    return colours[randomColour]
}

btn.addEventListener("click", function(){
    const newColour = randColour()
    document.body.style.backgroundColor = newColour
    colour.textContent = newColour
})