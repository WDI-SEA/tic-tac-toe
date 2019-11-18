let startButton = document.getElementById('startButton')
let playAgainButton = document.getElementById('playAgain')
let startCompButton = document.getElementById('startCompButton')
let squares = document.getElementsByClassName('square')
let trackPlays = []
let trackSquaresX = []
let trackSquaresO = []
let messageBoard = document.getElementById('messageBoard')
let scoreBoard = document.getElementById('scoreBoard')
let gamesPlayed = document.getElementById('gamesPlayed')
let playerScoreX = document.getElementById('playerScoreX')
let playerScoreO = document.getElementById('playerScoreO')
let xCounter = 0
let oCounter = 0
let gameCounter = 0
let allSquares = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9"]

//PLAY CODE FOR 2PL GAME
const playXO = e => {
    //show play again button
    playAgainButton.style.display = "block"
    playAgainButton.addEventListener('click', nextGame)

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
        winGame('TURKEY', playXO)
        playerScoreX.textContent = xCounter += 1
    } 
    else if (checkWin(trackSquaresO)) {
         winGame('PIE', playXO)
         playerScoreO.textContent = oCounter += 1
    } 
    else if (trackPlays.length === 9 && (checkWin(trackSquaresX) === false && checkWin(trackSquaresO) === false)) {
        drawGame(playXO)
    }
}

//check to see if 3-in-a-row combination present (2pl and comp)
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

//win game scenario
const winGame = (xo, playXOorComp) => {
    messageBoard.textContent = `Player ${xo} wins!`
    removeSquareListeners(playXOorComp)
    gamesPlayed.textContent = gameCounter += 1
    console.log(`${xo} wins!`)
}

//tie scenario (2pl and comp)
const drawGame = (playXOorComp) => {
    messageBoard.textContent = "DRAW"
    removeSquareListeners(playXOorComp)
    gamesPlayed.textContent = gameCounter += 1
    console.log(`DRAW`)
}

//add and remove listen events on squares (2pl and comp)
const removeSquareListeners = (playXOorComp) => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', playXOorComp)
    }
}
const addSquareListeners = (playXOorComp) => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', playXOorComp)
        console.log(squares[i])
    }
}

//reset to original screen with start over button
const startOver = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    let xCounter = 0
    let oCounter = 0
    let gameCounter = 0
    startButton.style.display = "block"
    startButton.textContent = "2PL Game"
    startButton.addEventListener('click', startGame)
    startCompButton.style.display = "block"
    startCompButton.textContent = "PL vs. Comp"
    startCompButton.addEventListener('click', startCompGame)
    playAgainButton.style.display = "none"
    playAgainButton.removeEventListener('click', nextGame)
    playAgainButton.removeEventListener('click', nextGameComp)
    scoreBoard.style.display = "none"
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    removeSquareListeners(playXO)
    removeSquareListeners(playXOComp)
    messageBoard.textContent = "WELCOME"
    }

//start game for 2PL
const startGame = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    xCounter = 0
    oCounter = 0
    gameCounter = 0
    addSquareListeners(playXO)
    messageBoard.textContent = "TURKEY, it's your turn"
    startButton.textContent = "Start Over"
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', startOver)
    startCompButton.style.display = "none"
    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;
    gamesPlayed.textContent = 0;
    scoreBoard.style.display = "block"
}

//reset board but keep track of score for 2PL game
const nextGame = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    addSquareListeners(playXO)
    messageBoard.textContent = "TURKEY, it's your turn"
    startButton.textContent = "Start Over"
    playAgainButton.style.display = "block"
}

//reset board but keep track of score for COMP game
const nextGameComp = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    addSquareListeners(playXOComp)
    messageBoard.textContent = "TURKEY, it's your turn"
    startButton.textContent = "Start Over"
    playAgainButton.style.display = "block"
}

//pick random square that hasn't been picked for computer player
const chooseRandomSq = () => {
    let i = Math.floor(Math.random() * 9)
    if (trackSquaresX.includes(allSquares[i]) || trackSquaresO.includes(allSquares[i])) {
        return chooseRandomSq()
    } 
    else {
        return allSquares[i]
    }
}

//check win for COMP
const didSomeoneWinComp = () =>{

    if (checkWin(trackSquaresX)) {
        winGame('TURKEY', playXOComp)
        playerScoreX.textContent = xCounter += 1
    } 
    else if (checkWin(trackSquaresO)) {
         winGame('PIE', playXOComp)
         playerScoreO.textContent = oCounter += 1
    } 
    else if (trackPlays.length === 9 && (checkWin(trackSquaresX) === false && checkWin(trackSquaresO) === false)) {
        drawGame(playXOComp)
    }
    else if (trackPlays[trackPlays.length-1] === "x") {
        setTimeout(playCompO, 2000)
    }
    else {
        messageBoard.textContent = "TURKEY, it's your turn"
    }
}

//code for computer to play
const playCompO = () => {
        let sqNum = chooseRandomSq()
        document.getElementById(sqNum).classList.add('oImage')
        trackSquaresO.push(sqNum)
        trackPlays.push('o')
        console.log(trackSquaresO)
        document.getElementById(sqNum).removeEventListener('click', playXOComp)
        didSomeoneWinComp()
}


const playXOComp = e => {
    playAgainButton.style.display = "block"
    playAgainButton.addEventListener('click', nextGameComp)

    //if first turn or last player played add x image when clicked, otherwise, add o
    if (trackPlays.length === 0 || trackPlays[trackPlays.length-1] === "o") {
        e.target.classList.add('xImage')
        trackPlays.push('x')
        trackSquaresX.push(e.target.id)
        console.log(trackSquaresX)
        messageBoard.textContent = "Player Pie is thinking..."
    }
    
    //remove event listener
    e.target.removeEventListener('click', playXOComp)
    console.log(trackPlays)

    
    //check win condition
    didSomeoneWinComp()
}

// start game for Computer game
const startCompGame = () => {
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    xCounter = 0
    oCounter = 0
    gameCounter = 0
    addSquareListeners(playXOComp)
    messageBoard.textContent = "TURKEY, it's your turn"
    startCompButton.textContent = "Start Over"
    startCompButton.removeEventListener('click', startCompGame)
    startCompButton.addEventListener('click', startOver)
    startButton.style.display = "none"
    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;
    gamesPlayed.textContent = 0;
    scoreBoard.style.display = "block"
}


document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame)
    startCompButton.addEventListener('click', startCompGame)
})