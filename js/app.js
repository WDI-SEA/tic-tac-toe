var count = 1
var currentPlayer = 'player1'
var currentSelection = ''
var gameOver = false 
var playedSquares = []
var moveInvalid = false

//square refs
// var l1 = document.getElementById('l1')
// var l2 = document.getElementById('l2')
// var l3 = document.getElementById('l3')
// var m1 = document.getElementById('m1')
// var m2 = document.getElementById('m2')
// var m3 = document.getElementById('m3')
// var r1 = document.getElementById('r1')
// var r2 = document.getElementById('r2')
// var r3 = document.getElementById('r3')
//event listeners
document.getElementById('l1').addEventListener('click', play);
document.getElementById('l2').addEventListener('click', play);
document.getElementById('l3').addEventListener('click', play);
document.getElementById('m1').addEventListener('click', play);
document.getElementById('m2').addEventListener('click', play);
document.getElementById('m3').addEventListener('click', play);
document.getElementById('r1').addEventListener('click', play);
document.getElementById('r2').addEventListener('click', play);
document.getElementById('r3').addEventListener('click', play);


//create mark function
function play() {
    currentSelection = this.id;
    moveValidator()
    if (moveInvalid !== true) {
        playedSquares.push(currentSelection)
        if (currentPlayer == 'player1') {
            document.getElementById(currentSelection).style.backgroundColor = stats[0].playerColor
            stats[0].moveCount += 1
            // console.log('move count: ' + stats[0].moveCount)
            stats[0].moves.push(currentSelection)
            // console.log('player moves: ' + stats[0].moves)
            //check for win
    }
    else {
        currentPlayer == 'player2';
        document.getElementById(currentSelection).style.backgroundColor = stats[1].playerColor
        stats[1].moveCount += 1
        // console.log('move count: ' + stats[1].moveCount)
        stats[1].moves.push(currentSelection)
        // console.log('player moves: ' + stats[1].moves)
    }
    // console.log('--->current player: ',currentPlayer)
    // console.log('---> current selection: ' + currentSelection)
    // console.log('--->count: ' + count)
    // console.log('--->played squares: ' + playedSquares)
    winChecker()
    count++
    changePlayer() 
    } 
    
}

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

function moveValidator(){
    if (playedSquares.indexOf(currentSelection) !== -1) {
        alert('square already in play - please try another move')
        moveInvalid = true;
        console.log(count)
        return;
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
