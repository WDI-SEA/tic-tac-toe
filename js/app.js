var boxes = document.getElementsByClassName('box');
var winners = new Array();
var currentPlayer = 0;
var player1Selections = new Array();
var player2Selections = new Array();
// var turnText = document.querySelector(."playerTurn");
// var counter = 1;
// var winCounter = 0;
// var OMoves = [];
// var XMoves = [];



function reset(){
  // console.log('this worked');
  var boxSquares = document.querySelectorAll('.box');
  //empty images
  //addEventListenersBack
  for(var i = 0; i<boxSquares.length; i++){
    boxSquares[i].style.backgroundImage = 'none';
    boxSquares[i].addEventListener('click', boxClicked);
  }
  //make currentPlayer = 0;
  currentPlayer = 0;
}

var boxClicked = function(){
  console.log('fired');
  currentPlayer++;
  //this function fires when I click boxes
  //this referes to div I clicked
  //I'm changing the background image
  if(currentPlayer%2 ===1){
    ///add X class
    this.style.backgroundImage = 'url(img/theLetterX.png)';
  }else if (currentPlayer%2 ===0){
    ///Add O Class
    this.style.backgroundImage = 'url(img/theLetterO.png)';
  }
  this.removeEventListener('click', boxClicked);

  if(currentPlayer === 9){
    //Theres a draw
    draw();
  }

  ///every turn call checkWinner function Here VVVVVV


}

var draw = function(){
  document.getElementById("result").innerHTML = "There Was a Draw";
}

var checkWinner = function(){
  //every turn check to see if winning combination of divs has X or O id;
}

var generateBoxes = function(){
  console.log('generating boxes');
  for(var i = 0; i < boxes.length; i++){}
}


// branching order list; line 4 will finish before moving to line 5; large commmands at top; 'tree traversal'

var addBoxesEventListeners = function(){
  var boxSquares = document.querySelectorAll('.box');

  for(var i = 0; i < boxSquares.length; i++){
    boxSquares[i].addEventListener('click', boxClicked);
  }
}

function winOptions(){
  // winners.push([1, 2, 3]);
  // winners.push([4, 5, 6]);
  // winners.push([7, 8, 9]);
  // winners.push([1, 4, 7]);
  // winners.push([2, 5, 8]);
  // winners.push([3, 6, 9]);
  // winners.push([1, 5, 9]);
  // winners.push([3, 5, 7]);
}

document.addEventListener('DOMContentLoaded', function() {
  //Add Event Listeners
  document.getElementById('reset').addEventListener('click', reset);
  addBoxesEventListeners();
});




// win conditions
// x wins function
// o wins function
// 
// 