let a = ["rock", "paper", "scissors"]

function computerInput(){
    let b = Math.floor(Math.random() * a.length)
    return a[b]
    
}

let userChoice = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase()

    function gameLogic(userChoice, pcChoice) {
        if(userChoice === pcChoice){
        return "It is a draw!!!"
    }

         else if ((userChoice === "rock" && pcChoice === "scissors") ||
                 (userChoice === "paper" && pcChoice === "rock") ||
                (userChoice === "scissors" && pcChoice === "paper")) {

         return "You win!!!"

    }   else {
            return  "You lose!!!"
}}


    if(a.includes(userChoice)){
        let pcChoice = computerInput()

        console.log("Computer's choice is: ", pcChoice)
        console.log(gameLogic(userChoice, pcChoice))
    }
    else{
        console.log("Invalid choice. Please enter rock, paper or scissors")
    }


