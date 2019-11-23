console.log('Loaded')

let marker = 'x'
let clicks = 0
let squares = {
    x: [],
    o: []
}

const wins = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]]


const unclickedSquares = document.getElementsByClassName('square')

// Function to mark with X or O
const addSquareListeners = e => {
    const squares = document.querySelectorAll('.square') 
    console.log(squares)
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', clickSquare)
    }
}
  
const clickSquare = (event) => {

    //clicks += 1

    console.log(event)        

    let targetSquare = event.target
    targetSquare.classList.remove("unclicked")
    targetSquare.classList.add("clicked")

    targetSquare.classList.add(`${marker}`)

    let cell = targetSquare.getAttribute('cell')

    squares[marker].push(cell)

    if (squares[marker].length >= 3) {
        // check against win possibilities
        // sort squares[marker]
        squares[marker] = squares[marker].sort()
        for (let i = 0; i < wins.length; i++) {
            if (wins[i] == squares[marker]) {
                alert("Game over! ${marker} wins")
                break
            }
        }
    }
    /*
    if (cell < 4) {
        squares[marker][0][cell] = 1
    } else if (cell <7) {
        squares[marker][1][cell] = 1
    } else {
        squares[marker][2][cell] = 1
    }
    if (checkWin(cell, marker)) {
        alert('Game over!')
    }
    */
    
    if (marker === 'x') {
        marker = 'o'
    } else {[]
        marker = 'x'
    }
    targetSquare.removeEventListener('click', clickSquare)
}

addSquareListeners()

const winningSquares = [
    [0,1,2],

]

const checkWin = (cellNumber, marker) => {
    
    console.log(cellNumber)
    console.log(`${squares[marker]}`)
    var squaresToCheck = squares[marker]
    var sum = 0
    /*
    // check rows
    for (let i = 0; i < 3; i++) {
        // check rows
        for (let j = 0; j < 3; j++) {
            sum += squaresToCheck[i][j]
        }
        if (sum === 3) {
            return true
        } else {
            // check columns
            sum = 0
            for (let j = 0; j < 3; j++) {
                sum += squaresToCheck[j][i]
            }
            if (sum === 3) {
                return true
            } else {
                // check diagonals
                return false
            }
        }
        */

}

