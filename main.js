/*
Current Issues:
- Clear button does not clear divs
- The add color to buttons function seems to only add the last class to the divs clicked,
looks like a possible scope issue.
- buttons are able to be toggled between X and O after being clicked.

Awesome positive - I was able to reduce my code for each button to one function.
I did not see the GA repo until I was already 4 hours into one that I created, so this one
picks up in the middle. Original repo is at: https://github.com/pacalabre/tic_tac_toe
*/


var counter = true;
var buttons = [];
var buttonText = [];
var buttonClicked = [];
var colors = [];

//counter to toggle turn
  function toggleTurn() {
    if (counter === true) {
      counter = false;
    } else if ( counter === false) {
      counter = true;
    }
  }

//set all indexes in var buttonClicked to false to start game
for(var i = 1; i <= 9; i++) {
  buttonClicked.push(false);
}

//store id's position1 - position9  in var 'buttons'
for(var i = 1; i <= 9; i++) {
  buttons.push('position'+i);
}

// store id's pos1Text - pos9Text in var 'buttonText'
for(var i = 1; i <= 9; i++) {
  buttonText.push('pos'+i+'Text');
}

for(var i = 1; i <= 9; i++) {
  colors.push('color'+i);
}

console.log(colors);

//add click functionality to each button
for (var i = 0; i < buttons.length; i++) {
    var gameButtons = buttons[i];
    var displayText = buttonText[i];
    var buttonWasClicked = buttonClicked[i];
    document.getElementById(gameButtons).addEventListener("click", function(event){
    if (counter === true && buttonWasClicked === false ) {
    event.target.innerHTML="X";
    buttonClicked[i] = true;
    } else if (counter === false && buttonWasClicked === false) {
    event.target.innerHTML="O";
    buttonClicked[i] = true;
    }
    toggleTurn();
    //buttonWasClicked = true;
  })
}

//add color to buttons
for (var i = 0; i < buttons.length; i++) {
  var gameButtons = buttons[i];
  var color1 = colors[5];
  var color2 = colors[8];
  document.getElementById(gameButtons).addEventListener("click", function(event){
    if (counter === true ) {
        event.target.classList.add(color1);
        } else if (counter === false) {
        event.target.classList.add(color2);
        }
    })
}

//   console.log(colorToButton);
//   document.getElementById(gameButtons).addEventListener("click", function(event){
//     event.target.classList.add(colorToButton);
//     console.log(gameButtons);
//   })
//   console.log(gameButtons);
// }

//Clear button
document.getElementById('clear').addEventListener("click", function(event){
var allDivs = document.querySelectorAll("div");
allDivs.innerHTML= '';
})

//console.log(allDivs);
