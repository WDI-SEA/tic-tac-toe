var count = 1
var currentPlayer = 'player1'
var currentSelection = ''
var gameOver = false 
var playedSquares = []
var moveInvalid = false


//event listeners
document.getElementById('l1').addEventListener('click', startGame);
document.getElementById('l2').addEventListener('click', startGame);
document.getElementById('l3').addEventListener('click', startGame);
document.getElementById('m1').addEventListener('click', startGame);
document.getElementById('m2').addEventListener('click', startGame);
document.getElementById('m3').addEventListener('click', startGame);
document.getElementById('r1').addEventListener('click', startGame);
document.getElementById('r2').addEventListener('click', startGame);
document.getElementById('r3').addEventListener('click', startGame);

//scoreboard
var stats = [
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

//initiate game
function startGame() {
    currentSelection = this.id;
    moveValidator()
}

function play() {
    if (moveInvalid == false) {
        playedSquares.push(currentSelection)
        if (currentPlayer == 'player1') {
            document.getElementById(currentSelection).style.backgroundColor = stats[0].playerColor
            stats[0].moveCount += 1
            stats[0].moves.push(currentSelection)
            winChecker()
            count++
            changePlayer() 
        }
        else {
            currentPlayer == 'player2';
            document.getElementById(currentSelection).style.backgroundColor = stats[1].playerColor
            stats[1].moveCount += 1
            stats[1].moves.push(currentSelection)
            winChecker()
            count++
            changePlayer() 
        }
    
    }
}

function moveValidator(){
    console.log('before mistake: ' + count)
    if (playedSquares.indexOf(currentSelection) !== -1){
        moveInvalid = false
        play()
    }
    else  {
        console.log('played squares: ' + playedSquares)
        moveInvalid = true
        alert('square already in play - please try another move')
        console.log('after mistake: ' + count)
        return;
    }
}

function changePlayer() {
    if (gameOver == true) {
        document.getElementById('displayBox').textContent = currentPlayer + ' is the winner!!'
        return;
    }
    if (count % 2 == 1) {
        currentPlayer = 'player1'
        document.getElementById('displayBox').textContent = stats[0].displayBox
    }
    if (count % 2 == 0) {
        currentPlayer = 'player2'
        document.getElementById('displayBox').textContent = stats[1].displayBox
    }
}



function winChecker() {
    var crossedWin1 = ['l1', 'm2', 'r3'].sort()
    var crossedWin2 = ['l3', 'm2', 'r1'].sort()
    if (currentPlayer == 'player1' && stats[0].moveCount > 2 ) {
        if (stats[0].moves[0][1] == stats[0].moves[1][1] && stats[0].moves[1][1] == stats[0].moves[2][1]) {
            alert('winner')
            return
        }
        if (stats[0].moves[0][0] == stats[0].moves[1][0] && stats[0].moves[1][0] == stats[0].moves[2][0]) {
            alert('winner')
            return
        }
        if (stats[0].moves[0][0] == stats[0].moves[1][0] && stats[0].moves[1][0] == stats[0].moves[2][0]) {
            alert('winner')
            return
        }
        for (var i = 0; i < stats[0].moves.length; i++) {
            if (crossedWin1.indexOf(stats[0].moves[i]) !== -1 || crossedWin2.indexOf(stats[0].moves[i] !== -1)) {
                alert('winner')
                gameOver = true
                break;
            }
        }

    }
    //insert player 2 winChecker here
    

}
