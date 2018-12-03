// here be me global variables
var t3boxes = document.querySelectorAll(".t3box");
var whoseMove = document.querySelector(".whose-move");

var t3Grid = {
    row1: [t3boxes[0], t3boxes[1], t3boxes[2]],
    row2: [t3boxes[3], t3boxes[4], t3boxes[5]],
    row3: [t3boxes[6], t3boxes[7], t3boxes[8]],
    column1: [t3boxes[0], t3boxes[3], t3boxes[6]],
    column2: [t3boxes[1], t3boxes[4], t3boxes[7]],
    column3: [t3boxes[2], t3boxes[5], t3boxes[8]],
    diagonal1: [t3boxes[0], t3boxes[4], t3boxes[8]],
    diagonal2: [t3boxes[2], t3boxes[4], t3boxes[6]]
}
var counters = [    
    xPanel = {
        img : document.querySelector("#x-panel[img]"),
        Wins : document.querySelector("#x-wins span"),
        Losses : document.querySelector("#x-losses span"),
        Draws : document.querySelector("#x-draw span")
    },
    oPanel = {
        img : document.querySelector("#o-panel[img]"),
        Wins : document.querySelector("#o-wins span"),
        Losses : document.querySelector("#o-losses span"),
        Draws : document.querySelector("#o-draw span")
    }];

var numOfClicks = 0;
var xWins = oWins = ties = 0;

document.addEventListener("DOMContentLoaded", function(){
    // DOM stuff here
    start();
    document.getElementById("try-again").addEventListener("click", clearBoard); 
    document.getElementById("clear-game").addEventListener("click", clearGame);
});

// Set up the game
function start () {
    addBoxListeners();
}

// Add click listeners
function addBoxListeners () {
    for (let i = 0; i < t3boxes.length; i++) {
        t3boxes[i].addEventListener("click", click);
    }
}

function removeBoxListeners () {
    for (let i = 0; i < t3boxes.length; i++) {
        t3boxes[i].removeEventListener("click", click);
    }
}

// Click function
function click () {
    if (this.getAttribute("clicked") === "true") {
        return;
    }
    //set clicked status to "clicked"
    this.setAttribute("clicked", "true");

    //click x or o
    if (numOfClicks % 2 === 0) {
        this.setAttribute("clicked-x", "true");
        whoseMove.textContent = "It's O's move";
    } else {
        this.setAttribute("clicked-o", "true");
        whoseMove.textContent = "It's X's move";
    }

    numOfClicks += 1;

    // Time to check for win
    if (numOfClicks >= 5) {
        var winX = checkForWinX();
        var winO = checkForWinO();
        // Stop the game
        if (winX === "true" || winO === "true" ) {
            removeBoxListeners();
            console.log("game over");
        } else if (numOfClicks == 9 && winX !== "true" && winO !== "true") {
            removeBoxListeners();
            console.log("it's a tie!");
            ties += 1;
            counters[0].Draws.textContent = ties;
            counters[1].Draws.textContent = ties;
            whoseMove.textContent = "It's a tie!";
        }
    }
}

//Check for win situations INCOMPLETE
function checkForWinX () {
    var win;
    for (var key in t3Grid) {
        win = "true";
        for (let i = 0; i < t3Grid[key].length; i++) {
            if (t3Grid[key][i].getAttribute("clicked") === "false") {
                win = "false";
            } else if (t3Grid[key][i].getAttribute("clicked-x") === "false") {
                win = "false";
            }
        }
        if (win === "true") {
            // Announce the win
            console.log("It's a win for X!");
            // Highlight the blocks
            console.log(key);
            //plus up the counters
            xWins += 1;
            counters[0].Wins.textContent = xWins;
            counters[1].Losses.textContent = xWins;
            whoseMove.textContent = "X Wins the game!"
            return "true";
        }
    }
}

function checkForWinO () {
    var win;
    for (var key in t3Grid) {
        win = "true";
        for (let i = 0; i < t3Grid[key].length; i++) {
            if (t3Grid[key][i].getAttribute("clicked") === "false") {
                win = "false";
            } else if (t3Grid[key][i].getAttribute("clicked-o") === "false") {
                win = "false";
            }
        }
        if (win === "true") {
            console.log("It's a win for O!");
            console.log(key);
            oWins += 1;
            counters[0].Losses.textContent = oWins
            counters[1].Wins.textContent = oWins;
            whoseMove.textContent = "O wins the game!";
            return "true";
        }
    }
}

function clearBoard () {
    for (let i = 0; i < t3boxes.length; i++) {
        t3boxes[i].setAttribute("clicked", "false");
        t3boxes[i].setAttribute("clicked-x", "false");
        t3boxes[i].setAttribute("clicked-o", "false"); 
    }
    numOfClicks = 0;
    // Checking if the clear clears num of clicks
    document.querySelector(".whose-move").textContent = "It's X's move";
    start();
}

function clearGame () {
    clearBoard();
    xWins = oWins = ties = 0;
    for (var i = 0; i < counters.length; i++) {
        counters[i].Wins.textContent = "0";
        counters[i].Losses.textContent = "0";
        counters[i].Draws.textContent = "0";
    }
}