//Global variables
let turn = 1;
let board = document.querySelectorAll("#board .box");
let reset = document.getElementById('reset');
let again = document.getElementById('again');
let message = document.getElementById('message');

// function to play each turn
// Method 1: using for each to select box, add even listener and mark X or 0

for (let box of board) {
    box.addEventListener('click', (e) => {
        if (turn % 2 === 0 && turn <= 9) {
            box.textContent = "O";
            console.log("turn:" + turn)
        } else if (turn <= 9) {
            box.textContent = "X"
            console.log("turn:" + turn)
        }
        turn++;
    })
}




    //function to reset turn
    const resetTurn = () => {
        turn = 1;
    }
    //function to reset board
    const resetBoard = () => {
        for (let box of board) {
            box.textContent = '';
            resetTurn();
        }
    }
    //attaching reset function to reset button
    reset.addEventListener('click', resetBoard);




// TODO: find a better way to reference the box b/c right now box variables isn't global
//prevent player from selecting an occupied cell