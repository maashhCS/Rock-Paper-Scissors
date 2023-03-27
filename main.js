'use strict'
let computerScore = 0;
let playerScore = 0;
let roundScore = 0;

function getPlayerChoice(){
    while(true){
    let playerChoice = prompt('Choose a move').toLowerCase();
        if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors' ) {
            return playerChoice;
        } else {
            console.log('You entered a wrong move. Try again!');
        }
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(randomNumber === 1){
        return 'rock';
    } else if (randomNumber === 2){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function checkWinner(){
    if(playerScore > computerScore){
        console.log(`You win ${playerScore} to ${computerScore}. Congratulations!`);
    } else if(computerScore > playerScore){
        console.log(`You lose ${playerScore} to ${computerScore}. Unlucky`);
    }
}

function playRound(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        roundScore--;
        return "It's a Draw!";
    } else if(computerChoice === 'rock' && playerChoice === 'paper'){
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if(computerChoice === 'scissors' && playerChoice === 'rock'){
        playerScore++;
        return "You Win! Rock beats Scissors";
    } else if(computerChoice === 'paper' && playerChoice === 'scissors'){
        playerScore++;
        return "You Win! Scissors beats Paper";
    } else if(computerChoice === 'paper' && playerChoice === 'rock'){
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if(computerChoice === 'rock' && playerChoice === 'scissors'){
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if(computerChoice === 'scissors' && playerChoice === 'paper'){
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } 
}

function game(){
    let computerChoice;
    let playerChoice;
    for(roundScore; roundScore < 5; roundScore++){
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));
    }
    checkWinner();
}

game();