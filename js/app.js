// console.log('Hello frontend');

// // EXAMPLE OF A JSTIKTAKTOE! THIS HARD! // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :( 

// let play_board = ["", "", "", "", "", "", "", "", ""];

// const board_container = document.querySelector(".play-area");

// const render_board = () => {
//   board_container.innerHTML = "";
//   play_board.forEach((e, i) => {
//     board_container.innerHTML += `<div id="block_${i}" class="block" onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
//     if (e == player || e == computer) {
//       document.querySelector(`#block_${i}`).classList.add("occupied");
//     }
//   });
// };

// render_board();
// const player = "O";
// const computer = "X";

// const addPlayerMove = e => {
//   if (play_board[e] == "") {
//     play_board[e] = player;
//     render_board();
//     addComputerMove();
//   }
// };

// const game_loop = () => {
//     render_board();
//     check_board_complete();
//   };



var turns, interval
turns = 1;
// DOM MANIPULATION I BELIEVE document.getEle....
// grabs all the HTML elements with the class 'block' 
var blocks = document.getElementsByClassName('block')
// adds an eventListener and loops through each board 
// determines the current turn
// checks for the winner (if they is one)
// i++ sets the intervals to 1 for instance i+2 (0,2,4,6,etc)
for (let i = 0; i < blocks.length; i++) {
    let currentBLock = blocks[i];
    currentBLock.addEventListener('click', function (){

        if (turns % 2 == 0) {
            currentBLock.textContent = "O";
        } else {
            currentBLock.textContent = "X";
        };
        
        turns++;

        checkOutcome();
    })
}

// this function checks the outcome of the game i.e:
// 1. "X" winna winna
// 2. "O" winna winna
// 3. "Cat's Game"

function checkOutcome () {
    checkWin("X");
    checkWin("O");


// FULL BOARD TO SEE IF IT FULL OR COMPLETE
// assuming the baord is full -- coming across a block that has a "X" or an "O" isnt FULL
var fullBoard = true;
for (let i = 0; i < blocks.length; i++){
    if (blocks[i].textContent != "X" && blocks[i].textContent != "O") {
        fullBoard = false;
        break;
    }
}

// Determining that the board if FULL, we got a tie
if (fullBoard == true) {
    alert("Cat's Game");
    return;
}
}
// this function takes in a player ("X" or "O")  and checks if that player won in one of the games 
// horizontal, vertical, or diagonal
function checkWin(player) {
    if (checkHorizontals(player) || checkVerticals(player) || checkDiagonals(player)) {
    alert("Winner: " + player);
    return;
    }
}

function checkHorizontals(player) {
    if(player == blocks[0].textContent && player == blocks[1].textContent && player == blocks[2].textContent) {
        return true;
    }


    if(player == blocks[3].textContent && player == blocks[4].textContent && player == blocks[5].textContent) {
        return true;
    }

    if(player == blocks[6].textContent && player == blocks[7].textContent && player == blocks[8].textContent) {
        return true;
    }

    return false; 
    }

function checkDiagonals(player) {
    if(player == blocks[0].textContent && player == blocks[4].textContent && player == blocks[8].textContent) {
        return true;
    }
    if(player == blocks[2].textContent && player == blocks[4].textContent && player == blocks[6].textContent) {
        return true;
    }

    return false;
}

function checkVerticals(player) {
    if(player == blocks[0].textContent && player == blocks[3].textContent && player == blocks[6].textContent) {
      return true;
    }
   
    if(player == blocks[1].textContent && player == blocks[4].textContent && player == blocks[7].textContent) {
      return true;
    }
   
    if(player == blocks[2].textContent && player == blocks[5].textContent && player == blocks[8].textContent) {
      return true;
    }
   
    return false;
  }

  // FUNCTIONS FOR THE "START GAME" & "RESET"
  // 1. "Start Game" - 

//   function onclick(player) {

//   }