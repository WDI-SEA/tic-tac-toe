console.log('Hello frontend');

let x = []
let o = []
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
let xTurn = true
let boxes = document.getElementsByClassName('grid-item');
let playingFriend
let gameOver = true

function startGame() {
  let vsFriend = document.getElementById('vsFriend').checked
  if(vsFriend) {
    playingFriend = true
  }else {
    playingFriend = false
  }
  gameOver = false
}

function init() {
  document.getElementById('start').addEventListener('click', startGame)
  for(i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClicked)
  }
  document.getElementById("reset").addEventListener('click', resetFn)
}

 function boxClicked() {
  let id = this.id
  console.log(id)
  if(!this.classList.contains('clicked') && !gameOver) {
    this.classList.add('clicked')
    if(xTurn) {
      this.textContent = 'X'
      x.push(id)
      checkForWin()
      if(playingFriend) {
        xTurn = false
      }
      else {
        CPUmove()
      }
    }
    else {
      this.textContent = 'O'
      o.push(id)
      checkForWin()
      xTurn=true
    }
  }
}

function checkForDraw() {
  let checked = document.getElementsByClassName('clicked')
  if(checked.length === 9) {
    document.getElementById('display').textContent = 'DRAW!'
    gameOver = true
  }
}

function CPUmove() {
  if(!gameOver) {
    let CPU = Math.floor(Math.random() * Math.floor(8));
    let thisBox = boxes[CPU]
    while(thisBox.classList.contains('clicked')) {
      CPU = Math.floor(Math.random() * Math.floor(8));
      thisBox = boxes[CPU]
    }
    thisBox.textContent = 'O'
    let id = thisBox.id
    o.push(id)
    checkForDraw()
    checkForWin()
  }
}

function checkForWin() {
  if(xTurn) {
    for(i = 0; i < winCombos.length; i++){
      for(j = 0; j < winCombos[i].length; j++){
        if(x.includes(winCombos[i][0]) &&
           x.includes(winCombos[i][1]) &&
           x.includes(winCombos[i][2])){
             document.getElementById('display').textContent = "X Won!"
             gameOver = true
           }
      }
    }
  }
  else {
    for(i = 0; i < winCombos.length; i++){
      for(j = 0; j < winCombos[i].length; j++){
        if(o.includes(winCombos[i][0]) &&
           o.includes(winCombos[i][1]) &&
           o.includes(winCombos[i][2])){
             document.getElementById('display').textContent = "o Won!"
             gameOver = true
           }
      }
    }

  }
  let checked = document.getElementsByClassName('clicked')
  if(checked.length === 9) {
    document.getElementById('display').textContent = 'DRAW!'
  }
 }

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
