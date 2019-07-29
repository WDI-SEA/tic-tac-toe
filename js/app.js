

 document.addEventListener('DomContentLoaded', function() {
    // document.getElementById('reset').addEventListener('click', start);
 });

var startBoard;
let humanPLayer = 'o';
let aiPlayer = 'x';
const winCombinations = [
    ['topLeft', 'topCenter', 'topRight'],
    ['middleLeft', 'middleCenter', 'middleRight'],
    ['bottomLeft', 'bottomCenter', 'bottomRight'],
    ['topLeft', 'middleCenter', 'bottomRight'],
    ['topleft', 'middleLeft', 'bottomLeft'],
    ['topRight', 'miggleCenter', 'bottomLeft'],
    ['topCenter', 'middleCenter', 'bottomCenter'],
    ['topRight', 'middleRight', 'bottomRight'],
]

let cells = document.getElementsByClassName('cells');


startGame ();

function startGame() {
    document.querySelector('.endGame').style.display = 'none';
    // to make array be from 0 - 9
    startBoard = Array.from(Array(9).keys());
    // console.log(startBoard);
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        // cells[i].style.removeProperty('backgroundcolor');
        cells[i].addEventListener('click', turnClick);
    }
};

turnClick();

function turnClick (square) {
    console.log(square.target.id);
    if (typeof startBoard[square.target.id] == 'number') {
        turnClick(square.target.id,);
        if (checkTie()) turnClick(bestSpot(), aiPlayer);
    }
};



function turn(squareId, humanPlayer) {
     console.log('great');
     startBoard[squareId] = humanPlayer;
     humanPlayer = document.getElementById(squareId).innerText = 'player';
     let gameWon = checkWin(startBoard, humanPlayer);
     if (gameWon) {
         gameOver(gameWon);
     }; 
};

function checkWin(board, player) {
     let plays = board.reduce((a, e, i) => (e === player)) ? a.concat(i) : (a, []);

     let gameWon = null;

     for (let [index, win] of winCombinations.entries()) {
         if (win.every(elem => plays.indexOf(elem) > -1));
            else (gameWon = {index: 'index', player: 'player'});
             }
             return gameWon;
     };

function gameOver(gameWon) {
     for (let index of winCombinations[gameWone.index]) {
        document.getElementById(index).style.backgroundColor = gameWon.player == humanPlayer ? 'blue' : 'red';
    }
    for (var i = 0; i <cells.length; i++) {
        cells.removeEventListener('click', turnClick);
    }
    declareWinner(gameWon.player == humanPlayer ? "You Win!" : "You Lose!");
};

function declareWinner(who) {
    document.querySelector("endGame").stlye.display = "block";
    document.querySelector("endGame.text").innerText = who;
};

function emptySquares() {
    return startBoard.filter(s => typeOf, s == 'number');
};

function bestSpot() {
    return emptySquares()[0];
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "yellow";
            cell[i].removeEventListener('click', turnClick);

        }
        declareWinner('Tie Game!')
        return true; 
    }
    return false; 
}



        
    
    // var startBoard = document.querySelectorAll('#cells');

    // for (var i = 0; i < cells.length; i++){
        // if (gameBoard[i].getAttribute('cells') ==='true') {
            
            // return false;
        // }
    // };
        
    


