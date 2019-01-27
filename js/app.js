console.log('Up and Running!');

// required variables

var currentPlayer = 0;
var playerOne = [];
var playerTwo = [];
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;

var clickSquare = function() {
    if (currentPlayer === 0) {
        this.textContent = "X";
        playerOne.push(this);
        currentPlayer += 1;
    }   else {
        this.textContent = "O";
        playerTwo.push(this);
        currentPlayer -= 1;
    }
}

var squares = document.querySelectorAll(".square");
//create array for loop
squares.forEach(function(square) {
    square.addEventListener("click", clickSquare);
});

var btn = document.getElementsByTagName("button");
button.addEventListener("click", reset);
}