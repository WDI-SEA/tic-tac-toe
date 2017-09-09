// declare all the variables
var cell0 = document.getElementById('cell0');
var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');

//game state
var player = 'X'

var row1 = [cell0, cell1, cell2];
var row2 = [cell3, cell4, cell5];
var row3 = [cell6, cell7, cell8];
var col1 = [cell0,cell3, cell6];
var col2 = [cell1,cell4, cell7];
var col3 = [cell2,cell5, cell8];
var diag1 = [cell0, cell4, cell8];
var diag2 = [cell2, cell4, cell6];

var gBoard = [row1, row2, row3];//this is set by var rows1-3 above
var totalMoves = 0;

//clickHandlers

gBoard.forEach(function (row){
    row.forEach(function(cell){
       //get click event working on each cell
       cell.addEventListener('click', function(){
        //see if cell is clicked/ empty
            if (cell.className !== "") { //dont do anything if the cell is taken - if not empty
                return;
            }

            //mark the player cell
            cell.className = player;
            cell.textContent = player;

            //check to see if its a winning move
            if (didWin(cell.id)) {
                console.log("Youve Won" + player); 
            }else { 
              //if not, is it a tie?
              if (totalMoves === 9){
                console.log("You both lose!");
              } 
              //switch player
              if (player === "X") {
                player = "O";
              }else {
                player = "X";
              }
            } 
 
        })
    });
});




// var cells = document.getElementByClassName('gameBoard'); 
// var whoseTurn = 'X';

// function changeTurn() {
//     if (whoseTurn == 'X') {
//         whoseTurn = 'O';
//     } else {
//         whoseTurn = 'X'; 
//     }
// }

// var isTaken;

// function isTaken() {
//     if (whoseTurn == true) {
//         return;
//     }
// }


//make a click event for individual element
//assign individual element with an 'X' or 'O'
//BUUUUT with a condition where only "if" an element is not empty
//we need to alternate every turn

// K.I.S.S!!! Keep It Simple Stupid!!!

// cells.addEventListener('click', function() {
//     console.log('this one will target all cells!');
//     cell1.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });

// cell0.addEventListener('click', function() {
//     console.log('clicked cell0');
//     if (changeTurn() == true) {
//         isTaken();
//     }
//     cell0.textContent = whoseTurn;
// });
// cell1.addEventListener('click', function() {
//     console.log('clicked cell1');
//     cell1.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell2.addEventListener('click', function() {
//     console.log('clicked cell2');
//     cell2.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell3.addEventListener('click', function() {
//     console.log('clicked cell3');
//     cell3.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell4.addEventListener('click', function() {
//     console.log('clicked cell4');
//     cell4.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell5.addEventListener('click', function() {
//     console.log('clicked cell5');
//     cell5.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell6.addEventListener('click', function() {
//     console.log('clicked cell6');
//     cell6.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell7.addEventListener('click', function() {
//     console.log('clicked cell7');
//     cell7.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// cell8.addEventListener('click', function() {
//     console.log('clicked cell8');
//     cell8.textContent = whoseTurn;
//     changeTurn();
//     if (changeTurn() == true) {
//         isTaken();
//     }
// });
// need to have the cells not click once it has been clicked

// function playerClick()


// var square = document.getElementById('').children; <----.children is a good 
                                                            //way to target all the cells without referancing them by ids
// for (let i = 0; i < square.length; i++)
//     cell8.addEventListener('click', playerClick)