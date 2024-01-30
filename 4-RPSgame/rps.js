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
    const header = document.getElementById("header")
    const userInput = document.getElementById("user-input")
    const pcinput = document.getElementById("pc-input")
    const result = document.getElementById("result")
    const userScore = document.getElementById("user-score")
    const pcScore = document.getElementById("pc-score")
    const buttons = document.querySelectorAll(".button-container button")

    header.textContent = "rock paper scissors";
    header.style.textTransform = "uppercase";
    let userScoreCount = 0;
    let pcScoreCount = 0;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const userChoice = this.id
            const pcChoice = computerInput()

            userInput.textContent = `You chose: ${userChoice.toUpperCase()}`
            pcinput.textContent = `The computer chose: ${pcChoice.toUpperCase()}`

            const gameResult = gameLogic(userChoice, pcChoice)
            result.textContent = gameResult;

            if(gameResult === "You win!!!"){
                userScoreCount++
            }
            else if(gameResult === "You lose!!!"){
                pcScoreCount++
            }
            userScore.textContent = `You: ${userScoreCount}`
            pcScore.textContent = `PC: ${pcScoreCount}`
        })
    })
})