
let statusDiv = document.querySelector(".status");
let resetDiv = document.querySelector(".reset");
let cellDivs = document.querySelector(".game-grid");

function TicTacToeGame() {
    const board = new Board();
    const playerX = new playerX();
    const playerO = new playerO();
    let turn = 0;

    this.start = function() {

    }
}

// Event Handlers

function refreshPage() {
    window.location.reload();
    console.log()
} 


function board() {
    this.positions = Array.from(document.querySelectorAll(".game-grid"));
}

function playerX() {

}

function.playerO() {

}




function handleClick(target) {
    turns++;
    // console.log(target);
    if (turns % 2 === 0) {
    playerX.push(target.id)
    console.log(playerX);
    target.classList.add("xMoves");
    victoryCheck(playerX);
    //player X moves 
    } else {
    playerO.push(target.id)
    console.log("playerO", playerO);
    target.classList.add("oMoves");
    victoryCheck(playerO);
    // player O moves 
       }
    }

const handleTap = (e) => {
    const classList = e.target.classList;
    // console.log(e.target);
    const location = classList[1];

    if (classList[2] === "x" || classList[2] === "o") {
        return:
    }
    if (xIsNext === true) {
        classList.add("x");
        xIsNext = !xIsNext;
    } else {
        classList.add("o)";
        xIsNext = !xIsNext;)
    }
};


function checkForWin() {
    const choices = ["top-left", "top-middle", "top-right", "middle-left", "middle-middle", "middle-right", "bottom-left", "bottom-middle", "bottom-right"];
    const index = Math.floor(Math.random() * 3);

    if ((choices[index] === "top-left" && choices[index] === "top-middle" && choices[index] === "top-right")
}





document.addEventListener("DOMContentLoaded", (e) => {

})

