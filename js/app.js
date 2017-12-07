var turn = 0;
var playerSymbol = "X"   
var xBoxArray = [];
var oBoxArray = [];
var box = document.getElementsByClassName('box');
var scoreBoard_h1 = document.getElementById('display');
var currentTurn_span = document.getElementById('currentTurn');
var currentPlayer_span = document.getElementById('currentPlayer');
var resetButton = document.getElementById('resetButton');

// Manages scoreboard
function scoreBoardCalc() {
    symbolCalc();
    scoreBoard_h1.innerHTML = ("Move: " + playerSymbol);
}

//changes state of scoreboard based on player turn
function symbolCalc() {
    if (turn % 2 === 0){
        playerSymbol = "X"
        scoreBoard_h1.style.border = '8px solid #D23955';
        return;
    }
    playerSymbol = "O";
    scoreBoard_h1.style.border = '8px solid #3C9BD3';
}

// Click functionality to boxes
function activeBox() {
    for (var i = 0; i < box.length; i++) {
        box[i].addEventListener('click', playerTurn);
    }
};

//Add X and O through class addition, run functions on click
function playerTurn(){
    turn++;
    if (turn % 2 === 1) {
        this.className += ' xBox';
    } else {
        this.className += ' oBox';
    }
    scoreBoardCalc();
    this.removeEventListener('click', playerTurn);
    createArrays();
    checkWinner();
};

// Reset button
function resetClick(){
    resetButton.addEventListener('click', clearBoard);
};

////clear board
function clearBoard() {
    for(var i = 0; i < box.length; i++){
        box[i].classList.remove('xBox', 'oBox')
    }
    scoreBoard_h1.innerHTML = "Tic Tac Toe";
    scoreBoard_h1.style.border = '8px solid #000';
    turn = 0;
    activeBox();
}

//creates array of turns
function createArrays(){
    xBoxArray = [];
    oBoxArray = [];
    for(var i = 0; i < box.length; i++){
        xBoxArray.push(box[i].classList.contains('xBox'));
        oBoxArray.push(box[i].classList.contains('oBox'));
    }
}

//Not pretty detect winner function 
function checkWinner() {
    if(xBoxArray[0] === true && xBoxArray[1] === true && xBoxArray[2] == true ||
    xBoxArray[3] === true && xBoxArray[4] === true && xBoxArray[5] == true ||
    xBoxArray[6] === true && xBoxArray[7] === true && xBoxArray[8] == true ||
    xBoxArray[0] === true && xBoxArray[3] === true && xBoxArray[6] == true ||
    xBoxArray[1] === true && xBoxArray[4] === true && xBoxArray[7] == true ||
    xBoxArray[2] === true && xBoxArray[5] === true && xBoxArray[8] == true ||
    xBoxArray[0] === true && xBoxArray[4] === true && xBoxArray[8] == true ||
    xBoxArray[2] === true && xBoxArray[4] === true && xBoxArray[6] == true){
        scoreBoard_h1.style.border = '8px solid #D23955';
        scoreBoard_h1.innerHTML = 'X wins!';
        for(var i = 0; i < box.length; i++){
            box[i].removeEventListener('click', playerTurn);
        }
        return
    }else if(oBoxArray[0] === true && oBoxArray[1] === true && oBoxArray[2] == true ||
    oBoxArray[3] === true && oBoxArray[4] === true && oBoxArray[5] == true ||
    oBoxArray[6] === true && oBoxArray[7] === true && oBoxArray[8] == true ||
    oBoxArray[0] === true && oBoxArray[3] === true && oBoxArray[6] == true ||
    oBoxArray[1] === true && oBoxArray[4] === true && oBoxArray[7] == true ||
    oBoxArray[2] === true && oBoxArray[5] === true && oBoxArray[8] == true ||
    oBoxArray[0] === true && oBoxArray[4] === true && oBoxArray[8] == true ||
    oBoxArray[2] === true && oBoxArray[4] === true && oBoxArray[6] == true){
        scoreBoard_h1.style.border = '8px solid #3C9BD3';
        scoreBoard_h1.innerHTML = 'O wins!';
        for(var i = 0; i < box.length; i++){
            box[i].removeEventListener('click', playerTurn);
        }
        return
    }
}

activeBox();
resetClick();