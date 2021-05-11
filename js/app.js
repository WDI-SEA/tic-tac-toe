window.addEventListener("DOMContentLoaded", () => {
    // set constant variables
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    // arraw for winning combinations
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]
    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('board');
    const YouAreTheWinnerElement = document.getElementById('YouAreTheWinner');
    const rematchButton = document.getElementById('rematchButton')
    const YouAreTheWinnerTextElement = document.querySelector('[data-You-Are-The-WINNER-text]')
    // let circleTurn

    startGame()

    rematchButton.addEventListener('click', startGame)

    function startGame() {
        circleTurn = false
        cellElements.forEach(cell => { 
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.removeEventListener('click', handleClick)
            cell.addEventListener('click', handleClick, { once: true})
        })
        setBoardHoverClass()
        YouAreTheWinnerElement.classList.remove('show')
    }
    // makes cell only fire once to prevent icons changing during play
    function handleClick(e) {   
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)   
        if (checkWin(currentClass)) {
            endGame(false)
        } else if (isTie()) {
            endGame(true)
        } else {
            swapTurns() 
            setBoardHoverClass() 
        }
    }

    function endGame(tie) {
      if (tie) {
        YouAreTheWinnerTextElement.innertext = 'Tie!'
        } else {
 // check to see whos turn it is
        YouAreTheWinnerTextElement.innerText = `${circleTurn ? "O" : "X"} Wins!`
        }
// shows who won
        YouAreTheWinnerElement.classList.add('show')
    }
// check for draw- used a destructure of cell element// does not return tie message
    function isTie() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) || 
            cell.classList.contains(CIRCLE_CLASS)
        })
    }
// clicks cell
    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }
// switch X-O turns
    function swapTurns() {
        circleTurn = !circleTurn
    }
// hover icon - remove icons from board unless its that icons turn
    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
        } else {
        board.classList.add(X_CLASS)
        }
    
    }
    // checking winning combination
    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
    // END Result, code shows who won, but does not stop game? I can still mark cells with last player icon used to win
            // if circle wins game resets correctly
        })
    }
})