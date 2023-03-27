'use strict'

function getPlayerChoice(){
    let valid = false;
    while(valid = false){
    let playerChoice = prompt('').toLowerCase;
        if(playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors' ) {
            valid = true;
            return playerChoice;
        } else {
            console.log('You entered a wrong move. Try again!');
        }
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(randomNumber === 1){
        return 'Rock';
    } else if (randomNumber === 2){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        return "It's a Draw!";
    } else if(computerChoice === 'rock' && playerChoice === 'paper'){
        return "You Win! Paper beats Rock";
    } else if(computerChoice === 'scissors' && playerChoice === 'rock'){
        return "You Win! Rock beats Scissors";
    } else if(computerChoice === 'paper' && playerChoice === 'scissors'){
        return "You Win! Scissors beats Paper";
    } else if(computerChoice === 'paper' && playerChoice === 'rock'){
        return "You Lose! Paper beats Rock";
    } else if(computerChoice === 'rock' && playerChoice === 'scissors'){
        return "You Lose! Rock beats Scissors";
    } else if(computerChoice === 'scissors' && playerChoice === 'paper'){
        return "You Lose! Scissors beats Paper";
    } 
}

