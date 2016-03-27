// Display elements
var squares = document.getElementsByClassName('board-squares');
var button = document.getElementById('clear-button');
var image = {
    'x': 'x.png',
    'o': 'o.png'
}; 

// Game logic elements
var curPlayer = 'x';
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

var updateGameState = function(squareClicked) {
    board[squareClicked] = curPlayer;
    curPlayer = (curPlayer !== 'x') ? 'x' : 'o';
    var winner = getWinner(board);
    if (winner) {
        alert(winner, 'won!')
    }
}

var getWinner = function(board) {
    if (board['top-left'] === board['top-mid'] &&
        board['top-left'] === board['top-right'] &&
        board['top-left'] !== null) {
            return board['top-left'];
    } 
    if (board['mid-left'] === board['mid-mid'] &&
        board['mid-left'] === board['mid-right'] &&
        board['mid-left'] !== null) {
            return board['mid-left'];
    }
    if (board['bottom-left'] === board['bottom-mid'] &&
        board['bottom-left'] === board['bottom-right'] &&
        board['bottom-left'] !== null) {
            return board['bottom-left'];
    }
    if (board['top-left'] === board['mid-left'] &&
        board['top-left'] === board['bottom-left'] &&
        board['top-left'] !== null) {
            return board['top-left'];
    }
    if (board['top-mid'] === board['mid-mid'] &&
        board['top-mid'] === board['bottom-mid'] &&
        board['top-mid'] !== null) {
            return board['top-mid'];
    }
    if (board['top-right'] === board['mid-right'] &&
        board['top-right'] === board['bottom-right'] &&
        board['top-right'] !== null) {
            return board['top-right'];
    }
    if (board['top-left'] === board['mid-mid'] &&
        board['top-left'] === board['bottom-right'] &&
        board['top-left'] !== null) {
            return board['top-left'];
    }
    if (board['top-right'] === board['mid-mid'] &&
        board['top-right'] === board['bottom-left'] &&
        board['top-right'] !== null) {
            return board['top-right'];
    }
}

// Turn logic.  Excecuts on square-click.
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        e.target.innerHTML = 
            '<img class="x-o-markers" src="' + image[curPlayer] + '" alt="o">';
        updateGameState(e.target.id);
        curPlayer = nextPlayer(curPlayer);
        console.log(e, e.target.id);


    });
};

button.addEventListener('click', function(e) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
});