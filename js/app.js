let time, interval
let playerTurn = 'X'


const playSpace = e => {
  console.log(e.target.id)
  e.target.innerHTML = playerTurn
  index = boardIndex[e.target.id] 
  board[index] = playerTurn
  console.log(board)
  nextTurn()
  e.target.removeEventListener('click', playSpace)
}

const addSpacesPickable = () => {
    console.log('addSpacesPickable called')
    let spacesPickable = document.querySelectorAll('#board div')
    for (let i = 0; i < spacesPickable.length; i++) {
        spacesPickable[i].addEventListener('click', playSpace)
        console.log(spacesPickable[i])
        spacesPickable[i].innerHTML = ""
    }

}

const nextTurn = () => {
//If timer hits 0, change color to indicate next player's turn
    time = 5
        if (playerTurn == 'X') {
            playerTurn = 'O';
            document.getElementById('timer').style.color = 'blue'
        } else {
            playerTurn = 'X'
            document.getElementById('timer').style.color = 'red'
        }
}

const tick = () => {
    
    console.log('tick!', time)
    document.getElementById('timer').textContent = "Player " + playerTurn + ":" + time + " seconds remaining!"
    //Player ran out of time, call next players turn function
    time -= 1
    if (time <= 0) {
        nextTurn()
    }
}

const start = () => {
time = 5
clearInterval(interval)
interval = setInterval(tick, 1000)
document.getElementById('timer').style.color = 'red'


//Set clock tick sound?

//Reset board
board = ['', '', '', '', '', '', '', '', '']
boardIndex = {
    "topleft" : 0,
    "topmid" : 1,
    "topright" : 2,
    "midleft" : 3,
    "midmid" : 4,
    "midright" : 5,
    "botleft" : 6,
    "botmid" : 7,
    "botright" : 8
}

 winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]
    const checkWin = () => 
    checkWin()
//Let Player1 pick square
addSpacesPickable()
}





document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', start)
})