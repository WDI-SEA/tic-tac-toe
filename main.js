
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
//console.log(buttonClicked);
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
  })
}

//add color to buttons
for (var i = 0; i < buttons.length; i++) {
  var gameButtons = buttons[i];
  var colorToButton = colors[i];
  document.getElementById(gameButtons).addEventListener("click", function(event){
    event.target.classList.add(colorToButton);
  })
}

//Clear button
var allDivs = document.querySelectorAll("div");
//console.log(allDivs);
