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
        checkWin(cell, marker)
        // check against win possibilities
    }
    
    if (marker === 'x') {
        marker = 'o'
    } else {[]
        marker = 'x'
    }
    targetSquare.removeEventListener('click', clickSquare)
}

addSquareListeners()


const checkWin = (cellNumber, marker) => {
    console.log(cellNumber) // 9
    console.log(`${squares[marker]}`) // 1, 5, 9
    squares[marker].sort()
    for (let i = 0; i < wins.length; i++) {
        if ((wins[i][0] == squares[marker][0]) && (wins[i][1] == squares[marker][1]) && (wins[i][2] == squares[marker][2])) {
            console.log(`Game over! ${marker} wins`)
            alert(`Game over! ${marker} wins`)
            break
        } 
    }

}

