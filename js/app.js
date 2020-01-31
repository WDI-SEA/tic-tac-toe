// variable declaration for each square and other variables
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");

var board = document.querySelectorAll("#board div");
var turn = document.getElementById("turn");
var boxes = document.getElementsByClassName(".box")

var player1 = "X";
var player2 = "O";
var count = 0; // keep track of X and O clicks

// Function to start the game
function initGame() {
    console.log("starting game");
    //adding and removing event listener;
    for (const box of board) {
        if (!winner()) {
            console.log(box)
            box.addEventListener("click", checkTurn);
        }
    }
};

function checkTurn(event) {
    console.log('click')
        // Condition to prevent re-clicking on the same box
    if (event.target.innerHTML !== player1 && event.target.innerHTML !== player2) {

        // check who's turn it is
        if (count % 2 === 0 && count !== 8) { // player X
            console.log(count);
            count++;
            event.target.innerHTML = player1;
            turn.innerHTML = player2 + " Turn";
            winner();
        } else if (count % 2 !== 0 && count !== 8) { // player O
            console.log(count);
            count++;
            event.target.innerHTML = player2;
            turn.innerHTML = player1 + " Turn";
            winner();

        } else if (count % 2 === 0 && count === 8) { // check if it's a tie
            event.target.innerHTML = player2;
            console.log(count);
            turn.innerHTML = "It's a tie "
        }
    }
}

// Function to find the winner
function winner() {
    // checking for all possible outcome
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML) {
        winningBoxes(box1, box2, box3);
        //console.log("You win!");
    } else if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML) {
        winningBoxes(box4, box5, box6);
        //console.log("You win!");
    } else if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML) {
        winningBoxes(box7, box8, box9);
        //console.log("You win!");
    } else if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML) {
        winningBoxes(box1, box4, box7);
        //console.log("You win!");
    } else if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML) {
        winningBoxes(box2, box5, box8);
        //console.log("You win!");
    } else if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML) {
        winningBoxes(box3, box6, box9);
        //console.log("You win!");
    } else if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML) {
        winningBoxes(box3, box5, box7);
        // console.log("You win!");
    } else if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML) {
        winningBoxes(box1, box5, box9);
        //console.log("You win!");
    }
};

// Function to display the winning boxes
function winningBoxes(box_1, box_2, box_3) {
    box_1.classList.add("winboxes");
    box_2.classList.add("winboxes");
    box_3.classList.add("winboxes");
    turn.innerHTML = box_1.innerHTML + " WON 🥳🥳🥳"
        // stop clicking if there's a win
    for (const x of board) {
        x.removeEventListener("click", checkTurn);
    }
};

// Function to reset the game board
function reset() {
    for (var box of board) {
        box.classList.remove("winboxes");
        box.innerHTML = "";
        turn.innerHTML = "START";
        count = 0;
        box.addEventListener("click", checkTurn);
    }
};

initGame();