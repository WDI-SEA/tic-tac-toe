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

    //if first turn or the last player played o when clicked, play X image and tell O it is their turn
    if (trackPlays.length === 0 || trackPlays[trackPlays.length-1] === "o") {
        e.target.classList.add('xImage')
        
        trackPlays.push('x')
        trackSquaresX.push(e.target.id)

        messageBoard.textContent = "PIE, it's your turn"
    }
    else {
        e.target.classList.add('oImage')
        
        trackPlays.push('o')
        trackSquaresO.push(e.target.id)

        messageBoard.textContent = "TURKEY, it's your turn"
    }
    
    //remove event listener
    e.target.removeEventListener('click', playXO)

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


//shared 2pl and computer code
//check to see if 3-in-a-row combination present (2pl and comp)
const checkWin = (arr) => {
    //if sq1, sq2, sq3
    //if sq4, sq5, sq6
    //if sq7, sq8, sq9
    //if sq1, sq4, sq7
    //if sq2, sq5, sq8
    //if sq3, sq6, sq9
    //if sq1, sq5, sq9
    //if sq3, sq5, sq7
       //Win - return true
    //else return false
    
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
}

//win game scenario - winner message, remove all square event listeners and add 1 to game count
const winGame = (xo, playXOorComp) => {
    messageBoard.textContent = `Player ${xo} wins!`

    removeSquareListeners(playXOorComp)

    gamesPlayed.textContent = gameCounter += 1
}

//tie scenario (2pl and comp) - draw message, remove all square event listeners, and add 1 to game counts
const drawGame = (playXOorComp) => {
    messageBoard.textContent = "DRAW"

    removeSquareListeners(playXOorComp)

    gamesPlayed.textContent = gameCounter += 1

}

//add and remove event listeners on squares (2pl and comp)
const addSquareListeners = (playXOorComp) => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', playXOorComp)
    }
}

const removeSquareListeners = (playXOorComp) => {
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener('click', playXOorComp)
    }
}

//reset to original screen with start over button and clear all scores
const startOver = () => {
    //clear all scores
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    let xCounter = 0
    let oCounter = 0
    let gameCounter = 0

    //show start button for 2Pl game & PL vs. comp again and add event listener
    startButton.style.display = "block"
    startButton.textContent = "2PL Game"
    startButton.addEventListener('click', startGame)

    startCompButton.style.display = "block"
    startCompButton.textContent = "PL vs. Comp"
    startCompButton.addEventListener('click', startCompGame)

    //hide play again button and remove event listeners
    playAgainButton.style.display = "none"
    playAgainButton.removeEventListener('click', nextGame)
    playAgainButton.removeEventListener('click', nextGameComp)

    //hide scoreboard
    scoreBoard.style.display = "none"

    //reset squares - remove images and event listeners
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    removeSquareListeners(playXO)
    removeSquareListeners(playXOComp)

    //welcome message
    messageBoard.textContent = "WELCOME"
    }

//start game for 2PL
const startGame = () => {
    //reset trackers and counters
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    xCounter = 0
    oCounter = 0
    gameCounter = 0

    //add event listeners to squares for the 2PL play function
    addSquareListeners(playXO)

    //player 1 turn message
    messageBoard.textContent = "TURKEY, it's your turn"

    //change start button to "start over", remove event listener to start game and add event listener to start game over when clicked
    startButton.textContent = "Start Over"
    startButton.removeEventListener('click', startGame)
    startButton.addEventListener('click', startOver)

    //hide start 2pl vs. comp mode button
    startCompButton.style.display = "none"

    //reveal the scoreboard and start at 0 for each player score and games played tracker
    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;
    gamesPlayed.textContent = 0;
    scoreBoard.style.display = "block"
}

//reset board but keep track of score for 2PL game - run with "play again" button
const nextGame = () => {
    //reset trackers
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    
    //reset squares and add event listeners back for 2pl game
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    addSquareListeners(playXO)
}

//reset board but keep track of score for COMP game
const nextGameComp = () => {
    //reset trackers    
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
 
    //reset squares and add event listeners back for 2pl game
    for (let i = 0; i < squares.length; i++) {
        squares[i].setAttribute('class', 'square')
    }
    addSquareListeners(playXOComp)
}

//pick random square that hasn't already been picked for computer player
const chooseRandomSq = () => {
    let i = Math.floor(Math.random() * 9)
    if (trackSquaresX.includes(allSquares[i]) || trackSquaresO.includes(allSquares[i])) {
        return chooseRandomSq()
    } 
    else {
        return allSquares[i]
    }
}

//check win for player vs. computer mode
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
    //added call for computer to play here, because otherwise the other function would be waiting on a click
    else if (trackPlays[trackPlays.length-1] === "x") {
        setTimeout(playCompO, 2000)
    }
    else {
        messageBoard.textContent = "TURKEY, it's your turn"
    }
}

//code for computer to play
const playCompO = () => {
        //runs random square function, finds that square and adds image to it
        let sqNum = chooseRandomSq()
        document.getElementById(sqNum).classList.add('oImage')
        
        trackSquaresO.push(sqNum)
        trackPlays.push('o')

        document.getElementById(sqNum).removeEventListener('click', playXOComp)
        didSomeoneWinComp()
}


const playXOComp = e => {
    //reveal play again button and add event listener
    playAgainButton.style.display = "block"
    playAgainButton.addEventListener('click', nextGameComp)

    //if first turn or last player played "o", then it's the player's turn and their click should execute the x (turkey) image
    if (trackPlays.length === 0 || trackPlays[trackPlays.length-1] === "o") {
        e.target.classList.add('xImage')
        trackPlays.push('x')
        trackSquaresX.push(e.target.id)

        messageBoard.textContent = "Player PIE is thinking..."
    }
    
    //remove event listener
    e.target.removeEventListener('click', playXOComp)

    //check win condition, if no win or draw sets computer play in motion
    didSomeoneWinComp()
}

// start game for Computer game
const startCompGame = () => {
    //reset all trackers and counters
    trackPlays = []
    trackSquaresX = []
    trackSquaresO = []
    xCounter = 0
    oCounter = 0
    gameCounter = 0
    
    //add event listeners to trigger the computer mode play function
    addSquareListeners(playXOComp)

    //Player 1 message
    messageBoard.textContent = "TURKEY, it's your turn"

    //change start Pl vs. comp button to "start over", remove event listener to start game and add event listener to start game over when clicked
    startCompButton.textContent = "Start Over"
    startCompButton.removeEventListener('click', startCompGame)
    startCompButton.addEventListener('click', startOver)
    
    //hide start 2PL game button
    startButton.style.display = "none"

    //reveal the scoreboard and start at 0 for each player score and games played tracker
    playerScoreX.textContent = 0;
    playerScoreO.textContent = 0;
    gamesPlayed.textContent = 0;
    scoreBoard.style.display = "block"
}


document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', startGame)
    startCompButton.addEventListener('click', startCompGame)
})