
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let currentScore = document.querySelector('.current-score');
let scoreText = document.querySelector('.score-text');
let playerSelection = '';
let computerSelection = '';
let playerPoints = 0;
let computerPoints = 0;

rock.addEventListener('click', function() {
    playerSelection = 'rock';
    getComputerChoice();
    playRound();
});
paper.addEventListener('click', function() {
    playerSelection = 'paper';
    getComputerChoice();
    playRound();
});
scissors.addEventListener('click', function() {
    playerSelection = 'scissors';
    getComputerChoice();
    playRound();
});

function getComputerChoice () {
    return computerSelection = (choice = Math.floor(Math.random() * 3) === 0 ? "rock" :
        Math.floor(Math.random() * 3) === 1 ? "paper" : "scissors");
};


function playRound () {
    if(playerSelection === 'rock' && computerSelection === 'rock' ||
    playerSelection === 'paper' && computerSelection === 'paper' ||
    playerSelection === 'scissors' && computerSelection === 'scissors'
    ) {
        scoreText.textContent =`You both picked ${playerSelection}, the game is a draw`;
        updateScore()
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        playerPoints++;
        scoreText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        updateScore()
    } else {
        computerPoints++;
        scoreText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        updateScore()
    }  
}

function updateScore() {
    currentScore.textContent = `Player score = ${playerPoints}, Computer Score = ${computerPoints}`;
    if (playerPoints === 5) {
        currentScore.textContent = `Player Wins`
        playerPoints = 0
        computerPoints = 0
    }
    if (computerPoints === 5) {
        currentScore.textContent = `Computer Wins`
        playerPoints = 0
        computerPoints = 0
    }
};