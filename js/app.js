// Global Variables

var turn = 0;

var squares = {
    'sqr-0': 0,
    'sqr-1': 0,
    'sqr-2': 0,
    'sqr-3': 0,
    'sqr-4': 0,
    'sqr-5': 0,
    'sqr-6': 0,
    'sqr-7': 0,
    'sqr-8': 0
}

var reset = function() {
    for (let square in squares) {
        console.log(square);
        document.getElementById(square).classList.remove('snail');
        document.getElementById(square).classList.remove('shroom');
          if (!document.getElementById(square).classList.contains('unselected')) {
              document.getElementById(square).classList.add('unselected');
          } 
    }

    turn = 0;
}

var checkWinCondition = function() {
    //check win conditions that correspond to classes included included in square
}


var playSquare = function() {
    // determine who is playing    
    playerToken = turn % 2 ? 'shroom' : 'snail';
    // console.log(turn, playerToken)

    // swap empty square for token
    this.classList.replace('unselected', playerToken);

    // add value to square object for win check
    playerToken === 'snail' ? squares[this.id]+= 1 : squares[this.id] += 10;

    // check for win
    if (turn >= 5) {
        checkWinCondition();
    }
    turn++
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded')
    for(let square in squares ){
        document.getElementById(square).addEventListener('click', playSquare);
    }
    
    document.getElementById('reset').addEventListener('click', reset);  




})