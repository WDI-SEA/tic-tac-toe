console.log('Hello frontend');
var turnCount = 0


var gameBoard = {
    row1: [0, 0, 0],
    row2: [0, 0, 0],
    row3: [0, 0, 0],
    //row2[2], would be accessing row 2, the 1st index, which would be a 'o' 
}
//player one and player two assigned to X/Os
var playerOne = "X";
var playerTwo = "O";

 var initGame = function (){
    turnCount = 0;
    var cells = document.querySelectorAll(".cell")
    cells.forEach(function(cell){
        cell.addEventListener("click", clickTile);
    })
 }
var checkForWin = function(){
    console.log("checking for win");
}
var clickTile = function (e){
    if (!this.classList.contains("marked")){
        if (turnCount % 2 === 0){
            this.textContent = playerOne;
            this.classList.add("marked", playerOne);
        } else {
            this.textContent = playerTwo;  
            this.classList.add("marked", playerTwo);
        }
        checkForWin()
        turnCount++;

    }
}


// sameOutcome means three of the same symbol in each sqaure of a row
// var winInRow = function (row) { 
//     if ( row === [1,1,1] || row === [2,2,2]){
//         return true;       
//     }else{
//         return false;
//     }
// }
// var winInDia = function (diagonal) {
//     return winInDia ([row1[0], row2[1], row3[2]]);
// }

// var winInCol = function (column) {
//  return winInRow([row1[column], row2[column], row3[column]]);
// }

// for (var i= 0; i < imageArray.length; i++){
//     imageArray[i].addEventListener("click");
// }
//row1[1].addEventListener("click", blindClick(i));
//return function (){
//}
//}

initGame()
//for click motions on an array:

//var divNumber = document.getElementsByClassName("cell");

// players swithcing turns?
// var currentPlayer;
// if (turn % 2 === 0){
//     currentPlayer = playerOne;
// } else {
//     currentPlayer = PlayerTwo;
// }
// turns ++;
// console.log("clicked", this.id, currentPlayer);

// function turnClick(square){
//     var player;
//     if(turnCount % 2 === 1){
//         player = player 
//     }
// }
// */
/* for(var i = 0; i < imageArray.length; i++) {
    imageArray[i].addEventListener("click", blindClick(i));
}

function blindClick(i) {
   return function() {
       console.log("you clicked region number " + i);
   };
*/
