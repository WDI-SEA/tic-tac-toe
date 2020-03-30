//global variables
var count = 1
var currentPlayer = 'player1'
var currentSelection = ''
var gameOver = false 
var playedSquares = []
//event listeners
document.getElementById('1').addEventListener('click', mark);
document.getElementById('2').addEventListener('click', mark);
document.getElementById('3').addEventListener('click', mark);
document.getElementById('4').addEventListener('click', mark);
document.getElementById('5').addEventListener('click', mark);
document.getElementById('6').addEventListener('click', mark);
document.getElementById('7').addEventListener('click', mark);
document.getElementById('8').addEventListener('click', mark);
document.getElementById('9').addEventListener('click', mark);
document.getElementById('resetBtn').addEventListener('click', reset);

var winCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']]

//scoreboard
var scoreBoard = [
{
    moveCount: 0,
    moves: []
},
{
    moveCount: 0, 
    moves: []
}
]

//start game function
function mark () {
    currentSelection = this.id;
//move validator
    if (playedSquares.indexOf(currentSelection) == -1){
        playedSquares.push(currentSelection)
        play()
    }
    else {
        alert('square already in play - please try another move')
    }
}

function play() {
    if (currentPlayer == 'player1') {
        document.getElementById(currentSelection).style.backgroundColor = 'green'
        scoreBoard[0].moveCount += 1
        scoreBoard[0].moves.push(currentSelection)
        console.log(currentSelection)
        console.log(scoreBoard)
        winChecker()
        if (gameOver == false){
            count++
            changePlayer()
        }
    }
    else {
        currentPlayer == 'player2';
        document.getElementById(currentSelection).style.backgroundColor = 'red'
        scoreBoard[1].moveCount += 1
        scoreBoard[1].moves.push(currentSelection)
        winChecker()
        if (gameOver == false){
            count++
            changePlayer()
        }
    }
}

function winChecker() {
    for(var i = 0; i < winCombos.length; i++) { // iterating through all wins
        if (currentPlayer == 'player1'
            && scoreBoard[0].moveCount > 2
            && scoreBoard[0].moves.indexOf(winCombos[i][0]) !== -1
            && scoreBoard[0].moves.indexOf(winCombos[i][1]) !== -1
            && scoreBoard[0].moves.indexOf(winCombos[i][2]) !== -1){
            document.getElementById('displayBox').textContent = 'Player 1 wins'
            console.log('player1 wins')
            gameOver = true
        }
        else {
            if (currentPlayer == 'player2'
            && scoreBoard[1].moveCount > 2
            && scoreBoard[1].moves.indexOf(winCombos[i][0]) !== -1
            && scoreBoard[1].moves.indexOf(winCombos[i][1]) !== -1
            && scoreBoard[1].moves.indexOf(winCombos[i][2]) !== -1){
                document.getElementById('displayBox').textContent = 'Player 2 wins'
                console.log('player2 wins')
                gameOver = true
            }
        }
        // stops here
    }
    if (gameOver == false && playedSquares.length == 9){
        console.log('tie game')
        document.getElementById('displayBox').textContent = 'T I E  G A M E'
        gameOver = true;

    }
}

//change current player & change display box
function changePlayer(){
    if (count % 2 == 1) {
        currentPlayer = 'player1'
        document.getElementById('displayBox').textContent = 'Player 1 Go!'
    }
    else{
        currentPlayer = 'player2'
        document.getElementById('displayBox').textContent = 'Player 2 Go!'
    }
}

//reset function
function reset() {
    scoreBoard[0].movesCount = 0
    scoreBoard[0].moves = []
    scoreBoard[1].movesCount = 0
    scoreBoard[1].moves = []
    var count = 1
    var currentPlayer = 'player1'
    var currentSelection = ''
    var gameOver = false 
    var playedSquares = []
    document.getElementById('displayBox').textContent = 'Player 1 Go'
    var squares = document.getElementsByClassName('squares')
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'lightgray'
    }
    
}