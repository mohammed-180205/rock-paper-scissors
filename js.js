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

