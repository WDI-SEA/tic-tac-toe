//console.log('Hello frontend');
/*document.addEventListener("DOMContentLoaded", function(event){
  var cell = document.getElementById("0");
cell.addEventListener("click",function(){
  console.log("cell clicked");
});
});

*/

document.addEventListener('DOMContentLoaded', function() {
 console.log('dom loaded!');



var cell0 = document.getElementById("0");
var cell1 = document.getElementById("1");
var cell2 = document.getElementById("2");
var cell3 = document.getElementById("3");
var cell4 = document.getElementById("4");
var cell5 = document.getElementById("5");
var cell6 = document.getElementById("6");
var cell7 = document.getElementById("7");
var cell8 = document.getElementById("8");

var gameboard = [
[0,0,0],
[0,0,0],
[0,0,0],
];

var turn = 2;

cell0.addEventListener("click", function(event){
  if (gameboard[0][0] < 1) {
  if (turn % 2 === 0) {
  cell0.textContent = "X";
  cell0.classList.add("boxbgblue");
  gameboard[0][0] = 1;
  turn++;
}
else {
  cell0.textContent = "o";
  cell0.classList.add("boxbgblue");
  gameboard[0][0] = 1;
  turn++;
}
}
   });



cell1.addEventListener("click", function(event){
  if (gameboard [0][1] < 1) {
  if (turn % 2 === 0) {
  cell1.textContent = "X";
  cell1.classList.add("boxbgblue");
  gameboard[0][1] = 1;
  turn++;
}
  else {
  cell1.textContent = "o";
  cell1.classList.add("boxbgblue");
  gameboard[0][1] = 1;
  turn++;
}
}
});

cell2.addEventListener("click", function(event){
  if (gameboard [0][2] < 1) {
    if (turn % 2 === 0) {
      cell2.textContent = "X";
      cell2.classList.add("boxbgblue");
      gameboard[0][2] = 1;
      turn ++;
}
  else {
  cell2.textContent = "o";
  cell2.classList.add("boxbgblue");
  gameboard[0][2] = 1;
  turn++;
}
}
});

cell3.addEventListener("click", function(event){
  if (gameboard [1][0] < 1) {
    if (turn % 2 === 0) {
      cell3.textContent = "X";
      cell3.classList.add("boxbgblue");
      gameboard[1][0] = 1;
      turn ++;
}
  else {
  cell3.textContent = "o";
  cell3.classList.add("boxbgblue");
  gameboard[1][0] = 1;
  turn++;
}
}
});

cell4.addEventListener("click", function(event){
  if (gameboard [1][1] < 1) {
    if (turn % 2 === 0) {
      cell4.textContent = "x";
      cell4.classList.add("boxbgblue");
      gameboard[1][1] = 1;
      turn++;
    }
  else {
    cell4.textContent = "o";
    cell4.classList.add("boxbgblue");
    gameboard[1][1] = 1;
    turn++;
}
}
});

cell5.addEventListener("click", function(event){
  if (gameboard [1][2] < 1) {
    if (turn % 2 === 0) {
      cell5.textContent = "x";
      cell5.classList.add("boxbgblue");
      gameboard[1][2] = 1;
      turn++;
    }
  else {
    cell5.textContent = "o";
    cell5.classList.add("boxbgblue");
    gameboard[1][2] = 1;
    turn++;
}
}
});

cell6.addEventListener("click", function(event){
  if (gameboard [2][0] < 1) {
    if (turn % 2 === 0) {
      cell6.textContent = "x";
      cell6.classList.add("boxbgblue");
      gameboard[2][0] = 1;
      turn++;
    }
  else {
    cell6.textContent = "o";
    cell6.classList.add("boxbgblue");
    gameboard[2][0] = 1;
    turn++;
}
}
});

cell7.addEventListener("click", function(event){
  if (gameboard [2][1] < 1) {
    if (turn % 2 === 0) {
      cell7.textContent = "x";
      cell7.classList.add("boxbgblue");
      gameboard[2][1] = 1;
      turn++;
    }
  else {
    cell7.textContent = "o";
    cell7.classList.add("boxbgblue");
    gameboard[2][1] = 1;
    turn++;
}
}
});

cell8.addEventListener("click", function(event){
  if (gameboard [2][2] < 1) {
    if (turn % 2 === 0) {
      cell8.textContent = "x";
      cell8.classList.add("boxbgblue");
      gameboard[2][2] = 1;
      turn++;
    }
  else {
    cell8.textContent = "o";
    cell8.classList.add("boxbgblue");
    gameboard[2][2] = 1;
    turn++;
}
}
});

});  // This closes the DOM Content Loaded
