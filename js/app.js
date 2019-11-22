
let cells = document.querySelectorAll('.cell')
var game = {
    PlayerOne: 'x',
    PlayerTwo: 'o',
    currentPlayer: '',
    moves: 0
}

//Function to check for win
const checkWin = () => {
    var curPlayer;

    if (game.currentPlayer === game.PlayerOne) {
        curPlayer = game.PlayerOne
    }
    else if (game.currentPlayer === game.PlayerTwo) {
        curPlayer = game.PlayerTwo
    }

    const winner = () => {
        document.getElementById('message').textContent = curPlayer + ' WINS!!!'
        removeCellListeners()
    }

    if (document.getElementById('c1').textContent === curPlayer && document.getElementById('c2').textContent === curPlayer && document.getElementById('c3').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c4').textContent === curPlayer && document.getElementById('c5').textContent === curPlayer && document.getElementById('c6').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c7').textContent === curPlayer && document.getElementById('c8').textContent === curPlayer && document.getElementById('c9').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c1').textContent === curPlayer && document.getElementById('c4').textContent === curPlayer && document.getElementById('c7').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c2').textContent === curPlayer && document.getElementById('c5').textContent === curPlayer && document.getElementById('c8').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c3').textContent === curPlayer && document.getElementById('c6').textContent === curPlayer && document.getElementById('c9').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c1').textContent === curPlayer && document.getElementById('c5').textContent === curPlayer && document.getElementById('c9').textContent === curPlayer) {
        return winner()
    }
    else if (document.getElementById('c3').textContent === curPlayer && document.getElementById('c5').textContent === curPlayer && document.getElementById('c7').textContent === curPlayer) {
        return winner()
    }
}

//Remove ability to click on cells (when game is won/tied)
const removeCellListeners = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', placeMarker)
    }
}

//Place click listeners for cells
const addCellListeners = () => {
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', placeMarker)
    }
}

// Set currentPlayer in game object
const setCurPlr = (curr) => {
    game.currentPlayer = curr;
}

//Function to place player marker, remove event listener from marked cell, check if the player won/draw, change players, change message
const placeMarker = (e) => {
    if (game.currentPlayer === game.PlayerOne) {
        e.target.textContent=game.PlayerOne;
        e.target.removeEventListener('click', placeMarker);
        checkWin()
        document.getElementById('message').textContent = "Player 2, Go!"
        setCurPlr(game.PlayerTwo)
    }
    else if (game.currentPlayer === game.PlayerTwo) {
        e.target.textContent=game.PlayerTwo
        e.target.removeEventListener('click', placeMarker)
        checkWin()
        document.getElementById('message').textContent = "Player 1, Go!"
        setCurPlr(game.PlayerOne)
    }
    game.moves++;
    draw()
}

//Draw scenario
const draw = () => {
    if (game.moves === 9) {
        document.getElementById('message').textContent=("Cat's Game! Try Again.")
        removeCellListeners()
    }
}

//start condtions
const start = () => {
    startCell = cells

    //starting cells have no content
    for (let i = 0; i < startCell.length; i++) {
        startCell[i].textContent = ''
    }

    //set first player as 'x' and set moves to 0
    game.currentPlayer = game.PlayerOne
    game.moves = 0

    //button text changes to Restart
    document.getElementById('start').textContent = "Restart Game"

    //Reset message to start message
    document.getElementById('message').textContent=`Player 1, Go!`

    //add event Listeners to the cells once game is started
    addCellListeners()
}

//Add event listener to Start button to begin game on click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', start)
})