let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let symbol = Math.floor(Math.random() * 3);
    if(symbol === 0){
        return "rock";
    }
    else if(symbol === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
let humanChoice = prompt("type rock, paper or scissors");

    if(humanChoice.toLowerCase() === "rock"){
        return "rock";
    }
    else if(humanChoice.toLowerCase() === "paper"){
        return "paper";
    }
    else if(humanChoice.toLowerCase() === "scissors"){
        return "scissors";
    }
    else{
        return "type a valid choice";
    }


}






function playRound(humanChoice, computerChoice){


if(humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    return "You win! Rock beats Scissors";
}

else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
return "You lose! Paper beats Rock";
}

else if(humanChoice === "rock" && computerChoice === "rock"){
return "Its a tie."
}

else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
return "You win! Paper beats Rock";
}

else if(humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
return "You lose! Scissors beats Paper";
}

else if(humanChoice === "paper" && computerChoice === "paper"){
return "Its a tie."
}

else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
return "You win! Scissors beats Paper";
}

else if(humanChoice === "scissors" && computerChoice === "rock"){
    computerScore++;
return "You lose! Rock beats Scissors";
}

else if(humanChoice === "scissors" && computerChoice === "scissors"){
return "Its a tie."
}
else {
    return "type a valid choice";
}

}

console.log(playRound(getHumanChoice(), getComputerChoice()));
