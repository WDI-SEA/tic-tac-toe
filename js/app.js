document.addEventListener('DOMContentLoaded', function(){

//set the value for the first turn
var turn = "X";
//function to alternate between x and o
function switchTurn() {
  // if(checkForWin()) {
  //   document.getElementById("gameOverMessage").textContent = "Win!"
  // }
  if (turn == "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

// //ATTEMPT TO CREATE A LOOP FOR ALL CLICKABLE CELLS
// var clickBox = document.querySelectorAll('.cell');
//   console.log(clickBox);
//   clickBox.addEventListener('click', function(e){
//     var clickBoxNow = document.querySelectorAll('.cell');
//     for (var i = 0; i < clickBoxNow.length; i++) {
//       clickBoxNow[i].textContent = turn;
//       switchTurn();
//     }
//   e.preventDefault();
// });

// var clickBox = document.querySelectorAll('.cell');
// for(var i = 0; i < clickBox.length; i++) {

//   console.log(clickBox[i]);

// //ATTEMPT TO USE A LOOP TO ADD THE CLICK EVENT LISTENER WHICH ADD THE X OR O UPON CLICK IN THAT CELL
//   clickBox[i].addEventListener('click', function(e){
//     clickBox[i].querySelectorAll('.cell').textContent = turn;
//     switchTurn();
//     e.preventDefault();
//   });
// }

//SET EACH PLAYABLE CELL TO LISTEN FOR A CLICK AND THEN EXECUTE THE SWITCHTURN FUNCTION TO ALTERNATE X AND O ON CLICKS
//BUT ONLY IF THERE IS NO TEXTCONTENT ALREADY IN THAT CELL
var x1 = document.querySelector('.div1');

x1.addEventListener('click', function(e){
  if (x1.textContent === "") {
    x1.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x2 = document.querySelector('.div2');

x2.addEventListener('click', function(e){
  if (x2.textContent === "") {
    x2.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x3 = document.querySelector('.div3');

x3.addEventListener('click', function(e){
  if (x3.textContent === "") {
    x3.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x4 = document.querySelector('.div4');

x4.addEventListener('click', function(e){
  if (x4.textContent === "") {
    x4.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x5 = document.querySelector('.div5');

x5.addEventListener('click', function(e){
  if (x5.textContent === "") {
    x5.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x6 = document.querySelector('.div6');

x6.addEventListener('click', function(e){
  if (x6.textContent === "") {
    x6.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x7 = document.querySelector('.div7');

x7.addEventListener('click', function(e){
  if (x7.textContent === "") {
    x7.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x8 = document.querySelector('.div8');

x8.addEventListener('click', function(e){
  if (x8.textContent === "") {
    x8.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});
var x9 = document.querySelector('.div9');

x9.addEventListener('click', function(e){
  if (x9.textContent === "") {
    x9.textContent = turn;
    switchTurn();
  }
  e.preventDefault();
});

//SET WINNING CONDITIONS
// function checkRow(a, b, c, move) {
//   var result = false;
//   if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
//     result = true;
//   }
// }

// function getBox(number) {
//   return document.getElementById("win" + number).textContent;
// }

// function checkForWin(move) {
//   var result = false;
//   if (checkRow(1, 2, 3, move) ||
//       checkRow(4, 5, 6, move) ||
//       checkRow(7, 8, 9, move) ||
//       checkRow(1, 4, 7, move) ||
//       checkRow(2, 5, 8, move) ||
//       checkRow(3, 6, 9, move) ||
//       checkRow(1, 5, 9, move) ||
//       checkRow(3, 5, 7, move)) {
//     result = true;
//   }
//     return result;
// }

//RESET BUTTON
var endReset = document.querySelector('.resetButton');

  endReset.addEventListener('click', function(e){
    var resetNow = document.querySelectorAll('.cell');
    for (var i = 0; i < resetNow.length; i++) {
      resetNow[i].textContent = "";
    }
  e.preventDefault();
});



