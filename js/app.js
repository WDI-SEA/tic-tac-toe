var squares = document.querySelectorAll('.square');
var resetButton = document.querySelector('#resetButton');
var toDo = function() {
  console.log('add click function to box');
};

var reset = function() {
  console.log('add reset function')
  //code to reset board
};

document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', toDo);
  }
  resetButton.addEventListener('click', reset);

});

//MY NOTES - TO DO
//Start game
//reset game
//determine winner
//come up with winning combos
//event listeners for clicks
//push img to clicked box
//make box unplayable after click
//check for win after each turn


//FROM CLASS
//add multiple classes to each win solution
//add a class for row 1, etc.
//add a class for column 1, etc.
//add a class for diagonal1, etc.
//gameboard with divs...can line up with inline-block

//FROM GITHUB
//click on different squares to make a move.
//Every click will alternate between  an X and O
//when clicked, add class to box to display separate colors
//box can't be replayed once marked
//Add reset button that clears board contents
//Display message to show which turn is about to be played
//stop game and alert the winner - 3 in a row/diagonal
//Determine all winning combos & Check those combos after every move

//Bonuses
//Add a simple AI to support one player vs computer mode
//Note that randomly selecting a space would count as "simple"
