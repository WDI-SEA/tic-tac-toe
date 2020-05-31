/*  //  //  //  //  //  //
TODO 
add sound 
add AI
*/  //  //  //  //  //  //  


let boardBG = document.getElementById('boardBG');
let infoPic = document.getElementById('infoPic');
let infoText = document.getElementById('infoText');
let resetBtn = document.getElementById('reset');
let musicBG = document.getElementById('musicBG');
let startMusic = document.getElementById('startMusic');
let stopMusic = document.getElementById('stopMusic');
boardBG.addEventListener('click', click);
resetBtn.addEventListener('click', init);
startMusic.addEventListener('click', soundOn);
stopMusic.addEventListener('click', soundOff);

// data for the current game state
let gameMatrix = [ [0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0],];

// image location and value to update game matrix with when a play is made
const playerRef= [ ["url('./img/win.svg')", 1],
                   ["url('./img/mac.svg')", 2],];

// check whose turn it is in player ref win = 0 mac = 1
let currentPlayer = 0;

//check who won win = 0 mac = 1; 
let winner = -1;
//keep track of turns
let turnCount = 0;

function soundOn() {
  musicBG.play();
}

function soundOff() {
  musicBG.pause();
}

//init function is run on load and on reset button push
function init () {
  //reset winner
  winner = -1;
  //reset current player to windows
  currentPlayer = 0;
  //reset turn count
  turnCount = 0;
  //reset text to GO + info BG image to windows
  infoPic.style.backgroundImage = playerRef[currentPlayer][0];
  infoText.innerText = "GO ° 行こう！";
  //iterate through matrix to make sure that it is clear and also clear the game box bg imgs
  for(let i=0; i<3;i++){
    for(let j=0;j<3;j++){
      gameMatrix[i][j] = 0;
      let boxID = 'box' + i + j;
      document.getElementById(boxID).style.backgroundImage = 'none';
      }
  }
}

//iterate through an array and check that values are all the same and none of them are a 0, return the value of
//the first item in the array so we have the winner if the check = true
function winLogic(array){
  let check = false;
  for (let i = 0; i < array.length; i++){
    if (array[i] === 0){
        check = false;
        break;
      } else if (array[0] === array[i]) {  
        (check = true); 
     } else {
        (check = false);
        break;
    }
  }
  return [check, array[0]];
}

function winCheck() {
  let winnerList = [];

  //check rows and push to winner list
  winnerList.push(winLogic(gameMatrix[0]));
  winnerList.push(winLogic(gameMatrix[1]));
  winnerList.push(winLogic(gameMatrix[2]));

  //sum up vertical columns but first put values in an array so winLogic can be used
  let col0 = [gameMatrix[0][0], gameMatrix[1][0], gameMatrix[2][0]];
  let col1 = [gameMatrix[0][1], gameMatrix[1][1], gameMatrix[2][1]];
  let col2 = [gameMatrix[0][2], gameMatrix[1][2], gameMatrix[2][2]];
  //check cols in push to winnerList
  winnerList.push(winLogic(col0));
  winnerList.push(winLogic(col1));
  winnerList.push(winLogic(col2));
  //sum up the criss cross win cases  but first put values in a array so winLogic can be used
  let cross0 = [gameMatrix[0][0], gameMatrix[1][1], gameMatrix[2][2]];
  let cross1 = [gameMatrix[0][2], gameMatrix[1][1], gameMatrix[2][0]];
  //check criss cross and push to winner list
  winnerList.push(winLogic(cross0));
  winnerList.push(winLogic(cross1));
  //itterate winnerList and look for a true value (someone won)
  for (i=0; i<winnerList.length;i++){
    if (winnerList[i][0] === true){
      //update the who the winner is to indicate game over 
      winner = (winnerList[i][1]) - 1;
      //if 1 won, its win95
      if (winner === 0){
        infoText.innerText = "WIN ° スコア ！";
        infoPic.style.backgroundImage = playerRef[0][0];
      } else if (winner === 1) {
        infoText.innerText = "MAC° スコア ！";
        infoPic.style.backgroundImage = playerRef[1][0];
      } 
    }
    if (turnCount === 9 && winner === -1){
      winner =3;
      infoText.innerText = "DRAW° スア ！";
      infoPic.style.backgroundImage = 'none';
    }
  }
}

function click(e){
  currentSquare = e.target.id;
  //if winner is not -1, the game is over
  if (winner === -1){
    //check its actually a play square and not the parent div
    if(currentSquare != "boardBG"){
      //parse the matrix locations from the id string
      let y = parseInt(currentSquare.slice(3, 4));
      let x = parseInt(currentSquare.slice(4));
      //proceed with game if gameMatrix is found to be empty
      if (gameMatrix[y][x] == 0){
        //increment turnCount
        turnCount++;
        // update the bg img of the target box with var playerRef at index of currentPlayer
        document.getElementById(currentSquare).style.backgroundImage = playerRef[currentPlayer][0];
        //update matrix
        gameMatrix[y][x] = playerRef[currentPlayer][1];
        // check to see if anyone has won the game
        // update the current player
        currentPlayer = (currentPlayer + 1) % 2;
        //update info img
        infoPic.style.backgroundImage = playerRef[currentPlayer][0];
        // check to see if anyone has won the game
        winCheck();
      }
    }
  }
}

init();

/*  //  //  //  //  //  //
Unused but worth saving functions
*/  //  //  //  //  //  //  
/* 
//copmare elements in a array are all the same and return boolean 
function arraySameValue(array){
  let check = false;
  for (let i = 0; i < array.length; i++){
    if (array[0] === array[i]) {  
      (check = true) 
     } else {
      (check = false);
      break;
    }
  }
  return check;
}

//returns sum of array using for loop
function arraySumLoop(array){
  let sum =0;
  for (let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
}

//returns the sum of an array starting at index using the .reduce method
function arraySumReduce (array, index){
  // .reduce runs a function on each element in a array a is the accumulator and b is the current value 
  return array.reduce(function(a, b){
    return a * b;
    //index is the inital array index to start at a passed to .reduce method
  }, index);
}

//splits a string between the letters like: chonky = c h o n k y
function kern (text){
  return text.split("").join(" ");
}
*/
