let user, grid

const addSquareListeners = () => {
    let squares = document.querySelectorAll('.square')
    // Loop through each square
    for (let i = 0; i < squares.length; i++) {        
        let square = squares[i]
        // add 'unclicked' class and event listener for click
        square.classList.add('unclicked')
        square.addEventListener('click',clickSquare)
    }
}

const clickSquare = e => {
    // change to the clicked square class
    e.target.classList.add(user)
    if (user === "x") { 
        user = "o"
    } else {
        user = "x"
    }
    e.target.removeEventListener('click', clickquare)
}

const start = () => {
    console.log('pressed play')
    user = 'x'
    addSquareListeners()
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('content was loaded')
    document.getElementById('play').addEventListener('click', start)
})

/*
let player, gameboard

const clickSquare = e => {
}

const removeSquareListeners = () => {
}

const addSquareListeners = () => {
}

const clickTurn  = () => {
}

const checkWin = () => {
}

const endGame = message => {
}

const winGame = () => {
}

const loseGame = () => {
}

const start = () => {
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start').addEventListener('click', start)
})
*/