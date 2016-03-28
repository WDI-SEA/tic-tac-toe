// Display elements
var squares = document.getElementsByClassName('board-squares');
var button = document.getElementById('clear-button');
var image = {
    'x': 'x.png',
    'o': 'o.png'
}

// Game logic elements
var turnCount = 0;
var curPlayer = 'x';
var winner = null;
var board = {
    'top-left'    : null,
    'top-mid'     : null,
    'top-right'   : null,
    'mid-left'    : null,
    'mid-mid'     : null,
    'mid-right'   : null,
    'bottom-left' : null,
    'bottom-mid'  : null,
    'bottom-right': null,
}

var isSquareEmpty = function(squareClicked) {
    // First check if element clicked was actually a board square 
    // (could be img w/i square)
    if (squareClicked in board) {
        // Now check to see if the square is empty
        if (board[squareClicked] === null) {
            return true;
        }
    } else {
        return false;
    }
}

var updateGameState = function(squareClicked) {
    board[squareClicked] = curPlayer;
    curPlayer = (curPlayer !== 'x') ? 'x' : 'o';
    turnCount++;
    winner = getWinner(board); 
    if (winner) {
        alert(winner.toUpperCase() + ' wins!');
    } else if (turnCount === 9) {
        alert("Tie!");
    }
}

var getWinner = function(board) {
    if (board['top-left'] === board['top-mid'] &&
        board['top-mid'] === board['top-right'] &&
        board['top-right'] !== null) {
            return board['top-right'];
    } 
    if (board['mid-left'] === board['mid-mid'] &&
        board['mid-mid'] === board['mid-right'] &&
        board['mid-right'] !== null) {
            return board['mid-right'];
    }
    if (board['bottom-left'] === board['bottom-mid'] &&
        board['bottom-mid'] === board['bottom-right'] &&
        board['bottom-right'] !== null) {
            return board['bottom-right'];
    }
    if (board['top-left'] === board['mid-left'] &&
        board['mid-left'] === board['bottom-left'] &&
        board['bottom-left'] !== null) {
            return board['bottom-left'];
    }
    if (board['top-mid'] === board['mid-mid'] &&
        board['mid-mid'] === board['bottom-mid'] &&
        board['bottom-mid'] !== null) {
            return board['bottom-mid'];
    }
    if (board['top-right'] === board['mid-right'] &&
        board['mid-right'] === board['bottom-right'] &&
        board['bottom-right'] !== null) {
            return board['bottom-right'];
    }
    if (board['top-left'] === board['mid-mid'] &&
        board['mid-mid'] === board['bottom-right'] &&
        board['bottom-right'] !== null) {
            return board['bottom-right'];
    }
    if (board['top-right'] === board['mid-mid'] &&
        board['mid-mid'] === board['bottom-left'] &&
        board['bottom-left'] !== null) {
            return board['bottom-left'];
    }
    return null;
}

var clear = function() {
    // Reset game logic for start of a new game
    for (k in board) {
        board[k] = null;
    }
    curPlayer = 'x';
    winner = null;
    turnCount = 0;

    // Clear the screen
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
}    

// Clear button
button.addEventListener('click', clear);

// Turn logic.  Excecuts on square-click.
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        if (!winner && turnCount < 9 && isSquareEmpty(e.target.id)) {
            e.target.innerHTML = '<img class="x-o-markers" src="' +
                image[curPlayer] + '" alt="o">';
            updateGameState(e.target.id);
            console.log(e, e.target.id);
        }

    });
}