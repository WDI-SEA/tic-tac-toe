// state variables
let gameOver = false;
let turn = 0;

// winning combo arrays
 let xTiles = [];
 let oTiles = [];
 
// variables for dom score
let message = document.getElementsByClassName('greeting')[0];
let scoreX = document.getElementsByClassName('scorebox1')[0];
let scoreO = document.getElementsByClassName('scorebox2')[0];

 // object for boxes checked

let checked = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
};

//variables for point boxes

let row1x = 0;
let row2x = 0;
let row3x = 0;
let col1x = 0;
let col2x = 0;
let col3x = 0;
let diag1x = 0;
let diag2x = 0;

let row1o = 0;
let row2o = 0;
let row3o = 0;
let col1o = 0;
let col2o = 0;
let col3o = 0;
let diag1o = 0;
let diag2o = 0;

// winning points

let xTurn = 0;
let oTurn = 0;

// initialize game
let initGame = function () {
document.addEventListener('DOMContentLoaded', function() {
    console.log("init game");
    for (let box in checked) {
    document.getElementById(box).addEventListener('click', checkBox);
}})};

initGame();

// create end game function

let endGame = function () {
    console.log('inside end game function');
    if (xTurn + oTurn === 9) {
        console.log("draw");
        message.textContent = "CAT'S GAME";
    } else if (xTurn > oTurn) {
        console.log("X WON");
        message.textContent = "X WINS";
        scoreX.textContent++;
    }   else {
        console.log("O WINS")
        message.textContent = "O WINS";
        scoreO.textContent++;
    }}

// check for a win after five turns

let checkStatus = function () {
  if ( turn % 2 === 0 ) {
    for (let value of xTiles) {
      let boxCheckedHTML = document.getElementById(value);
      let classes = boxCheckedHTML.className.split(" ");

         if (classes.indexOf('row1') > -1 ) {
                row1x = row1x + 1; }
         if (classes.indexOf('row2') > -1 ) {
                row2x = row2x + 1; }
         if (classes.indexOf('row3') > -1 ) {
                row3x = row3x + 1; }
         if (classes.indexOf('col1') > -1 ) {
                col1x = col1x + 1; }
         if (classes.indexOf('col2') > -1 ) {
                col2x = col2x + 1; }
         if (classes.indexOf('col3') > -1 ) {
                col3x = col3x + 1; }
         if (classes.indexOf('diag1') > -1 ) {
               diag1x = diag1x + 1; }
         if (classes.indexOf('diag2') > -1 ) {
               diag2x = diag2x + 1; } 
         if ( row1x>2 || row2x>2 || row3x>2 || col1x>2 
         || col2x>2 || col3x>2 || diag1x>2 || diag2x>2 ) {
                console.log("enter end game function");
                gameOver = true;
                endGame();
    }  }  }  

     else if ( turn % 2 !== 0 ) {
        for (let value of oTiles) {
          let boxCheckedHTML = document.getElementById(value);
          let classes = boxCheckedHTML.className.split(" ");
    
        if (classes.indexOf('row1') > -1 ) {
                    row1o = row1o + 1; }
        if (classes.indexOf('row2') > -1 ) {
                    row2o = row2o + 1; }
        if (classes.indexOf('row3') > -1 ) {
                    row3o = row3o + 1; }
        if (classes.indexOf('col1') > -1 ) {
                    col1o = col1o + 1; }
        if (classes.indexOf('col2') > -1 ) {
                    col2o = col2o + 1; }
        if (classes.indexOf('col3') > -1 ) {
                    col3o = col3o + 1; }
        if (classes.indexOf('diag1') > -1 ) {
                   diag1o = diag1o + 1; }
        if (classes.indexOf('diag2') > -1 ) {
                   diag2o = diag2o + 1; } 
        if ( row1o>2 || row2o>2 || row3o>2 || col1o>2 
            || col2o>2 || col3o>2 || diag1o>2 || diag2o>2 ) {
                console.log("enter end game function");
                gameOver = true;
                endGame();
        }  }  }  }


// let cpuPlayer = function () {
     //write AI function here
// }


let checkBox = function () {
if (!checked[this.id] && !gameOver ) {
  if (turn % 2 === 0) {
      message.textContent = "PLAYER O'S TURN";
      console.log(this.id);
      document.getElementById(this.id).textContent = "X";
      checked[this.id] = true;
      let checkedKeys = Object.keys(checked);
      xTiles.pop();
      xTiles.push(this.id)
      console.log(xTiles);
      xTurn = xTurn + 1;
      checkStatus();
      turn = turn + 1;
    }     else { document.getElementById(this.id).textContent = "O";
          message.textContent = "PLAYER X'S TURN";
          console.log(this.id);
          checked[this.id] = true;
          let checkedKeys = Object.keys(checked);
          oTiles.pop();
          oTiles.push(this.id)
          console.log(oTiles);
          oTurn = oTurn + 1;
          checkStatus();
          turn = turn + 1;

    } } }

let resetButton = document.querySelector('button');
let resetPage = function () {
    window.location.reload();
}

let resetGame = function () {
    console.log("In reset game function");
    for (let key in checked) {
    checked[key] = false;
    document.getElementById(key).textContent = "";
}
    console.log(checked)
    row1x = 0;
    row2x = 0;
    row3x = 0;
    col1x = 0;
    col2x = 0;
    col3x = 0;
    diag1x = 0;
    diag2x = 0;
    row1o = 0;
    row2o = 0;
    row3o = 0;
    col1o = 0;
    col2o = 0;
    col3o = 0;
    diag1o = 0;
    diag2o = 0;
    xTiles.length = 0;
    oTiles.length = 0;
    message.textContent = '"TIC TAC TOE"';
    gameOver = false;
    turn = 0;
    initGame();
}

resetButton.addEventListener('click', resetGame);



// THINGS TO ADD

// ACTUAL RESET FUNCTION
// AI FUNCTION / AI FUNCTION W MINI MAX
