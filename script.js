function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    let playerSelection, computerSelection;

    function getChoices() {
        function getComputerChoice () {
            return (choice = Math.floor(Math.random() * 3) === 0 ? "rock" :
                Math.floor(Math.random() * 3) === 1 ? "paper" : "scissors")
        }
        computerSelection = getComputerChoice()
        playerSelection = prompt("Rock, Paper, Scissors").toLowerCase()

        return {
            computerSelection: computerSelection,
            playerSelection: playerSelection
        }
    }

    function playRound (playerSelection, computerSelection) {
        if(playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'paper' && computerSelection === 'paper' ||
        playerSelection === 'scissors' && computerSelection === 'scissors'
        ) {
            return `You both picked ${playerSelection}, the game is a draw`;
        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
        ) {
            playerPoints++
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        } else {
            computerPoints++
            return `You Lose! ${computerSelection} beats ${playerSelection} }`;
        }  
    }
    while (playerPoints < 2 && computerPoints < 2) {
        let choices = getChoices(); // Capture selections from getChoices()
        playerSelection = choices.playerSelection;
        computerSelection = choices.computerSelection;

        playRound(playerSelection, computerSelection) // updates points
        console.log(`Player picked ${playerSelection}, computer choice ${computerSelection}. Player points ${playerPoints}, Computer points ${computerPoints}`)
    }
    
    if (playerPoints === 2) {
        winner = "Player";
    } else if (computerPoints === 2) {
        winner = "Computer";
    }
    
    return `${winner} has 2 points, ${winner} wins!`;

    
}

let result = game();
console.log(result);
