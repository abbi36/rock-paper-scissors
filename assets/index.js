const selectionDisplay = document.getElementById('computer')
const userSelection = document.getElementById('user')
const scoreDisplay = document.getElementById('score')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userSelection.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    selectionDisplay.innerHTML = computerChoice
}

    function getResult() {
        if (computerChoice === userChoice) {
            result = 'Tie!'
        }
        if (computerChoice === 'rock' && userChoice === "paper") {
            result = 'Loser!'
        }
        if (computerChoice === 'rock' && userChoice === "scissors") {
            result = 'You lost!'
        }
        if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'Winner!'
        }   
        if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'Try again!'
        }   
        if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'Winner Winner!'
        }   
        if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You LOST!'
    }
        scoreDisplay.innerHTML = result
}

