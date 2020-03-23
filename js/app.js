
const player1 = "X"
const player2 = "O"

let move = 1;
let turn = true;
let play_board = ["", "", "", "", "", "", "", "", ""]

const board_container = document.getElementsById("board")

check_board_complete = () => {
    let flag = true;
    play_board.forEach(element => {
      if (element != player1 && element != player2) {
        flag = false
      }
    })
    board_full = flag
  }
  
  const check_line = (a, b, c) => {
    return (
      play_board[a] == play_board[b] &&
      play_board[b] == play_board[c] &&
      (play_board[a] == player1 || play_board[a] == player2)
    )
  }
  
  const check_match = () => {
    for (i = 0; i < 9; i += 3) {
      if (check_line(i, i + 1, i + 2)) {
        return play_board[i]
      }
    }
    for (i = 0; i < 3; i++) {
      if (check_line(i, i + 3, i + 6)) {
        return play_board[i]
      }
    }
    if (check_line(0, 4, 8)) {
      return play_board[0]
    }
    if (check_line(2, 4, 6)) {
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
      board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayer1Move(${i})">${play_board[i]}</div>`
      if (e == player1 || e == player2) {
        document.getElementById(`#block_${i}`).classList.add("occupied")
      }
    })
  }
  
  const game_loop = () => {
    render_board()
    check_board_complete()
    check_for_winner()
  }
  
  const addPlayer1Move = e => {
    if (!board_full && play_board[e] == "") {
      play_board[e] = player1
      $(this).append("X")
      game_loop()
      addPlayer2Move()
    }

 const addPlayer2Move = e => {
    if (!board_full && play_board[e] == "") {
      play_board[e] = player2
      $(this).append("O")
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
}