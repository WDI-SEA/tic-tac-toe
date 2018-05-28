console.log('javascript running');

var inputStart = [];
var arr = [].slice.call(gameboard)
var getWinner = function() {
  if (winnerIs('x')) {
  return 'x';
  } if (winnerIs('o')) {
  return 'o';
  }
  return null;
}

function boxInput(key) {
    switch(key) {
        case "box1": return "x";
        case "box2": return "x";
        case "box3": return "x";
        case "box4": return null;
        case "box5": return null;
        case "box6": return null;
        case "box7": return null;
        case "box8": return null;
        case "box9": return null;
        default : return null;
  }
}

var winnerIs = function(player) {
return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

var winsRow = function(player) {
return  allThree(player, boxInput('box1'), boxInput('box2'), boxInput('box3')) ||
        allThree(player, boxInput('box4'), boxInput('box5'), boxInput('box6')) ||
        allThree(player, boxInput('box7'), boxInput('box8'), boxInput('box9'));
}

var winsColumn = function(player) {
return  allThree(player, boxInput('box1'), boxInput('box4'), boxInput('box7')) ||
        allThree(player, boxInput('box2'), boxInput('box5'), boxInput('box8')) ||
        allThree(player, boxInput('box3'), boxInput('box6'), boxInput('box9'));
}

var winsDiagonal = function(player) {
return  allThree(player, boxInput('box1'), boxInput('box5'), boxInput('box9')) ||
        allThree(player, boxInput('box3'), boxInput('box5'), boxInput('box7'));
}

var allThree = function(player, boxInputOne, boxInputTwo, boxInputThree) {
return (boxInputOne === player) && (boxInputTwo === player) && (boxInputThree === player);
}


var initGame = function () {
  inputStart.length = 0;
  for (let box in boxInput) {
    if (inputStart = 0) {
      inputStart.push(box);
    }
  }
}
console.log(inputStart);


/*
var endGame = function(win) {

}

var reset = function() {
  gameOver = false;
  var

}
*/

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  for (let box in boxInput) {
    document.getElementsByClassName(gameboard).children.addEventListener('click', boxInput);
}
  document.getElementsByTagName("button")[0].addEventListener("click", reset);
  initGame();
});
