
var counter = true;
var buttons = [];
var buttonText = [];

//counter to toggle turn
  function toggleTurn() {
    if (counter === true) {
      counter = false;
    } else if ( counter === false) {
      counter = true;
    }
  }

//store id's position1 - position9  in var 'buttons'
for(var i = 1; i <= 9; i++) {
  buttons.push('position'+i);
}

// store id's pos1Text - pos9Text in var 'buttonText'
for(var i = 1; i <= 9; i++) {
  buttonText.push('pos'+i+'Text');
}

//add click functionality to each button
for (var i = 0; i < buttons.length; i++) {
    var gameButtons = buttons[i];
    var displayText = buttonText[i];
    document.getElementById(gameButtons).addEventListener("click", function(event){
    if (counter === true) {
    event.target.innerHTML="X";
    } else {
    event.target.innerHTML="O";
    }
    toggleTurn();
  })
}

//Clear button
document.getElementById('clear').addEventListener("click", function(){
  return buttons = '';
})
