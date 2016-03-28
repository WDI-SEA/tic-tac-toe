
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

for (var i = 0; i < buttons.length; i++) {
    var gameButtons = buttons[i];
    var displayText = buttonText[i];

    document.getElementById(gameButtons).addEventListener("click", function(event){
    if (counter === true) {
    //console.log(gameButtons);
    event.target.innerHTML="X";
    } else {
    event.target.innerHTML="O";
    //console.log(gameButtons);
    }
    toggleTurn();
  })
    console.log('gameButtons = '+gameButtons);
}

console.log(buttonText);




// for (var i = 1; i <= 9; i++) {
//   var placeX;
//   var placeO;
//   var element = 'pos'+i+'Text';
//   document.getElementById('position'+i).addEventListener("click", function(e){
//     if (counter === true) {
//     console.log(element);
//     placeX = e.target.element.innerHTML="X";
//     } else {
//     placeO = e.target.element.innerHTML="O";
//     }
//     toggleTurn();
//   })
//   console.log('element='+element);
//   console.log('placeX = ' + placeX + ' placeY = '+placeO);
// }

// //Position 2
// document.getElementById('position2').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posTwoText').innerHTML="X";
//   } else {
//   document.getElementById('posTwoText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 3
// document.getElementById('position3').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posThreeText').innerHTML="X";
//   } else {
//   document.getElementById('posThreeText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 4
// document.getElementById('position4').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posFourText').innerHTML="X";
//   } else {
//   document.getElementById('posFourText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 5
// document.getElementById('position5').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posFiveText').innerHTML="X";
//   } else {
//   document.getElementById('posFiveText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 6
// document.getElementById('position6').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posSixText').innerHTML="X";
//   } else {
//   document.getElementById('posSixText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 7
// document.getElementById('position7').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posSevenText').innerHTML="X";
//   } else {
//   document.getElementById('posSevenText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 8
// document.getElementById('position8').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posEightText').innerHTML="X";
//   } else {
//   document.getElementById('posEightText').innerHTML="O";
//   }
//   toggleTurn();
// })

// //Position 9
// document.getElementById('position9').addEventListener("click", function(){
//   if (counter === true) {
//   console.log(counter);
//   document.getElementById('posNineText').innerHTML="X";
//   } else {
//   document.getElementById('posNineText').innerHTML="O";
//   }
//   toggleTurn();
// })
