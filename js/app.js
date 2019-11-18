

const player1 = "X"
const player2 = "O"

var newArray = []

const showXO = e =>{
    if (e.target.textContent === ""){
        
        // store the player becuase we do not want to delet it for showing the message
        var storePlayer = newArray[0]
        e.target.textContent = storePlayer
        newArray.shift() 

        checkWinGame(storePlayer)
    }
  }

const checkWinGame = (player) => {
    var winner = "";

    // check for winner
    //check row
    if (box1.textContent === player && box2.textContent === player && box3.textContent === player){
        winner = player
    }
    else if (box4.textContent === player && box5.textContent === player && box6.textContent === player){
        winner = player
    }
    else if (box7.textContent === player && box8.textContent === player && box9.textContent === player){
        winner = player
    }
    //  check column
    else if (box1.textContent === player && box4.textContent === player && box7.textContent === player){
        winner = player
    }
    else if (box2.textContent === player && box5.textContent === player && box8.textContent === player){
        winner = player
    }
    else if (box3.textContent === player && box6.textContent === player && box9.textContent === player){
        winner = player
    }
    // check diag

    else if (box1.textContent === player && box5.textContent === player && box9.textContent === player){
        winner = player
    }
    else if (box3.textContent === player && box5.textContent === player && box7.textContent === player){
        winner = player
   
    } 

    //test here
    if (winner != ""){
        showWinnerMessage(winner)
    }
    else if (winner === "" && newArray.length === 0) {
        tryAgain()
    }
}


const showWinnerMessage = (winner) => {
      if (winner === player1) {
        document.getElementById('messageX').textContent = "Player 1 🙋‍♀️ Won"
        document.getElementById('messageO').textContent = "Player 2 🙋‍♂️ Lost"
      } else {
        document.getElementById('messageX').textContent = "Player 1 🙋‍♀️ Lost"
        document.getElementById('messageO').textContent = "Player 2 🙋‍♂️ won"
      }
    }

const tryAgain = () => {
        document.getElementById('messageX').textContent = "Try Again! By Go"
        document.getElementById('messageO').textContent = "Try Again! By Go"
    
    }


const showX = () => {
document.getElementById('messageX').textContent = "Player1 🙋‍♀️ got an X"
 }

const showO = () => {
document.getElementById('messageO').textContent = "Player2 🙋‍♂️ got an O"
}

const start = () => {
  // UI empty
  let boxes = document.querySelectorAll('.box') 
  for (let element of boxes) {
      element.textContent = ""
  } 
  showX()
  showO()
  newArray = ['X','O','X','O','X','O','X','O','X']
}
    
let box1 = document.getElementById('box1') 
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3') 
let box4 = document.getElementById('box4') 
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6') 
let box7 = document.getElementById('box7') 
let box8 = document.getElementById('box8')
let box9 = document.getElementById('box9') 


box1.addEventListener('click',showXO)
box2.addEventListener('click',showXO)
box3.addEventListener('click',showXO)
box4.addEventListener('click',showXO)
box5.addEventListener('click',showXO)
box6.addEventListener('click',showXO)
box7.addEventListener('click',showXO)
box8.addEventListener('click',showXO)
box9.addEventListener('click',showXO)


// click on Go
document.getElementById('start').addEventListener("click", start)


document.addEventListener("DOMContentLoaded",() => {
    document.getElementById('player1').addEventListener('click',showX)
    document.getElementById('player2').addEventListener('click',showO)
    
})