
var gameBoardDiv = document.querySelector('.gameboard');
var cells = document.querySelectorAll('.cell');
var cellsArr = Array.from(cells);

var startBtn = document.querySelector('.start-btn');
var resetBtn = document.querySelector('.reset-btn');
var playerOneScore = document.querySelector('player-one.score');
var playerTwoScore = document.querySelector('player-two.score');

var msg = document.querySelector('.message');

// GAMEBOARD
var gameBoard = (() => {
    var display = ["", "", "", "", "", "", "", "", ""];

    var init = function() {
        for (var i = 0; i < cellsArr.length; i++) {
            cellsArr[i].textContent = "";
        }
        msg.textContent = "Player One's Turn Foo";
    };
        return {display, init};
})();
//console.log(gameBoardDiv);

var player = (marker) => {
    var score = 0;
    return {marker, score};
}

// players
var playerOne = player("X");
var playerTwo = player("O");

 var gameController = (() => {

    var currentPlayer = playerOne;

    var nextMove = ((e) => {

        var board = gameBoard.display;
        var gameWin;
        // ***
            if (e.target.textContent === "") {
                e.target.textContent = currentPlayer.marker;
                var cellNo = e.target.dataset.cell;
                board[cellNo-1] = currentPlayer.marker;
        // ***
                gameWin = checkForWin(board);
                // this checks for win
                if (gameWin === true) {
                    
                    msg.textContent = `${currentPlayer.marker} won!`;
                    currentPlayer.score += 1;
                    // +=
                    displayScore();

                    cellsArr.forEach(cell => cell.removeEventListener('click', gameController.nextMove));

                    // this checks for draw
                }   else if (gameWin === false && board.includes("") === false) {
                        msg.textContent = "It's a tie!";

                        cellsArr.forEach(cell => cell.removeEventListener('click', gameController.nextMove));

                }   else {
                        currentPlayer = changePlayer(currentPlayer);
                        msg.textContent = `${currentPlayer.marker}'s turn.`;
                }

                }   else {
                    msg.textContent = "Clicked already. Choose another box."
                }

    });
// console.log(gameController);

    function changePlayer(currentPlayer) {
        if (currentPlayer === playerOne) {
            currentPlayer = playerTwo;
        } else {
            currentPlayer = playerOne;
        }

        return currentPlayer;
    }

    // winning conditions
    function checkRow(a,b,c, board) {
        var winningRow = false;
        if (board[a] === board[b] &&
            board[a] === board[c] &&
            board[a] !== "") {
                winningRow = true;
        }

        return winningRow;
    }

    function checkForWin(board) {
        // this will check the rows
        if (checkRow(0,1,2,board) === true) {
            return true;
        }
        else if (checkRow(3,4,5,board)) {
            return true;
        }
        else if (checkRow(6,7,8,board)) {
            return true;
        }
        // this will check the columns
        else if (checkRow(0,3,6,board)) {
            return true;
        }
        else if (checkRow(2,5,8,board)) {
            return true;
        }
        // this will check diagonals
        else if (checkRow(0,4,8,board)) {
            return true;
        }
        else if (checkRow(2,4,6,board)) {
            return true;
        }
        else {
            return false;
        }
    }
    function displayScore() {
        playerOneScore.textContent = playerOne.score
        playerTwoScore.textContent = playerTwo.score
    };
        return {nextMove};

 })();


 // EVENT LISTENERS

 resetBtn.addEventListener('click', function() {
    gameBoard.display = ["", "", "", "", "", "", "", "", ""];
    gameBoard.init();
    cellsArr.forEach(cell => cell.addEventListener("click", gameController.nextMove));
 });

 startBtn.addEventListener('click', function() {
     gameBoardDiv.style.display = "grid";
     gameBoard.init();
     startBtn.style.display = "none";
     resetBtn.style.display = "block";
     cellsArr.forEach(cell => cell.addEventListener('click', gameController.nextMove));
 });

 gameController.displayScore();

