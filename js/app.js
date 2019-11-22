var xoBoard;
const playerOne = 'O';
const playerTwo = 'X';

let movesMade = 0;

const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"
    xoBoard = Array.from(Array(9).keys());
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false)
    }
    console.log(cells)
}

function turnClick(square) {
    turn(square.target.id, movesMade % 2 == 0 ? playerOne : playerTwo)
    movesMade++
}

function turn(squareId, player) {
    xoBoard[squareId] = player;
    // document.getElementById(squareId).innerText = player;
    document.getElementById(squareId).textContent = player;
    let gameWon = checkWin(xoBoard, player)
    if (gameWon) gameOver(gameWon)
    // movesMade >= 8 then it's  DRAW
 }   
    
function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
               gameWon = {index: index, player: player};
               break;
        }   
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
        gameWon.player == playerOne ? "darkseagreen" : "orange"
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false)
    }
    declareWinner(gameWon.player == playerOne ? "O Won!" : " X Won!")
}
function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

function emptysquares() {
    return xoBoard.filter(s => typeof s == 'number');
}

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
    }
    declareWinner("Tie Game!")
    return true;
 }
