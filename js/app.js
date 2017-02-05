var modal = document.getElementById('startModal');
var span = document.getElementsByClassName("close")[0];
var restart = document.getElementById('restart');

var playerchoice;

restart.onclick = function(){
  location.reload();
}

Xstart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("xChoice").style.display = "block";
  document.getElementById("oChoice").style.display = "none";
  playerchoice = "X";
  startGame();
}
Ostart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("oChoice").style.display = "block";
  document.getElementById("xChoice").style.display = "none";
  playerchoice = "O";
  startGame();
}

//defaults for win arr
var playerselectionRow = [];
var playerselectionCol = [];

//boolean win condition
var Win = false;

//default squares left to remove for computer to access
var squaresLeft = [0,1,2,3,4,5,6,7,8]
var numIndex;

//user click actions




var grid = new clickableGrid(3, 3, function(el, row, col, i) {
  console.log("You clicked on element:", el);
  console.log("You clicked on row:", row);
  console.log("You clicked on col:", col);
  console.log("You clicked on item #:", i);

  //taking element clicked and removing from array of possibilities
  numIndex = squaresLeft.indexOf(i -1);
  console.log('index of: ' + numIndex);
  squaresLeft.splice((numIndex), 1);
  console.log(squaresLeft);

  //pushing to moves array
  playerselectionRow.push(row);
  playerselectionCol.push(col);
  //sorting for win conditons
  playerselectionRow.sort();
  playerselectionCol.sort();

  if(playerchoice == "O"){
    el.className = 'clickedO';
  }
  if(playerchoice == "X"){
    el.className='clickedX';
  }



  //initialize empty object
  var countsRow = {};
  var countsCol = {};
  //check for repeat row/column values and place into counts object
  playerselectionRow.forEach(function(x){ countsRow[x] = (countsRow[x] || 0) +1; });
  playerselectionCol.forEach(function(x){ countsCol[x] = (countsCol[x] || 0) +1; });

  //if row count = 3 or col count = 3 then win condition
  if(Win === false){
    if(countsRow[0] == 3){
      Win = true;
    }
    else if((countsRow[1]) == 3){
      Win = true;
    }
    else if((countsRow[2]) == 3){
      Win = true;
    }
    else if(countsCol[0] == 3){
     Win = true;
    }
    else if(countsCol[1] == 3){
     Win = true;
    }
    else if(countsCol[2] == 3){
     Win = true;
   }else if((countsCol[0] == 1 && countsCol[1] == 1 && countsCol[2] == 1) && (countsRow[0] == 1 && countsRow[1] ==1 && countsRow[2] ==1)){
     Win = true;
   }
  computerTurn();
 }

});

function computerTurn(){
  //generate random number for computer turn
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var computerRnd = getRandomInt(0, squaresLeft.length)
  console.log(computerRnd);
  //determine possible moves left then choose
  var computerChoice = squaresLeft[computerRnd];
  console.log('computer chooses: ' + computerChoice);
  if(Win === true){
    Winner();
  }else{
    if(playerchoice == "O"){
      console.log(document.getElementsByTagName("td"))
      document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
      console.log(document.getElementsByTagName("td")[computerChoice]);
      locationCompChoice = squaresLeft.indexOf(computerChoice);
      squaresLeft.splice(locationCompChoice, 1);
    }
    if(playerchoice == "X"){
      console.log(document.getElementsByTagName("td"))
      document.getElementsByTagName("td")[computerChoice].className='clickedO';
      console.log(document.getElementsByTagName("td")[computerChoice]);
      locationCompChoice = squaresLeft.indexOf(computerChoice);
      squaresLeft.splice(locationCompChoice, 1);
    }
  }
}

//create game-board

function clickableGrid(rows, cols, callback) {
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.innerHTML = ++i;
      cell.addEventListener('click', (function(el, r, c, i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}


//appending grid to the body of htmls
function startGame(){
  document.body.appendChild(grid);
}
function Winner(){
  alert('You won!');
}
