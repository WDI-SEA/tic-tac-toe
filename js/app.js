
var currentPlayer = 1;
var winCombo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]
var xPosition = [false,false,false,false,false,false,false,false];
var oPosition = [false,false,false,false,false,false,false,false];
let box = Array.from(document.querySelectorAll('.box'));
let container = document.getElementById("container");
let reset = document.getElementById("reset").addEventListener("click", resetGame);
let winMessage = document.getElementById("wonMessage");

// console.log(box);
// console.log(xPosition);
// console.log(oPosition);

for(let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', boxClicked);
  
}

function boxClicked(e) {
  if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
    box.removeEventListener("click", boxClicked);
    
  }
  takeTurn(e);
  }

function takeTurn(e) {
  if (currentPlayer === 1) {
    var x = e.target.innerHTML = "X";
    xPosition[e.target.id] = true;
    checkForWin(e);
    currentPlayer++;
  } else if (currentPlayer !== 1) {
    var o = e.target.innerHTML = "O";
    oPosition[e.target.id] = true;
    checkForWin(e)
    console.log(box.innerHTML);
    currentPlayer--;
  }
}

function checkForWin(e) {
  let win = false;
  let currentPosition = box;
  winCombo.forEach((combinations) => {
    let pos1 = currentPosition[combinations[0]].innerText;
    let pos2 = currentPosition[combinations[1]].innerText;
    let pos3 = currentPosition[combinations[2]].innerText;
    let isWon = pos1 !== '' && pos1 === pos2 && pos1 === pos3;
    
    if(isWon){
      win = true;
      gameOver(e);
    }
    return win;
    
  });
  catsGame(e);
}

function catsGame(e) {
  var boxCount = 0;
  while(boxCount < 9){
    if(box[boxCount].innerHTML === "X" || box[boxCount].innerHTML === "O"){
      boxCount++;
    }else {
      return
    }
    if(boxCount === 9){
      console.log('tie');
      winMessage.textContent = "Nobody Wins, try again";
    }
  }
}

function gameOver(e) {
  winMessage.textContent = "Congrats Player: " + currentPlayer + " You won";
  for(let i = 0; i < box.length; i++) {
    box[i].removeEventListener("click",boxClicked);
    
    
  }
}

function resetGame(e) {
  let win = false;
  var winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  
  ]
  var xPosition = [false,false,false,false,false,false,false,false];
  var oPosition = [false,false,false,false,false,false,false,false];
  winMessage.textContent = " ";
  currentPlayer = 1;
  for(let i = 0; i < box.length; i++) {
    box[i].textContent = " ";
    box[i].addEventListener('click', boxClicked);
  }
  checkForWin(e);
  
}
    