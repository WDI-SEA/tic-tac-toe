console.log('javascript running');

var turn = null
var boxes = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"]

var addLogo = function() {
  if (turn % 2 === 0) {
    this.classList.add("boxbackrebel");
  } else {
  this.classList.add("boxbackempire");
}
turn++
  console.log("clicked!")
}


var arr = [].slice.call(document.getElementsByClassName("gameboard"));
console.log(arr.length);

var getWinner = function() {
  if (winnerIs('x')) {
  return 'x';
  } if (winnerIs('o')) {
  return 'o';
  }
  return null;
}
/*
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
        console.log(boxInput);
  }
}
*/

var winnerIs = function(player) {
return winsRow(player) || winsColumn(player) || winsDiagonal(player);
    alert(WinnerIs);
    console.log(winnerIs);
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
  turn = 1;

    for (gameboard[arr[i]] = 0; i < 5; i++) {
      console.log(gameboard[arr[i]].length);
     {
      gameboard.push(box);
      console.log(inputStart.length);
    }
    boxInput();
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  boxes.forEach(function(box) {
    document.getElementById(box).addEventListener('click', addLogo)
  })});



/*

  document.addEventListener("")
  document.getElementsByClassName('gameboard')[0].children;
  for (let winnerIs in boxInput) {
  document.getElementsByClassName("box")[0].addEventListener("click", getWinner);
  initGame();
}});
*/
