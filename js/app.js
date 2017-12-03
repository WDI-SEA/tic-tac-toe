var turn = 0;
// var boxes = ['c1r1', 'c1r2', 'c1r3', 'c2r1', 'c2r2', 'c2r3', 'c3r1', 'c3r2', 'c3r3'];
var boxObjects = [];
var check = {
  "0": 'nobody',
  "1": 'nobody',
  "2": 'nobody',
  "3": 'nobody',
  "4": 'nobody',
  "5": 'nobody',
  "6": 'nobody',
  "7": 'nobody',
  "8": 'nobody',
}

var trueAndFalseS = function(turn){
  if (turn%2 === 0){
    return true;
  }
  return false;
}

var checkTurn = function(){
  turn++;
  var isPlayerOnesTurn = trueAndFalseS(turn);

  if (isPlayerOnesTurn){
    console.log("it's Player 1's turn");
    document.getElementById("pt").textContent = "Green is Go!";
  } else {
    console.log("Player 2 turn");
    document.getElementById("pt").textContent = "Red's turn.";
  }
}
// console.log(checkTurn());

var addBoxEventListeners = function(){
  boxObjects = document.getElementsByClassName('block');
    // console.log(boxObjects);
  for(var i = 0; i < boxObjects.length; i++){
    boxObjects[i].addEventListener('click', boxClicked);
    boxObjects[i].setAttribute('data-index', i);
  }
}

var boxClicked = function(e){
  var boxIndex = e.target.getAttribute('data-index');

  if (trueAndFalseS(turn)) {
    e.target.style.backgroundColor = "green";
    check[String(boxIndex)] = 'green';
    checkWin();
    checkTurn();
  } else {
    e.target.style.backgroundColor = "red";
    check[String(boxIndex)] = 'red';
    checkWin();
    checkTurn();
  }
}

var checkWin = function(){
  if ((check["0"] && check["1"] && check["2"] === 'green') ||
      (check["3"] && check["4"] && check["5"] === 'green') ||
      (check["6"] && check["7"] && check["8"] === 'green') ||
      (check["0"] && check["3"] && check["6"] === 'green') ||
      (check["1"] && check["4"] && check["7"] === 'green') ||
      (check["2"] && check["5"] && check["8"] === 'green') ||
      (check["0"] && check["4"] && check["8"] === 'green') ||
      (check["2"] && check["4"] && check["6"] === 'green')) {
        greenWins();
      } else if
      ((check["0"] && check["1"] && check["2"] === 'red') ||
      (check["3"] && check["4"] && check["5"] === 'red') ||
      (check["6"] && check["7"] && check["8"] === 'red') ||
      (check["0"] && check["3"] && check["6"] === 'red') ||
      (check["1"] && check["4"] && check["7"] === 'red') ||
      (check["2"] && check["5"] && check["8"] === 'red') ||
      (check["0"] && check["4"] && check["8"] === 'red') ||
      (check["2"] && check["4"] && check["6"] === 'red')) {
        redWins();
      }
      else {
        console.log("no winner yet.")
      }
  }

var greenWins = function (){
  document.getElementById('p1WinText').style.display = "flex";
}

var redWins = function (){
  document.getElementById('p2WinText').style.display = "flex";
}


// var gimme = function(){
//   check = "";
//   for (i=0, i<boxObjects.length; i++){
//     if (boxObjects[i].style.backgroundColor === 'green'){
//       check.push("'[i]', 'green'";)
//     } else {
//       check.push("'[i]', 'red'";)
//     }
//   }
// }

// checkTurn(trueAndFalseS(turn));

document.addEventListener('DOMContentLoaded', function() {
  addBoxEventListeners();
});
