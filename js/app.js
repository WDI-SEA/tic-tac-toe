// Defining players & showing what squares players choose in an array
let turn = 0
let playerOne = "X"
let playerTwo = "O"
let arrPlayerOneSquares = []
let arrPlayerTwoSquares = []
let win

// Defining turns
const turns = (e) => {
    // Split the id to just get the number of the squares id and assigned it to the variable id
    const id = e.target.id.split('')[2]
    e.target.removeEventListener('click', turns)
    if (turn % 2 !== 0) {
        // Logging the squares playerTwo chooses
        e.target.textContent = playerTwo
        arrPlayerTwoSquares.push(id)
        checkForWin(arrPlayerTwoSquares, 'playerTwo')
    } else if (turn % 2 === 0) {
        // Logging the squares playerOne chooses
        e.target.textContent = playerOne
        arrPlayerOneSquares.push(id)
        checkForWin(arrPlayerOneSquares, 'playerOne')
    }
    turn++ 
    if (turn === 9) {
        document.getElementById('message').textContent = "It's a tie."
    }
}

// Grab all the squares from the DOM and tracking which player chooses which square
const addListenerToSquares = () => {
    let squares = document.getElementsByClassName('square')
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', turns)
    }
}

// Calling the addListenerToSquares function
addListenerToSquares()

// Remove event listeners for squares once square is clicked
const removeEventListenerToSquares = () => {
    let squares = document.getElementsByClassName('square')
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', turns)
    }
}

// Check for win and display win message for player that one
const checkForWin = (squares, player) => {
    // Winning possible arrays
   let possibleWins = [
       ["1", "2", "3"],
       ["4", "5", "6"],
       ["7", "8", "9"],
       ["1", "4", "7"],
       ["2", "5", "8"],
       ["3", "6", "9"],
       ["1", "5", "9"],
       ["7", "5", "3"]
    ]
    // Looping through the arrays to check to see if win is possible
    for (let i = 0; i < possibleWins.length; i++) {
        const possibleWin = possibleWins[i]
        let canWin = true
        // Looping through the arrays again to see if number is included in array of possibilities
        for (let j = 0; j < possibleWin.length; j++) {
            // Saying winning array possibilities are still there
            if (canWin == true) {
                if (squares.includes(possibleWins[i][j])) {
                    canWin = true 
                // No win is possible for the particular array
                }  else {
                    canWin = false 
                    win = false
                }
            }
        }
        // Display winning message and remove event listeners on empty squares
        if (canWin == true) {
            document.getElementById('message').textContent = `${player} Wins!` 
            removeEventListenerToSquares()
        }
    }
}

// If game ends in a tie or player wins, allow the board to be reset by clicking reset button
const clearSquares = () => {
    if (turn === 9 || checkForWin == true) {
        turns(turn < squares[i])
    }
}

// Adding event listener to restart button so board can be cleared
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('button').addEventListener('click', clearSquares)
})