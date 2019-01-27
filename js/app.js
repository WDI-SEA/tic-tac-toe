
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

var gameboard = {
    zero: false,
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false
};

var playerOne = [];
var playerTwo = [];
var myTurn = 1;
gameOver = false;




document.addEventListener("DOMContentLoaded",function(){
    for ( var space in gameboard){
        document.getElementById(space).addEventListener('click', markBox)
        document.getElementById("button").addEventListener('click', reset)
       
        var spaceMarked = document.getElementById( space );
            console.log(spaceMarked);
        var classes = spaceMarked.className.split(" ");
            // console.log(classes);
        

            //staring win logic
        if (classes.indexOf('row1') > -1) {
                row1x = row1x + 1;
                console.log( "row1x score: " + row1x );
            }

        
    }});
    
    var markBox = function(){ 
        
    if ( myTurn == 1 ){
        document.getElementById(this.id).textContent = "X";
        myTurn = 0;
        playerOne.push(this.id);
        console.log(playerOne);
        document.getElementById("turns").textContent = "Player O's turn";
        
        
    } else {
        document.getElementById(this.id).textContent = "O";    
        myTurn = 1;
        playerTwo.push(this.id);
        console.log(playerTwo);
        document.getElementById("turns").textContent = "Player X's turn";
        
    }    
}

var reset = function(){
        location.reload();
};
