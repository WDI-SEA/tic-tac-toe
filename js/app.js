var turn = 0;
var boxes = ['c1r1', 'c1r2', 'c1r3', 'c2r1', 'c2r2', 'c2r3', 'c3r1', 'c3r2', 'c3r3'];
var boxObjects = [];

var trueAndFalseS = function(turn){
  if (turn%2 === 0){
    return true;
  }
  return false;
}
console.log(trueAndFalseS(turn));

var checkTurn = function(func){
  if (func === true){
    console.log("it's Player 1's turn");
    document.getElementById("pt").textContent = "Green is Go!";
    turn++;
  } else {
    console.log("Player 2 turn");
    document.getElementById("pt").textContent = "Red's turn.";
    turn++;
  }
}

var addBoxEventListeners = function(){
  boxObjects = document.getElementsByClassName('block');
    console.log(boxObjects);
  for(var i = 0; i < boxObjects.length; i++){
    boxObjects[i].addEventListener('click', boxClicked);
  }
}

var boxClicked = function(e){
  if (trueAndFalseS(turn)) {
    e.target.style = "background-color: green";
    checkTurn();
  } else {
    e.target.style = "background-color: red";
    checkTurn();
  }
}

// checkTurn(trueAndFalseS(turn));

document.addEventListener('DOMContentLoaded', function() {
  addBoxEventListeners();
});
