//Global Variables
var moves = 0;
var currentPlayer;
var victory = false;
var player1Wins = 0;
var player2Wins = 0;
var winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
];

//DOM References
var wholeBoard = document.querySelector(".whole-board");
var grid = Array.from(document.getElementsByClassName('gametile'));
var button = document.querySelector('#reset');
var display = document.querySelector('#display');

//Functions
//Pick and display the winner 
var pickWinner = function(sequence) {
    if (victory === false) {
    if (currentPlayer === "Player 1") {
        currentPlayer = "Player 2";
        player2Wins++;
        document.querySelector('#player2').textContent = "Player 2 wins: " + player2Wins;
    } else {
        currentPlayer = "Player 1";
        player1Wins++;
        document.querySelector('#player1').textContent = "Player 1 wins: " + player1Wins;
    };
    display.textContent = currentPlayer + ' wins!'
    grid[sequence[0]].classList.add('winner');
    grid[sequence[1]].classList.add('winner');
    grid[sequence[2]].classList.add('winner');
    victory = true;
    }
}

//Compares the grid squares with the passed in respective winning conditions
var checkSame = function(arr) {
    if (grid[arr[0]].textContent != " " && grid[arr[0]].textContent === grid[arr[1]].textContent && grid[arr[0]].textContent === grid[arr[2]].textContent) {
        pickWinner(arr);
    }
}

//Check for win by passing in every winCond to checkSame
var getWinner = function() {
    for (let i = 0; i < winCond.length; i++) {
        checkSame(winCond[i]);
    }
    if (moves === 9 && victory === false) {
        display.textContent = "Tie Game!";
    }
}

//Alternates the current player and displays it
var playerTurn = function() {
    if (victory === false) {
    if (moves % 2 === 0) {
        currentPlayer = "Player 2";
    } else {
        currentPlayer = "Player 1";
    }
    display.textContent = currentPlayer + "'s turn";
    moves++;
    }
}

//The Clicks
wholeBoard.addEventListener('click', function(e) {
    var currentSpot = e.target;
    if (currentSpot.textContent == " " && victory === false) {
        playerTurn();
        if (currentPlayer === "Player 1") {
            currentSpot.textContent = 'O';
        } else {
            currentSpot.textContent = 'X';
        }
    } else {
        console.log("welp");
    }
    getWinner();
})

//Reset Function
button.addEventListener('click', function(e) {
    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = " ";
        grid[i].classList.remove('winner');
        moves = 0;
    }
    display.textContent = "Begin!";
    victory = false;
});