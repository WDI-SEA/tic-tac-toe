
//globals for x array and o array
let x = []
let o = []
//Constant with all possible wins
const winCombos = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["6", "4", "2"]
]
//
let xTurn = true

let boxes = document.getElementsByClassName('grid-item');
let playingFriend
//bool for game over
let gameOver = true

// initializing eventlisteners  for start reset and box
function init() {
  document.getElementById('start').addEventListener('click', startGame)
  for(i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClicked)
  }
  document.getElementById("reset").addEventListener('click', resetFn)
}

//start game check whether friend is checked and game over is false
function startGame() {
  let vsFriend = document.getElementById('vsFriend').checked
  if(vsFriend) {
    playingFriend = true
  }else {
    playingFriend = false
  }
  gameOver = false
}

// this id calls box clicked and not game over
//if describing class list as clicked when clicked making it unclickable
// same with game over
// if x turn write X else write O and push to x array
 function boxClicked() {
  let id = this.id
  //console.log(id)
  if(!this.classList.contains('clicked') && !gameOver) {
    this.classList.add('clicked')
    if(xTurn) {
      this.textContent = 'X'
      x.push(id)
      checkForDraw()
      checkForWin(x)
      if(playingFriend) {
        xTurn = false
      }
      // else do the same call CPU then check for win/draw then turn x true

      else {
        CPUmove()
        xTurn= false
        checkForDraw()
        checkForWin(o)
        xTurn = true
      }
    }
    //do the same for user or cpu and push it to o array then back to x turn
    else {
      this.textContent = 'O'
      o.push(id)
      checkForDraw()
      checkForWin(o)
      xTurn=true
    }
  }
}
// checked is equal to a box that is clicked
//if checked is 9 then game is a draw
//then run it in display as DRAW then run game over as true
function checkForDraw() {
  let checked = document.getElementsByClassName('clicked')
  if(checked.length === 9) {
    document.getElementById('display').textContent = 'DRAW!'
    gameOver = true
  }
}
//function for cpu
//using math . random to place o's in random spots when cpu is checked
function CPUmove() {
  if(!gameOver) {
    let CPU = Math.floor(Math.random() * Math.floor(8));
    let thisBox = boxes[CPU]
    while(thisBox.classList.contains('clicked')) {
      CPU = Math.floor(Math.random() * Math.floor(8));
      thisBox = boxes[CPU]
    }
    //pushing o and checking for win cases
    thisBox.textContent = 'O'
    let id = thisBox.id
    o.push(id)
    checkForDraw()
    checkForWin()
  }
}
//checking winning combos for x and then for o
//if won then send to display
function checkForWin(array) {
    for(i = 0; i < winCombos.length; i++){
      for(j = 0; j < winCombos[i].length; j++){
        if(array.includes(winCombos[i][0]) &&
           array.includes(winCombos[i][1]) &&
           array.includes(winCombos[i][2])){
             if(xTurn) {
               document.getElementById('display').textContent = "X Won!"
             } else {
               document.getElementById('display').textContent = "o Won!"
             }
             gameOver = true
        }
      }
    }
 }
//reset button function
// for loop set boxes and inputs to blank 
function resetFn() {
  for(let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = ''
    boxes[i].classList.remove("clicked")
  }
  document.getElementById('display').textContent = ''
  x = []
  o = []
  document.getElementById('vsCpu').checked = false;
  gameOver = false
}

init();
