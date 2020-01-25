// console.log("This is a test.");

// VARIABLES

//used to indicate whether it is X's or O's turn
// let turnDisplay = document. call the .turnIndicator class <p> tag’s innerText & update accordingly
let turnDisplay = document.querySelector(".turnIndicator").innerText;
// console.log(turnDisplay);

//used to determine whose turn it is in conjunction with updateDisplay() and the turnDisplay variable
// let moveCount = odd or even, and draw either an X or an O (can use modulus % 2 to determine with an if statement)
let moveCount = 1;

// tie variable to help determine whether a tie has occurred
let tieVariable = 0;

let xWins = 0;
let oWins = 0;
let tieCount = 0;

// ARRAY

//initializes a boardContents where neither X nor O is selected
//when X is selected, the value will change to 1 for the corresponding box
//boxes are listed in the array from top left to top right, mid left to mid right, and bottom left to bottom right: like reading a book
//when O is selected, the value changes to 2 in this array for the corresponding box
let boardContents = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// FUNCTIONS
let boxClickHandler = function(e) {
    // mark either an X or an O in the correct box according to the moveCount variable
    if (moveCount % 2 == 1 && !e.target.classList.contains("x-selected") && (!e.target.classList.contains("o-selected"))) {
        //insert .x-selected class into the div with the id of top-left-box
        e.target.classList.add("x-selected");
        updateBoardContentsX(e.target.id);
        moveCount++;
        checkWin();
    } else if (moveCount % 2 == 0 && !e.target.classList.contains("x-selected") && (!e.target.classList.contains("o-selected"))) {
        //insert .x-selected class into the div with the id of top-left-box
        e.target.classList.add("o-selected");
        updateBoardContentsO(e.target.id);
        moveCount++;
        checkWin();
    } else {};
        // add the appropriate Javascript class to the corresponding cell that was clicked
            // if moveCount was odd, .x-selected should be added to the class list
            // else .o-selected should be added
    // needs to appropriately change the value in the boardContents array at the appropriate index prior to checkWin()
    // needs to disable the click event listener once it has been clicked
    // increase the moveCount by 1
    // execute checkWin()
};

let updateBoardContentsX = function(selectedBox) {
    boardContents[selectedBox - 1] = 1
};

let updateBoardContentsO = function(selectedBox) {
    boardContents[selectedBox - 1] = 2
};


let updateTurn = function() {
    //	checks the moveCount variable and sets the .turnIndicator class <p> tag’s innerText equal to the appropriate message with DOM manipulation
		// (document.   …)
    // the appropriate messages should be something like, “It is X’s turn” or “It is O’s turn”
    if (moveCount % 2 == 1) {
        document.querySelector(".turnIndicator").innerText = "It is X's turn."
    } else if (moveCount % 2 == 0) {
        document.querySelector(".turnIndicator").innerText = "It is O's turn."
    } else {
        console.log("There has been an error!")
    }
};

let checkWin = function() {
    // checks to see if .X or .O has won the game & if so executes win() or lose()
        // check to see if won by searching the boardContents array for the eight possible win conditions for .X winning and the 8 possible wins for .O
            // you check by seeing if the specific set of elements in the array indexes match the win conditions
    // if no more possible cells can be selected && neither .X nor .O has won, game is a tie ——> execute tie()
    // if checkWin() returns false, then execute updateTurn()
    
    // win conditions 1-8 for X
    // lose conditions 1-8 for O
    // check for tie conditions (none of the 16 win cases exist and all 9 boxes have either .x-selected or .o-selected class)
    // if no win or lose or toe, then: updateTurn();

    // --------------- checking for X winning --------------
    // console.log("right before check win")
    if (moveCount < 5) {
        updateTurn();
    } else if (moveCount >= 5) {
        if (boardContents[0] == 1 && boardContents[1] == 1 && boardContents[2] == 1) {
            win();
        } else if (boardContents[3] == 1 && boardContents[4] == 1 && boardContents[5] == 1) {
            win();
        } else if (boardContents[6] == 1 && boardContents[7] == 1 && boardContents[8] == 1) {
            win();
        } else if (boardContents[0] == 1 && boardContents[3] == 1 && boardContents[6] == 1) {
            win();
        } else if (boardContents[1] == 1 && boardContents[4] == 1 && boardContents[7] == 1) {
            win();
        } else if (boardContents[2] == 1 && boardContents[5] == 1 && boardContents[8] == 1) {
            win();
        } else if (boardContents[0] == 1 && boardContents[4] == 1 && boardContents[8] == 1) {
            win();
        } else if (boardContents[2] == 1 && boardContents[4] == 1 && boardContents[6] == 1) {
            win();

    // --------------- checking for O winning --------------
    // console.log("right before check lose")
    // console.log(moveCount)
    // console.log(boardContents)
        } else if (boardContents[0] == 2 && boardContents[1] == 2 && boardContents[2] == 2) {
            lose();
        } else if (boardContents[3] == 2 && boardContents[4] == 2 && boardContents[5] == 2) {
            lose();
        } else if (boardContents[6] == 2 && boardContents[7] == 2 && boardContents[8] == 2) {
            lose();
        } else if (boardContents[0] == 2 && boardContents[3] == 2 && boardContents[6] == 2) {
            lose();
        } else if (boardContents[1] == 2 && boardContents[4] == 2 && boardContents[7] == 2) {
            lose();
        } else if (boardContents[2] == 2 && boardContents[5] == 2 && boardContents[8] == 2) {
            lose();
        } else if (boardContents[0] == 2 && boardContents[4] == 2 && boardContents[8] == 2) {
            lose();
        } else if (boardContents[2] == 2 && boardContents[4] == 2 && boardContents[6] == 2) {
            lose();
        } else {
            checkTie();
        };
    } else {
        // do nothing
    };
};

let checkTie = function() {
    // --------------- checking for tie --------------
    // console.log("right before check tie")
    if (moveCount == 10 && tieVariable == 0) {
        tie();
    }


    // ------------------ updateTurn if no win, lose, or toe -------------
    else {
        updateTurn();
    };


};

let reset = function() {
    //needs to reset boardContents to its initial value of boardContents = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    // remove .X and .O classes from each cell
    // remove text that displays win, lost, or tie
    document.querySelector(".wonLostTied").innerText = "";
    document.querySelector(".turnIndicator").innerText = "It is X's turn.";
    boardContents = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let XOClasses = document.querySelectorAll(".box")
    for (w in XOClasses) {
        if (w >= 0 && w <= 8) {
            XOClasses[w].classList.remove("x-selected");
            XOClasses[w].classList.remove("o-selected");
        }
    }
    document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
    disableReset();
    moveCount = 1;
    tieVariable = 0;
};

let enableReset = function() {
    //enables reset button
    document.querySelector(".reset").disabled = false;
};

let disableReset = function() {
    //disables reset button
    document.querySelector(".reset").disabled = true;
}

let win = function() {
    //should change tie variable to value of 1
        // execute when .X wins
        // should not be able to add .X or .O classes to empty cells (remove all eventListeners)
        // displays win somewhere
        // enableReset()
        // and create event listener for clicking reset button
    tieVariable = 1;
    document.querySelector(".gameboard").removeEventListener("click", boxClickHandler);
    document.querySelector(".wonLostTied").innerText = "X won the game!"
    document.querySelector(".turnIndicator").innerText = ""
    enableReset();
    document.querySelector(".reset").addEventListener("click", reset);
    xWins++;
    document.querySelector(".xWinCount").innerText = xWins;
};

let lose = function() {
    //should change tie variable to value of 2
    tieVariable = 2;
    document.querySelector(".gameboard").removeEventListener("click", boxClickHandler);
    document.querySelector(".wonLostTied").innerText = "O won the game! Better luck next time."
    document.querySelector(".turnIndicator").innerText = ""
    enableReset();
    document.querySelector(".reset").addEventListener("click", reset);
    oWins++;
    document.querySelector(".oWinCount").innerText = oWins;
};

let tie = function() {
    //
    document.querySelector(".gameboard").removeEventListener("click", boxClickHandler);
    document.querySelector(".wonLostTied").innerText = "X and O tied"
    document.querySelector(".turnIndicator").innerText = ""
    enableReset();
    document.querySelector(".reset").addEventListener("click", reset);
    tieCount++;
    document.querySelector(".tieCount").innerText = tieCount;
};




// DOM Content Loaded


document.addEventListener("DOMContentLoaded", function(){
    // placing eventListeners here
    document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
    document.querySelector(".xWinCount").innerText = xWins;
    document.querySelector(".oWinCount").innerText = oWins;
    document.querySelector(".tieCount").innerText = tieCount;
});