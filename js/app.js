gameOver = false;
userVsUser = true;
userTurn = 0;
xClicks = 0;
oClicks = 0;
xWins = 0;
oWins = 0;
var max = 9;
var rand = Math.floor(Math.random() * max ).toString();
var xWon = false;
var oWon = false;
var timeWaited = false;

var tilesFilled = {
    '0': false,
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false
};

var xTiles = [];
var oTiles = [];

var row1x = 0;
var row2x = 0;
var row3x = 0;
var col1x = 0;
var col2x = 0;
var col3x = 0;
var diag1x = 0;
var diag2x = 0;
var row1o = 0;
var row2o = 0;
var row3o = 0;
var col1o = 0;
var col2o = 0;
var col3o = 0;
var diag1o = 0;
var diag2o = 0;

// endGame function
var endGame = function () {
    console.log('in the endGame function', xClicks, oClicks );
    if (gameOver) {
        if (xClicks + oClicks === 9 && !oWon && !xWon ) {
            console.log("cat's game");
            document.getElementById('winner').textContent = "try again?";
            document.getElementById('turn').textContent = "meow";
        } else if ( xWon )  {
            console.log("x won");
            document.getElementById('winner').textContent = "x wins";
            document.getElementById('turn').textContent = "congratulations";
            xWins = xWins + 1;
            document.getElementById('xScore').textContent = xWins ;
        } else if ( oWon ) {
            console.log("o won");
            document.getElementById('winner').textContent = "o wins";
            document.getElementById('turn').textContent = "congratulations";
            oWins = oWins + 1;
            document.getElementById('oScore').textContent = oWins ;
        }
        document.getElementById('turn').textContent = "game ended";
    }
}

var checkWin = function() {
    if ( userTurn % 2 === 0 ) {
    // checking if total number of plays can produce possible win scenario
    // if ( xTiles.length + oTiles.length >= 5 ) {
        // for each value (which will be used as a key) in xTiles
        for ( var value of xTiles ) {
            // getting the tile from HTML
            var tileSelectedHTML = document.getElementById( value );
            // extracting the classes from that tile and storing them in array called classes
            //  it does this for each tile in xTile (ie each tile clicked)
            var classes = tileSelectedHTML.className.split(" ");
            // console.log( "the classes length is " + classes.length );
                // if class has row 1 (ie indexOf > -1), then add to var row1
                if (classes.indexOf('row1') > -1) {
                    row1x = row1x + 1;
                    // console.log( "row1x score: " + row1x );
                }
                if ( classes.indexOf('row2') > -1) {
                    row2x = row2x + 1;
                    // console.log( "row2x score: " + row2x );
                }
                if ( classes.indexOf('row3') > -1) {
                    row3x = row3x + 1;
                    // console.log( "rowx3 score: " + row3x );
                }
                if ( classes.indexOf('col1') > -1) {
                    col1x = col1x + 1;
                    // console.log( "col1x score: " + col1x );
                }
                if ( classes.indexOf('col2') > -1) {
                    col2x = col2x + 1;
                    // console.log( "col2x score: " + col2x );
                }
                if ( classes.indexOf('col3') > -1) {
                    col3x = col3x + 1;
                    // console.log( "col3x score: " + col3x );
                }
                if ( classes.indexOf('diag1') > -1) {
                    diag1x = diag1x + 1;
                    // console.log( "diag1x score: " + diag1x );
                }
                if ( classes.indexOf('diag2') > -1) {
                    diag2x = diag2x + 1;
                    // console.log( "diag2x score: " + diag2x );
                }
                if ( row1x>2 || row2x>2 || row3x>2 || col1x>2 || col2x>2 || col3x>2 || diag1x>2 || diag2x>2 ) {
                    console.log("x you won");
                    xWon = true;
                    gameOver = true;
                    endGame(); 
                }
        }
    } else if ( userTurn % 2 !== 0 ) {
        for ( var value of oTiles ) {
            var tileSelectedHTML = document.getElementById( value );
            var classes = tileSelectedHTML.className.split(" ");
                if (classes.indexOf('row1') > -1) {
                    row1o = row1o + 1;
                    // console.log( "row1o score: " + row1o );
                }
                if ( classes.indexOf('row2') > -1) {
                    row2o = row2o + 1;
                    // console.log( "row2o score: " + row2o );
                }
                if ( classes.indexOf('row3') > -1) {
                    row3o = row3o + 1;
                    // console.log( "row3o score: " + row3o );
                }
                if ( classes.indexOf('col1') > -1) {
                    col1o = col1o + 1;
                    // console.log( "col1o score: " + col1o );
                }
                if ( classes.indexOf('col2') > -1) {
                    col2o = col2o + 1;
                    // console.log( "col2o score: " + col2o );
                }
                if ( classes.indexOf('col3') > -1) {
                    col3o = col3o + 1;
                    // console.log( "col3o score: " + col3o );
                }
                if ( classes.indexOf('diag1') > -1) {
                    diag1o = diag1o + 1;
                    // console.log( "diag1o score: " + diag1o );
                }
                if ( classes.indexOf('diag2') > -1) {
                    diag2o = diag2o + 1;
                    // console.log( "diag2o score: " + diag2o );
                }
                if ( row1o>2 || row2o>2 || row3o>2 || col1o>2 || col2o>2 || col3o>2 || diag1o>2 || diag2o>2 ) {
                    console.log("o you won");
                    gameOver = true;
                    oWon = true;
                    endGame(); 
                }
        }
    }    
}

var playUser = function() {
    document.getElementById('playUser').style.backgroundColor = 'rgba( 0, 255 , 65, 0.7 )' ;
    document.getElementById('playComputer').style.backgroundColor = 'rgba(235, 238, 236, 0.158)' ;
    reset();
    userVsUser = true;
}

var initiateComputer = function() {
    document.getElementById('playUser').style.backgroundColor = 'rgba(235, 238, 236, 0.158)' ;
    document.getElementById('playComputer').style.backgroundColor = 'rgba( 0, 255 , 65, 0.7 )' ;
    reset();
    userVsUser = false;
    rand = Math.floor(Math.random() * max ).toString();
}

// pick an empty square at random
// assumes there is at least one empty square remaining. 
var randomMove = function() {
    var square = Math.floor(Math.random() * max ).toString();
    while ( tilesFilled[ square ] === true && ( xClicks + oClicks ) < 9) {
        square = ( ( square + 1 ) % 9 );
    }
    return square;
}

var pendingComputerMove = false;

var playComputer = function() {
    rand = randomMove();

    console.log( 'rand number string is ', rand );
    document.getElementById( rand ).textContent = "O"; 
    console.log( "o picked: ", rand );
    tilesFilled[ rand ] = true;
    var tilesFilledKeys = Object.keys( tilesFilled )
    oTiles.pop();    
    oTiles.push( rand );
    oClicks = oClicks + 1;
    checkWin();
    userTurn = userTurn + 1;
        if ( xClicks + oClicks === 9) {
        gameOver = true;
        endGame();
        }
    document.getElementById('turn').textContent = "x's turn";
    pendingComputerMove = false;
}

function delay( delayTime ) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while( curDate - date < delayTime);
}

var fillTile = function() {
    if (pendingComputerMove) {
        document.getElementById('turn').textContent = "it is o's turn";
        return;
    }
    //check if this tile hasnt been filled && if game is not over, continue through if
    if (!tilesFilled[this.id] && !gameOver && userVsUser === true ) {
        if ( userTurn % 2 === 0 ) {
            document.getElementById('turn').textContent = "o's turn";
                // if userTurn is even, fill with x
                // changes the text of tile to x
                document.getElementById( this.id ).textContent = "X"; 
                console.log( this.id );
                // updates tile clicked in tilesFilled to have bool = true
                tilesFilled[ this.id ] = true;
                // want to move tilesFilled into xTiles, makes array tilesFilledKeys
                // which just has keys of tilesFilled. then pushes the key of tile selected
                // into array called xTiles
                var tilesFilledKeys = Object.keys( tilesFilled )
                    // console.log ( tilesFilledKeys );
                xTiles.pop();    
                xTiles.push( this.id );
                xClicks = xClicks + 1;
                checkWin();
                userTurn = userTurn + 1;
                if ( xClicks + oClicks === 9) {
                    gameOver = true;
                    endGame();
                }
        } else {
            document.getElementById('turn').textContent = "x's turn";
                document.getElementById( this.id ).textContent = "O"; 
                console.log( this.id );
                tilesFilled[ this.id ] = true;
                var tilesFilledKeys = Object.keys( tilesFilled )
                oTiles.pop();    
                oTiles.push( this.id );
                oClicks = oClicks + 1;
                checkWin();
                userTurn = userTurn + 1;
                if ( xClicks + oClicks === 9) {
                    gameOver = true;
                    endGame();
                    }
        }
    }

    console.log( 'in AI mode') 
    if (tilesFilled[this.id] && userVsUser === false) {
        document.getElementById('turn').textContent = "tile already selected";
        return;
    }

    if ( userVsUser === false && userTurn % 2 === 0) {
        document.getElementById( this.id ).textContent = "X";
        console.log( this.id );
        tilesFilled[ this.id ] = true;
        var tilesFilledKeys = Object.keys( tilesFilled )
        xTiles.pop();    
        xTiles.push( this.id );
        xClicks = xClicks + 1;
        checkWin();
        userTurn = userTurn + 1;
            if ( xClicks + oClicks === 9) {
                gameOver = true;
                endGame();
            }
    }
    
    // If it is the computer's turn, initiate its move after a timeout
    if ( userVsUser === false && userTurn % 2 !== 0 && !gameOver) {
        document.getElementById('turn').textContent = "o's turn";
        pendingComputerMove = true;
        setTimeout(playComputer, 1000); 
    }
}

var reset = function() {
    gameOver = false;
    userTurn = 0;
    xClicks = 0;
    oClicks = 0;
    xWon = false;
    oWon = false;
    oTiles.length = 0;
    xTiles.length = 0;
    row1x = 0; row2x = 0; row3x = 0; col1x = 0; col2x = 0; col3x = 0; diag1x = 0; diag2x = 0;
    row1o = 0; row2o = 0; row3o = 0; col1o = 0; col2o = 0; col3o = 0; diag1o = 0; diag2o = 0;

    for(var i in tilesFilled) tilesFilled[i] = false;

    document.getElementById('winner').textContent = '';
    document.getElementById('turn').textContent = "x starts";

    var allTiles = document.querySelectorAll('.tile');
    // console.log( "allTiles is ", allTiles )
    for (var i = 0; i < allTiles.length; i++ )
        allTiles[i].textContent = '';
}

// waiting for the DOM to fully load, then telling every tile on the page to wait for a click
// then once the click happens, it will run the funciton fillTile
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded!");
    document.getElementById('turn').textContent = "x starts";
    for ( var number in tilesFilled ) {
        document.getElementById( number ).addEventListener( 'click', fillTile )
    }
    document.getElementById('reset').addEventListener( 'click', reset );
    document.getElementById('playUser').addEventListener( 'click', playUser )
    document.getElementById('playComputer').addEventListener( 'click', initiateComputer )
});
