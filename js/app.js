var mainBoard
const playerOne = '🍔';
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    
    [0, 3 ,6],
    [1, 4, 7],
    [2, 5, 8],
    
    [0, 4 ,8],
    [2, 4, 6]
    
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelectorAll(".endGame")
    mainBoard = Array.from(Array(9).keys());
    // remove xs and os when restart game with for loop
    for(var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        // when restarting game remove previose winning square
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',turnClick, false);

    }
}
               
function turnClick(square) {
    //so you cant click when won 
    if (typeof mainBoard[square.target.id] == 'number') {
turn(square.target.id, playerOne)
     
    }
}
        // the Play again button 
        function turn(squareId, player) {
            mainBoard[squareId] = player;
            document.getElementById(squareId).innerText = player;
            let gameWon = checkWin(mainBoard, player) 
            if (gameWon) gameOver(gameWon)
            // didint define the square i
 }

function checkWin (board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, [])
    let gameWon = null;
    for (let [index, win] of winningCombos.entries()) {
        //has the player played in all the winning spots
        if(win.every(elem => plays.indexOf(elem) > -1)) {
            // if WON, winning combo & winning player
            gameWon = {index: index, player: player}
            // stop
            break;
        }
    }
    // if no one wins game will be null
    return gameWon
}

function gameOver (gameWon) {
    for(let index of winningCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
            gameWon.player == playerOne ? "Pink" : "Purple"
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick,false);
    }
    declareWinner(gameWon.player == playerOne ? "YOU WON" : "YOU LOOSE")
}

function declareWinner (who){
    // show endgame
    document.querySelector(".endgame").style.display = "block"
    document.querySelector(".endgame.text").innerText = who;
    
}

function emptySquare() {
    return mainBoard.filter(s => typeof s == 'number')
    // the box w/out x or o are empty 
}





