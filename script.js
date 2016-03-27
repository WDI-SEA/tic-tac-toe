// Objective: Build a tic tac toe game in HTML and pure javascript.

// This week we have been learning about writing functions, working with loops, and writing conditionals. 
// We also learned about how parts of HTML work and function.

// Today we will be making a Tic Tac Toe game using all of this.

// Minimum Requirements

// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use javascript to add a class to each cell to display separate colors.
// A cell should not be able to be replayed once marked.
// Add a reset button that will clear the contents of the board.
// Have Fun - The best way to learn is by playing with code. Let creativity guide you and try some experiments with JS and CSS and see what you can do.

// How to get started

// Construct a index.html to be your starting point on this project. Add your necessary html tags, including script and link tags 
// to link to your javascript and css respecively.
// Before you even start working with javascript, construct the gameboard. The gameboard page should include the 3x3 grid (of divs), 
// and at minimum a reset button. Using id and class on clickable elements will help you wire this up in javascript afterwards.
// Javascript portion will be next
// Locate the element first to use it within your app. Think about using getElementById, getElementsByClassName, querySelector, or 
// querySelectorAll to locate your target elements. Try this in your console to make sure your selection works.
// After finding the elements, start writing logic to use an event listener for click against those elements.
// You will also need a variable to keep track of moves. As this will be used to indicate whether or not to draw an X or an O



var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');



var grid = [box1, box2, box3,
                box4, box5, box6,
                box7, box8, box9];




var result = ['', '', '',
              '', '', '',
              '', '', ''
];

var board = document.querySelectorAll("div.square");

function countItemsTruthy(result) {
  var count = 0;
  for (i = 0; result.length >= i; i++) {
    if (result[i] === 'X' || result[i] === 'O') {
      count++;
    }
  }
  return count;
  console.log(count);
};



function whoseTurn(countOutput) {
  var countOutput = countItemsTruthy(result);
  if (countOutput % 2 === 0) {
    return 'X';
  } else {
    return 'O';
  }
}

// function someoneWon(){
//   if ((result[0] === result[1] === result[2]) || 
//       (result[3] === result[4] === result[5]) ||
//       (result[6] === result[7] === result[8]) ||
//       (result[0] === result[3] === result[6]) ||
//       (result[1] === result[4] === result[7]) ||
//       (result[2] === result[5] === result[8]) ||
//       (result[0] === result[4] === result[8]) ||
//       (result[2] === result[4] === result[6])){
//     console.log("We have a winner!")
//     return true;
//   }
// }

function makeCellColorful(i) {
  if (document.getElementsByClassName('square')[i].innerText == 'X'){
    board[i].className += ' blue-box';
    console.log(board[i].className);
  } else if (document.getElementsByClassName('square')[i].innerText == 'O'){
    board[i].className += ' red-box';
  } else {
    return null;
  }
}






var doTheThing = function(i){
  var currentBox = board[i];
  var currentResult = result[i];
  currentBox.addEventListener("click", function(event){
    if (currentBox.innerText == false){
    currentBox.innerText = whoseTurn(countItemsTruthy);
    makeCellColorful(i);
    result.splice(i, 1, currentBox.innerText);
    console.log(result);
    console.log("worked");
}
}
)};



  for (var i = 0; i < board.length; i++) {
    doTheThing(i);
   } 
    







// var board = document.querySelectorAll("div.square");
// console.log(board);
//   for (var i = 0; i < board.length; i++) {
    
//     board[i].addEventListener("click", function(event){
//     document.querySelectorAll("div.square")[i].textContent = whoseTurn(countItemsTruthy);
//     console.log(whoseTurn(countItemsTruthy));
//     console.log(board[i]);
//     if (document.querySelectorAll("div.square")[i].textContent == ""){
//     result.splice(i, 1, whoseTurn(countItemsTruthy));
//     console.log(result);
//     console.log("worked");


// }
// }

// )};




// box1.addEventListener('click', function(event){
//   if (box1.textContent == false){
//   box1.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box1), 1, box1.textContent);
//   console.log(result);
//   getWinner();
// } 
// });


// box2.addEventListener('click', function(event){
//   if (box2.textContent == false){
//   box2.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box2), 1, box2.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box3.addEventListener('click', function(event){
//   if (box3.textContent == false){
//   box3.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box3), 1, box3.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box4.addEventListener('click', function(event){
//   if (box4.textContent == false){
//   box4.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box4), 1, box4.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box5.addEventListener('click', function(event){
//   if (box5.textContent == false){
//   box5.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box5), 1, box5.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box6.addEventListener('click', function(event){
//   if (box6.textContent == false){
//   box6.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box6), 1, box6.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box7.addEventListener('click', function(event){
//   if (box7.textContent == false){
//   box7.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box7), 1, box7.textContent);
//   console.log(result);
//   getWinner();
// }
// });

// box8.addEventListener('click', function(event){
//   if (box8.textContent == false){
//   box8.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box8), 1, box8.textContent);
//   console.log(result);
//  getWinner();
// }
// });

// box9.addEventListener('click', function(event){
//   if (box9.textContent == false){
//   box9.textContent = whoseTurn(countItemsTruthy);
//   result.splice(grid.indexOf(box9), 1, box9.textContent);
//   console.log(result);
//   getWinner();
// }
// });




  









