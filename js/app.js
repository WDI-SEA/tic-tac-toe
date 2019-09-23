///SETUP VARIABLES///
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

//---DOM SETUP -----///
let box = Array.from(document.querySelectorAll('.box'));
let container = document.getElementById("container");
let reset = document.getElementById("reset").addEventListener("click", resetGame);
let winMessage = document.getElementById("wonMessage");

// console.log(box);
// console.log(xPosition);
// console.log(oPosition);

///// --- loop through box & add event listener to every position of the box array created.
for(let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', boxClicked);
  
}
///--- allow box to only be clicked one time if it already contains either X or O
function boxClicked(e) {
  if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
    box.removeEventListener("click", boxClicked);
    
  }
  takeTurn(e);
  }
// Switch between the two player based on increment and decrement on who the current player is, if 1 player = X, if 0 player = O
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
    currentPlayer--;
  }
}
// Check through the boxes and see if they are either X or O and if they've matched three winning positions
function checkForWin(e) {
  let win = false;
  let currentPosition = box;
  /// GO THROUGH THE WIN COMBOS SEE IF ALL THE INNERTEXT OF WHAT WAS PLAYED ON THE BOX EQUALS WIN COMBOS at the index of 0,1,2
  winCombo.forEach((combinations) => {
    let pos1 = currentPosition[combinations[0]].innerText;
    let pos2 = currentPosition[combinations[1]].innerText;
    let pos3 = currentPosition[combinations[2]].innerText;
    //assign variable to determine if there is win based on positions played 
    let isWon = pos1 !== '' && pos1 === pos2 && pos1 === pos3;
    //if the variable is met assign win to be true and call gameOver function 
    if(isWon){
      win = true;
      gameOver(e);
    }
    return win;
    
  });
  ///if conditions not met call the tie game function
  catsGame(e);
}
//--- Check for tie ---
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
//-- function to run when the win condition is met
function gameOver(e) {
  winMessage.textContent = "Congrats Player: " + currentPlayer + " You won";
  //loop through the box array and remove listener
  for(let i = 0; i < box.length; i++) {
    box[i].removeEventListener("click",boxClicked);
    
    
  }
}
// whenever the reset button is clicked reset the game to run from the begining ---
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
    