let startButton = document.getElementById('startButton')
let playAgainButton = document.getElementById('playAgain')
//let startCompButton = document.getElementById('startCompButton')
let squares = document.getElementsByClassName('square')
let trackPlays = []
let trackSquaresX = []
let trackSquaresO = []
let messageBoard = document.getElementById('messageBoard')
let gamesPlayed = document.getElementById('gamesPlayed')
let playerScoreX = document.getElementById('playerScoreX')
let playerScoreO = document.getElementById('playerScoreO')
let xCounter = 0
let oCounter = 0
let gameCounter = 0
//let allSquares = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"]


//pick random square that hasn't been picked 
// const chooseRandomSq = () => {
// //math random for index to pull from array with all square numbers, then check if in square tracker array
//     let i = Math.floor(Math.random() * 9)
//     if (trackSquaresX.includes(allSquares[i]) || trackSquaresO.includes(allSquares[i])) {
//         return chooseRandomSq()
//     } 
//     else {
//         return allSquares[i]
//     }
// }

//computer player O
// const playCompO = () => {
//         let sqNum = chooseRandomSq()
//         document.getElementById(sqNum).classList.add('oImage')
//         trackSquaresO.push(sqNum)
//         trackPlays.push('o')
//         console.log(trackSquaresO)
//         document.getElementById(sqNum).removeEventListener('click', playXO)
//         didSomeoneWin()
// }

//add x or o to square when clicked
const playXO = e => {
    playAgainButton.style.display = "block"

    //if first turn or last player played add x image when clicked, otherwise, add o
    if (trackPlays.length === 0 || trackPlays[trackPlays.length-1] === "o") {
        e.target.classList.add('xImage')
        trackPlays.push('x')
        trackSquaresX.push(e.target.id)
        console.log(trackSquaresX)
        messageBoard.textContent = "PIE-FACE, it's your turn"
    }
    else {
        e.target.classList.add('oImage')
        trackPlays.push('o')
        trackSquaresO.push(e.target.id)
        console.log(trackSquaresO)
        messageBoard.textContent = "TURKEY, it's your turn"
    }
    
    //remove event listener
    e.target.removeEventListener('click', playXO)
    console.log(trackPlays)

    
    //check win condition
    if (checkWin(trackSquaresX)) {
        winGame('TURKEY')
        playerScoreX.textContent = xCounter += 1
    } 
    else if (checkWin(trackSquaresO)) {
         winGame('PIE')
         playerScoreO.textContent = oCounter += 1
    } 
    else if (trackPlays.length === 9 && (checkWin(trackSquaresX) === false && checkWin(trackSquaresO) === false)) {
        drawGame()
    }
}



// const didSomeoneWinComp = () =>{

//     if (checkWin(trackSquaresX)) {
//         winGame('X')
//         playerScoreX.textContent = xCounter += 1
//     } 
//     else if (checkWin(trackSquaresO)) {
//          winGame('O')
//          playerScoreO.textContent = oCounter += 1
//     } 
//     else if (trackPlays.length === 9 && (checkWin(trackSquaresX) === false && checkWin(trackSquaresO) === false)) {
//         drawGame()
//     }
//     else if (trackPlays[trackPlays.length-1] === "x") {
//         setTimeout(playCompO, 3000)
//     }
//     else {
//         messageBoard.textContent = "Player X, it's your turn"
//     }
// }

const checkWin = (arr) => {
    switch(true) {
        case arr.includes('sq1') && arr.includes('sq2') && arr.includes('sq3'):
            return true
            break
        case arr.includes('sq4') && arr.includes('sq5') && arr.includes('sq6'):
            return true
            break
        case arr.includes('sq7') && arr.includes('sq8') && arr.includes('sq9'):
            return true
            break
        case arr.includes('sq1') && arr.includes('sq4') && arr.includes('sq7'):
            return true
            break
        case arr.includes('sq2') && arr.includes('sq5') && arr.includes('sq8'):
            return true
            break
        case arr.includes('sq3') && arr.includes('sq6') && arr.includes('sq9'):
            return true
            break
        case arr.includes('sq1') && arr.includes('sq5') && arr.includes('sq9'):
            return true
            break
        case arr.includes('sq3') && arr.includes('sq5') && arr.includes('sq7'):
            return true
            break
        default:   
            return false
        }
    //if sq1, sq2, sq3
    //if sq4, sq5, sq6
    //if sq7, sq8, sq9
    //if sq1, sq4, sq7
    //if sq2, sq5, sq8
    //if sq3, sq6, sq9
    //if sq1, sq5, sq9
    //if sq3, sq5, sq7
    
    //if all squares filled and above not true
    //return draw

    //else return false
}

const winGame = (xo) => {
    messageBoard.textContent = `Player ${xo} wins!`
    removeSquareListeners()
    gamesPlayed.textContent = gameCounter += 1
    console.log(`${xo} wins!`)
}

const drawGame = () => {
    messageBoard.textContent = "DRAW"
    removeSquareListeners()
    gamesPlayed.textContent = gameCounter += 1
    console.log(`DRAW`)
}

const removeSquareListeners = () => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', playXO)
    }
}

const addSquareListeners = () => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
        squares[i].addEventListener('click', playXO)
        console.log(squares[i])
    }
}

const startGame = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    let xCounter = 0
    let oCounter = 0
    let gameCounter = 0
    addSquareListeners()
    messageBoard.textContent = "TURKEY, it's your turn"
    startButton.textContent = "Start Over"
    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;
    gamesPlayed.textContent = 0;
    document.getElementById('scoreBoard').style.display = "block"
}

const nextGame = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    addSquareListeners()
    messageBoard.textContent = "Player X, it's your turn"
    startButton.textContent = "Start Over"
    playAgainButton.style.display = "block"
}

document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame)
    //startCompButton.addEventListener('click', startCompGame)
})

playAgainButton.addEventListener('click', nextGame)

// const startCompGame = () => {
//     trackPlays = []
//     trackSquaresX = []
//     trackSquaresO = []
//     let xCounter = 0
//     let oCounter = 0
//     let gameCounter = 0
//     addSquareListeners(playXOComp)
//     messageBoard.textContent = "Player X, it's your turn"
//     startButton.textContent = "2PL Game"
//     playerScoreX.textContent = 0;
//     playerScoreO.textContent = 0;
//     gamesPlayed.textContent = 0;
//     document.getElementById('scoreBoard').style.display = "block"
//     document.querySelectorAll('p')[3].innerHTML = 'Player Pie (Computer): <span id="playerScoreO"'
// }

// const playXOComp = e => {
//     playAgainButton.style.display = "block"

//     //if first turn or last player played add x image when clicked, otherwise, add o
//     if (trackPlays.length === 0 || trackPlays[trackPlays.length-1] === "o") {
//         e.target.classList.add('xImage')
//         trackPlays.push('x')
//         trackSquaresX.push(e.target.id)
//         console.log(trackSquaresX)
//         messageBoard.textContent = "Player O is thinking..."
//     }
    
//     //remove event listener
//     e.target.removeEventListener('click', playXOComp)
//     console.log(trackPlays)

    
//     //check win condition
//     didSomeoneWinComp()
// }

// startCompButton.addEventListener('click', startCompGame)