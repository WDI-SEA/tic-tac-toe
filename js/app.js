console.log('Up and Running!');

// required variables

var currentPlayer = 0;
var playerOneMoves = [];
var playerTwoMoves = [];
var playerOneScore = 0;
var playerTwoScore = 0;
var moves = 0;
var gameOver = false;

var winners = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [2, 4, 6]
];

var endGame = function() {
    if (checkWinOne != false || checkWinTwo != false || checkDraw != false) {
        console.log("Game Over!");
        gameOver = true;
    }
}

var checkWinOne = function() {
    console.log("checking one");
    for (var i = 0; i < winners.length; i++) {
        if (playerOneMoves.indexOf(winners[i][0]) >= 0) {
        if (playerOneMoves.indexOf(winners[i][1]) >= 0) {
        if (playerOneMoves.indexOf(winners[i][2]) >= 0) {
            document.querySelector(".p3").textContent = "Battle Result: Player One is victorious!";
            return true;
                }
                }
                }
        }
    }

var checkWinTwo = function() {
    console.log("checking two");
    for (var i = 0; i < winners.length; i++) {
        if (playerTwoMoves.indexOf(winners[i][0]) >= 0) {
        if (playerTwoMoves.indexOf(winners[i][1]) >= 0) {
        if (playerTwoMoves.indexOf(winners[i][2]) >= 0) {
            document.querySelector(".p3").textContent = "Battle Result: Player Two is victorious!";
                return true;
                }
                }
                }
        }
    }

var checkDraw = function() {
    if (checkWinOne != true && checkWinTwo != true && moves === 9) {
        console.log("draw");
        document.querySelector(".p3").textContent = "Battle Result: The battle is drawn!";
        return true;
    }
}
// need to work out how to make click non-repeatable     
var clickSquare = function(squares) {
    if (currentPlayer === 0 && moves <=8 && gameOver != true) {
        this.textContent = "X";
        currentPlayer += 1;
        moves += 1;
        playerOneMoves.push(parseInt(this.id));
        checkWinOne();
        checkDraw();
    }   else if (currentPlayer === 1 && moves <=8 && gameOver != true) {
        this.textContent = "O";
        currentPlayer -= 1;
        moves += 1;
        playerTwoMoves.push(parseInt(this.id));
        checkWinTwo();
        checkDraw();
    }
};

var score = function() {
    if (checkWinOne = true) {
        playerOneScore += 1;
    } else if (checkWinTwo = true) {
        playerTwoScore += 1;
    }
}

var scoreboard = function() {
    document.querySelector(".p1").textContent = "Player One: " + playerOneScore;
    document.querySelector(".p2").textContent = "Player Two: " + playerTwoScore;
}

var squares = document.querySelectorAll(".square");
squares.forEach(function(square) {
    square.addEventListener("click", clickSquare);
});