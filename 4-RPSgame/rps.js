function computerInput() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function gameLogic(userChoice, pcChoice) {
    if (userChoice === pcChoice) {
        return "It is a draw!!!"
    }

    else if ((userChoice === "rock" && pcChoice === "scissors") ||
        (userChoice === "paper" && pcChoice === "rock") ||
        (userChoice === "scissors" && pcChoice === "paper")) {
        return "You win!!!"

    } else {
        return "You lose!!!"
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input")
    const pcinput = document.getElementById("pc-input")
    const result = document.getElementById("result")

    const buttons = document.querySelectorAll(".button-container button")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const userChoice = this.id
            const pcChoice = computerInput()
            const

            userInput.textContent = `You chose: ${userChoice}`
            pcinput.textContent = `The computer chose: ${pcChoice}`
            result.textContent = gameLogic(userChoice, pcChoice)
        })
    })
})