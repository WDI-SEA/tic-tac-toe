/*
A user should be able to click on different squares to make a move.
Every click will alternate between marking an X and O
Upon marking of an individual cell, use JavaScript to add a class to each cell to display the separate players.
A cell should not be able to be replayed once marked.
You should not be able to click remaining empty cells after the game is over.
Add a reset button that will clear the contents of the board.
Display a message to indicate which turn is about to be played.
Detect draw conditions (ties/cat's game)
Detect winner: Stop game and declare the winner if one player ends up getting three in a row.
Hint: Determine a set of winning combinations. Check those combinations on the board contents after every move.
*/

// If game is over, we know to have player start the game or not
var gameOver = false;

// 5 items max in each array
var xPlayed = [];
var yPlayed = [];

// Button that will clear the board
var reset = false;

// Player One and Two assignment
var playerOne = "X";
var playerTwo = "O";

// Who is currently playing
var turn = 0;

// Boxes that have already been played need to go into the xPlayed and yPlayed array, 
// When values are true, move them into the xPlayed and yPlayed array
var divNumberPlayed = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
}


// Getting winning combos
var rowOne = document.getElementsByClassName("r1");
var rowTwo = document.getElementsByClassName("r2");
var rowThree = document.getElementsByClassName("r3");
var columnOne = document.getElementsByClassName("c1");
var columnTwo = document.getElementsByClassName("c2");
var columnThree = document.getElementsByClassName("c3");
var diagOne = document.getElementsByClassName("d1");
var diagTwo = document.getElementsByClassName("d2");



// Check board is clear and game is not over
var playGame = function() {
    //Check if game is over
    if (!gameOver) {
        console.log("Let's play!");
        var cells = document.getElementsByClassName("cell");
        for (var cell of cells) {
            
            cell.addEventListener("click", clickCell)
        }
    }
}
// This will grab the individual cells to "click"
var divNumber = document.getElementsByClassName("cell");
var clickCell = function() {
    if (!this.classList.contains("marked")) {

    
        //  divNumber.addEventListener("click", playerOne);}
        
        // determine current player
        var currentPlayer;
        if (turn % 2 === 0) {
            currentPlayer = playerOne;
        } else {
            currentPlayer = playerTwo;
        }

        // mark the cell with current player's token
        this.textContent=currentPlayer;

        // After cell has been clicked, block it
        this.classList.add("marked", currentPlayer);
        
        checkIfWon();
        // Switch the player
        turn++;
    console.log("clicked", this, currentPlayer)
    }
}
    
// Player 1 clicks box
// Box needs to be marked
// Check for win
// If no win, next player goes
        // X and O needs to alternate
// Player 2's turn

// On "Click"



// Checking winning combos
var checkIfWon = function() {
    if ((playerOne || playerTwo) === rowOne) {
        return true;
    } else if ((playerOne || playerTwo) === rowTwo) {
        return true;
    } else if ((playerOne || playerTwo) === rowThree) {
        return true;
    } else if ((playerOne || playerTwo) === columnOne) {
        return true;
    } else if ((playerOne || playerTwo) === columnTwo) {
        return true;
    } else if ((playerOne || playerTwo) === columnThree) {
        return true;
    } else if ((playerOne || playerTwo) === diagOne) {
        return true;
    } else if ((playerOne || playerTwo) ===diagTwo) {
        return true;
    } else  {
        return false;
    }

}

// checkIfWon();
playGame();


