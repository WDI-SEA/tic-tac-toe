// Global Variables

var turn = 1;
var infoboxHandle = null;

var squares = {
    'one': 0,
    'two': 0,
    'three': 0,
    'four': 0,
    'five': 0,
    'six': 0,
    'seven': 0,
    'eight': 0,
    'nine': 0
}

var reset = function() {
    for (let square in squares) {
        //remove player tokens
        document.getElementById(square).classList.remove('snail');
        document.getElementById(square).classList.remove('shroom');
        
        // add unselected class back to squares if needed
        if (!document.getElementById(square).classList.contains('unselected')) {
            document.getElementById(square).classList.add('unselected');
        } 
    }

    //reset turn count
    turn = 1;
}

var checkWinCondition = function(square) {
    //check win conditions that correspond to classes included included in square
    var possibleWinConditions = [];

    square.classList.forEach( function(cls){
        if (cls !== 'square' && cls !== 'shroom' && cls !== 'snail') {
            possibleWinConditions.push(cls);
        }
    })

    possibleWinConditions.forEach( function(winCondition){
        // win check logic
        var squareValues = [];
        var squaresToCheck = []
    
        // console.log(winCondition);
    
        var elements = document.getElementsByClassName(winCondition)

        for (let element in elements){
            console.log(element);
        }

        // squaresToCheck.forEach( function(id) {
        //     squareValues.push(squares[id]);
        // })

        // console.log(squareValues.reduce( function(acc, sum){ acc + sum}));

    })
    
}

var checkPlayer = function(turn) {
    return turn % 2 ? 'shroom' : 'snail';
}


var playSquare = function() {
    // determine who is playing    
    var playerToken = checkPlayer(turn);
    // check to see if square is free
    if (this.classList.contains('unselected')){
        // swap empty square for token
        this.classList.replace('unselected', playerToken);
   
        // add value to square object for win check
        playerToken === 'snail' ? squares[this.id]+= 1 : squares[this.id] += 10;
        
        // check for win
        if (turn >= 5) {
            checkWinCondition(this);
        }
        
        // increment turn
        turn++
        
        //update message in infobox
        infoboxHandle.textContent = checkPlayer(turn) + "'s turn.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded')
    for(let square in squares ){
        document.getElementById(square).addEventListener('click', playSquare);
    }
    
    document.getElementById('reset').addEventListener('click', reset);  
    infoboxHandle = document.querySelector('#infobox h2');

})