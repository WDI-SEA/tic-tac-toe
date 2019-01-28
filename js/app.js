var playerX = [];
var playerO = [];
var reset = function(){
        location.reload();
    };
var count = 0; 

winCombos = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"]
];
    
var gameboard = {
    1 : true,
    2 : true,
    3 : true,
    4 : true,
    5 : true,
    6 : true,
    7 : true,
    8 : true,
    9 : true
};
//reset button and click counter
document.getElementById("button").addEventListener('click', reset);
document.getElementById("tictactoe").addEventListener('click', function(){
    count+=1;
    if ( count === 9 && gameOn === true){
        document.getElementById("turns").textContent = "This game is a draw!";
        gameOn = false;
    }
      
})
//page loads and waits for input
var checkWin1 = function(){
    winCombos.forEach(function(combo) {

            if (
                playerX.includes(combo[0]) &&
                playerX.includes(combo[1]) &&
                playerX.includes(combo[2])
                ) {
              document.getElementById("turns").textContent = "Player X Wins!";
              gameOn = false;
                }
            });
        }
    var checkWin2 = function(){
        winCombos.forEach(function(combo) {
            if (
                playerO.includes(combo[0]) &&
                playerO.includes(combo[1]) &&
                playerO.includes(combo[2])
                ) {
                    document.getElementById("turns").textContent = "Player O Wins!";
                    gameOn = false;
                }
            });
        }
        //Toggles between players and fills with correct mark
        var markBox = function(){
            if ( gameOn === true && count % 2 !== 1 && document.getElementById(this.id).classList.contains("unmarked") ){
                //player x marks the box
                document.getElementById(this.id).textContent = "X";
                document.getElementById("turns").textContent = "Player O's turn";
                playerX.push(this.id);
                console.log(playerX);
                document.getElementById(this.id).classList.remove("unmarked");
                checkWin1();
            } 
            if ( gameOn === true && count % 2 === 1 && document.getElementById(this.id).classList.contains("unmarked")){      
                //player y marks the box
                document.getElementById(this.id).textContent = "O";    
                document.getElementById("turns").textContent = "Player X's turn";
                playerO.push(this.id);
                console.log(playerO);
                document.getElementById(this.id).classList.remove("unmarked");
                checkWin2();            
            } 
};
document.addEventListener("DOMContentLoaded",function(){
    for ( var space in gameboard){
        document.getElementById(space).addEventListener('click', markBox);
        gameOn = true;
        //win logic
    }
})
