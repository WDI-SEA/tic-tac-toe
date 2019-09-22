//Global Variables
//Sorry
// var sq1 = document.getElementById('0');
// var sq2 = document.getElementById('1');
// var sq3 = document.getElementById('2');
// var sq4 = document.getElementById('3');
// var sq5 = document.getElementById('4');
// var sq6 = document.getElementById('5');
// var sq7 = document.getElementById('6');
// var sq8 = document.getElementById('7');
// var sq9 = document.getElementById('8');

var moves = 0;
var currentPlayer;
var victory = false;
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
var pickWinner = function(sequence) {
    if (currentPlayer === "Player 1") {
        currentPlayer = "Player 2";
    } else {
        currentPlayer = "Player 1";
    };
    display.textContent = currentPlayer + ' wins!'
    grid[sequence[0]].classList.add('winner');
    grid[sequence[1]].classList.add('winner');
    grid[sequence[2]].classList.add('winner');
    victory = true;
}

var checkSame = function(arr) {
    if (grid[arr[0]].textContent != " " && grid[arr[0]].textContent === grid[arr[1]].textContent && grid[arr[0]].textContent === grid[arr[2]].textContent) {
        pickWinner(arr);
    }
}


//Check for win 
var getWinner = function() {
    for (let i = 0; i < winCond.length; i++) {
        checkSame(winCond[i]);
    }
    if (moves === 9 && victory === false) {
        display.textContent = "Tie Game!";
    }
}

//moveCounter ++ if % 2 === 0 
var playerTurn = function() {
    if (moves % 2 === 0) {
        currentPlayer = "Player 2";
    } else {
        currentPlayer = "Player 1";
    }
    display.textContent = currentPlayer;
    moves++;
}

//The Clicks
wholeBoard.addEventListener('click', function(e) {
    var currentSpot = e.target;
    if (currentSpot.textContent == " " && victory !== true) {
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