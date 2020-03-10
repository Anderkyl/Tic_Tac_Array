let playerToken = "X";
let playerXChoices = [];
let playerOChoices = [];

let winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],


];

letCheckWin = function(){
    let matchCount = 0;

    for(let i = 0; i < winningCombos.length; i++){
        for(let j = 0; j < winningCombos[0].length; j++){
            if(player)
        }

    }

};

let playerTurn = function(id){

    id.innerText = playerToken;


};

let setUpBoard = function(){
    //Tie the functions to the boxes
    let testClick = document.getElementById("1");

    testClick.onclick = function(){playerTurn(this)};


};