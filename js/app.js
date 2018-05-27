// Global Variables

var turn = 1;
var infoBox = null;

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

var initGame = function() {
    infoBox.textContent = "Get ready to rumble... slowly.";

    // show player and open squares to clickability
    setTimeout(function () {
        // apply unselected to squares to open up clickability
        for (let square in squares) {
            document.getElementById(square).classList.add('unselected');
        }
        infoBox.textContent = "Shroom makes the first move!";
    }, 1500)
}

var reset = function() {
    for (let square in squares) {
        //remove player tokens
        document.getElementById(square).classList.remove('snail');
        document.getElementById(square).classList.remove('shroom');
    }
    //reset turn count
    turn = 1;

    initGame();
}

var endGame = function() {
    // disable clicking
    document.getElementsByClassName(square).classList.remove('unselected');
    
    // highlight class of winning squares
    document.getElementsByClassName(winCondition).classList.add('winning-combo');

    // update infobox
    infoBox.textContent = capitalizePlayer(playerToken) + "claims the forest!";

}


var checkWinCondition = function(square,playerToken) {
    //check win conditions that correspond to classes included included in square
    var possibleWinConditions = [];

    // filter doesn't work on classList -- strip out classes unrelated to condition
    square.classList.forEach( function(cls){
        if (cls !== 'square' && cls !== 'shroom' && cls !== 'snail') {
            possibleWinConditions.push(cls);
        }
    })

    // check each relevant win condition
    possibleWinConditions.forEach( function(winCondition){
        // win check logic
        var squareValues = [];
        // var squaresToCheck = []

        // grab html elements associated with the win condition
        var elements = document.getElementsByClassName(winCondition);
        
        // this is driving me crazy -- there has to be a way to just check if player token
        // class is contained in each of the elements in a given win class... but .every() 
        // can't be called on my classLists...

        var squaresToCheck = Array.from(elements);

        // for (square of squaresToCheck) {
        //     square.classList.contains(playerToken) ? console.log('win') : false; 
        // }

        console.log(squaresToCheck[0].classList);

        let values = []

        for (let square of squaresToCheck) {
            square.classList
        }
        
        
        
        // for (let i = 0; i < elements.length; i ++){
        //     console.log(elements[i].classList.contains('snail'));
        // }
        // squaresToCheck.forEach( function(id) {
        //     squareValues.push(squares[id]);
        // })

        // console.log(squareValues.reduce( function(acc, sum){ acc + sum}));

    })
    
}

var checkPlayer = function(turn) {
    return turn % 2 ? 'shroom' : 'snail';
}

var capitalizePlayer = function(token){
    var splitToken = token.split('');
    splitToken[0] = splitToken[0].toUpperCase();
    return splitToken.join('');
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
            checkWinCondition(this, playerToken);
        }
        
        // increment turn
        turn++
        
        //update message in infobox
        infoBox.textContent = capitalizePlayer(checkPlayer(turn)) + "'s turn.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded')
    for (let square in squares){
        document.getElementById(square).addEventListener('click', playSquare);
    }
    document.getElementById('reset').addEventListener('click', reset);  
    infoBox = document.querySelector('#infobox h2');

    
    initGame();
})