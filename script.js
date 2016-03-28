// Display elements
var squares = document.getElementsByClassName('board-squares');
var onePlayerButton = document.getElementById('one-player-button');
var twoPlayerButton = document.getElementById('two-player-button');
var clearButton = document.getElementById('clear-button');
var overlay = document.getElementById('overlay');
var startMessage = document.getElementById('message');

var image = {
    'x': 'x.png',
    'o': 'o.png'
}

// Game logic elements
var players = 2;
var turnCount = 0;
var curPlayer = 'x'; // X is always human player, O is always AI
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

var isSquareEmpty = function(square) {
    // First check if element clicked was actually a board square 
    // (could be img w/i square)
    if (square in board) {
        // Now check to see if the square is empty
        if (board[square] === null) {
            return true;
        }
    }
    return false;
}

var getAiMove = function() {
    var aiSquare = Object.keys(board)[Math.floor(Math.random() * 9)];
    while (isSquareEmpty(aiSquare) === false) {
        aiSquare = Object.keys(board)[Math.floor(Math.random() * 9)];
    }
    return aiSquare;
}

var updateGameState = function(squareChosen) {
        board[squareChosen] = curPlayer;
        turnCount++;
        winner = getWinner(board); 
        if (winner) {
            document.getElementById(squareChosen).innerHTML = 
            '<img class="x-o-markers" src="' + image[curPlayer] + '" alt="o">';
            alert(winner.toUpperCase() + ' wins!');
            return;
        } else if (turnCount === 9) {
            document.getElementById(squareChosen).innerHTML = 
            '<img class="x-o-markers" src="' + image[curPlayer] + '" alt="o">';
            alert("Tie!");
            return;
        }
        document.getElementById(squareChosen).innerHTML = 
            '<img class="x-o-markers" src="' + image[curPlayer] + '" alt="o">';

        // Get ready for next turn    
        curPlayer = (curPlayer !== 'x') ? 'x' : 'o';
        // Do AI turn
        if (players === 1 && curPlayer === 'o' && turnCount < 9) {
            setTimeout(function() {
                updateGameState(getAiMove());
            }, 500);
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
        squares[i].classList.remove('red-background', 'blue-background');
        squares[i].innerHTML = '';
    }
    overlay.classList.remove('hidden');
    startMessage.classList.remove('hidden');
}    

// 1-Player button
onePlayerButton.addEventListener('click', function(e) {
    players = 1;
    overlay.classList.add('hidden');
    startMessage.classList.add('hidden');
});

// 2-Player button
twoPlayerButton.addEventListener('click', function(e) {
    players = 2;
    overlay.classList.add('hidden');
    startMessage.classList.add('hidden');
});


// Clear button
clearButton.addEventListener('click', clear);

// Turn logic.  Excecuts on square-click.
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        if (!winner && turnCount < 9 && isSquareEmpty(e.target.id)) {
            updateGameState(e.target.id);
        }
    });
}