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

console.log(getComputerChoice());