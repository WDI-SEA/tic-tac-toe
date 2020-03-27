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



//scoreboard
var scoreBoard = [
    {   playerColor: 'red',
    displayBox: 'Player 1 Go!',
    moveCount: 0,
    moves: []
},
{
    playerColor: 'green',
    displayBox: 'Player 2 Go!',
    moveCount: 0, 
    moves: []
}
]

//start game function
function mark () {
    console.log(this.id)
    currentSelection = this.id;
//move validator
    if (playedSquares.indexOf(currentSelection) == -1){
        play()
    }
    else {
        alert('square already in play - please try another move')
    }
}

function play() {
    if (currentPlayer == 'player1') {
        document.getElementById(currentSelection.toString()).style.backgroundColor = 'green'
        scoreBoard[0].moveCount += 1
        scoreBoard[0].moves.push(currentSelection)
        // winChecker()
        count++
        changePlayer() 
    }
    else {
        currentPlayer == 'player2';
        document.getElementById(currentSelection).style.backgroundColor = 'red'
        scoreBoard[1].moveCount += 1
        scoreBoard[1].moves.push(currentSelection)
        // winChecker()
        count++
        changePlayer() 
    }
}

function winChecker() {
    var winCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']
    ]
    for (var i = 0; i < winCombos.length; i++) {
        for (var j = 0; j < winCombos[i].length; j++) {
            if (currentPlayer = 'player1'
            && scoreBoard[0].stats.indexOf(winCombos[i][j]) !== -1
            && scoreBoard[0].stats.indexOf(winCombos[i][j]) !== -1
            && scoreBoard[0].stats.indexOf(winCombos[i][j]) !== -1) {
                console.log('player1 wins')
            }
        }
    }
}
    
function changePlayer() {
    if (gameOver == true) {
        document.getElementById('displayBox').textContent = currentPlayer + '-T I E  G A M E-'
        return;
    }
    if (count % 2 == 1) {
        currentPlayer = 'player1'
        document.getElementById('displayBox').textContent = scoreBoard[0].displayBox
    }
    if (count % 2 == 0) {
        currentPlayer = 'player2'
        document.getElementById('displayBox').textContent = scoreBoard[1].displayBox
    }
}