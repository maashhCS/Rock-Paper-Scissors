'use strict'
let computerScore = 0;
let playerScore = 0;
let roundScore = 0;
let winner = "";

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
    if(playerScore > 4 || computerScore > 4){
        if(playerScore > computerScore){
            winner = `You win ${playerScore} to ${computerScore}. Congratulations!`;
        } else{
            winner =  `You lose ${playerScore} to ${computerScore}. Unlucky`;
        }
    };
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

function game(playerChoice){
    if(playerScore === 5 || computerScore === 5){

        return;
    }else {
        let computerChoice = getComputerChoice();
        document.getElementById("result").innerHTML = playRound(computerChoice, playerChoice);
        checkWinner();
        document.getElementById("winner").innerHTML = winner;
        document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    }
}

function reset(){
    roundScore = 0;
    playerScore = 0;
    computerScore = 0;
    winner = "";
    document.getElementById("score").innerHTML = `${playerScore} : ${computerScore}`;
    document.getElementById("result").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button =>{
    button.addEventListener('click', function() {
        game(button.value);
    });
});

const buttonReset = document.querySelector('#btn-reset');
buttonReset.addEventListener('click', reset);