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

let checkWin = function(){
    let matchCount = 0;
    for(let i = 0; i , winningCombos.length; i++){

        for(let j = 0; j < winningCombos[0].length; j++){
            if(playerToken === "X"){
                if(playerXChoices.includes(winningCombos[i][j])){
                    matchCount++;
                }
                if(matchCount === 3){
                    document.getElementById("winner").innerText = "Player X Wins!";
                }
            }

            if(playerToken === "O"){

                if(playerOChoices.includes(winningCombos[i][j])){
                    matchCount++;
                }
                if(matchCount === 3){
                    document.getElementById("winner").innerText = "Player O Wins!";
                }
            }
        }
        matchCount = 0;
    }

};

let playerTurn = function(id){

    element.innerText = playerToken;

    if(playerToken === "X"){
        playerXChoices.push(parseInt(element.id));
        checkWin();
        playerToken = "O";
        element.onclick = "";


    }else{

        playerOChoices.push(parseInt(element.id));
        checkWin();
        playerToken = "X";
        element.onclick = "";

    }


};

let setUpBoard = function(){
    //Tie the functions to the boxes
    let boxes = document.getElementsByClassName("box");

    for(let i = 0; i < boxes.length; i++){
        boxes[i].innerText = "";
        boxes[i].onclick = function(){playerTurn(this)};
    }

};