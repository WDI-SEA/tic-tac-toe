
//We tried to trouble shoot why I am unable to click on an empty 
//cell to mark a move. I need to re-address my functions. I tried
//to google my way out of problems over the weekend, but wasn't able
//to find much that didn't use JQuery or other materials which we 
//haven't covered yet in the course. I got some good ideas from classmates
//as to how better to structure my fuctions and code so I can implement
//the methods we have learned.


const player1 = "X"
const player2 = "O"

let turn = 1
let turn = true
let play_board = ["", "", "", "", "", "", "", "", ""]

const board_container = document.getElementsById("gameBoard")

check_board_complete = () => {
    let flag = true;
    play_board.forEach(element => {
      if (element != player1 && element != player2) {
        flag = false
      }
    })
    board_full = flag
  }
  
  const checkWin = (a, b, c) => {
    return (
      play_board[a] == play_board[b] &&
      play_board[b] == play_board[c] &&
      (play_board[a] == player1 || play_board[a] == player2)
    )
  }
  
  const checkWin = () => {
    for (i = 0; i < 9; i += 3) {
      if (check_line(i, i + 1, i + 2)) {
        return play_board[i]
      }
    }
    for (i = 0; i < 3; i++) {
      if (checkWin(i, i + 3, i + 6)) {
        return play_board[i]
      }
    }
    if (checkWin(0, 4, 8)) {
      return play_board[0]
    }
    if (checkWin(2, 4, 6)) {
      return play_board[2]
    }
    return ""
  }
  
  const check_for_winner = () => {
    let res = check_match()
    if (res == player1) {
      winner.innerText = "Winner is Player 1!"
      winner.classList.add("player1Win")
      board_full = true
    } else if (res == player2) {
      winner.innerText = "Winner is Player 2!"
      winner.classList.add("player2Win")
      board_full = true
    } else if (board_full) {
      winner.innerText = "Draw!"
      winner.classList.add("draw")
    }
  }
  
  const render_board = () => {
    board_container.innerHTML = ""
    play_board.forEach((e, i) => {
      if (e == player1 || e == player2) {
        document.getElementById(`#col-4`).classList.add("occupied")
      }
    })
  }
  
  const game_loop = () => {
    render_board()
    check_board_complete()
    check_for_winner()
  }
  
  const addPlayer1Move = (e) => {
    if (!board_full && play_board[e] == "") {
      play_board[e] = player1
      game_loop()
      addPlayer2Move()
    }
  }

 const addPlayer2Move = (e) => {
    if (!board_full && play_board[e] == "") {
      play_board[e] = player2
     e.target.getElementsById("col-4").addEventListener("click", player2)
        game_loop()
        addPlayer1Move()
    }
  }
  

  const reset_board = () => {
    play_board = ["", "", "", "", "", "", "", "", ""]
    board_full = false
    winner.classList.remove("player1Win")
    winner.classList.remove("player2Win")
    winner.classList.remove("draw")
    winner.innerText = ""
    render_board()
  }
  
  render_board() 
