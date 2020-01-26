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
    boardContents[selectedBox - 1] = 1;
};

let updateBoardContentsO = function(selectedBox) {
    boardContents[selectedBox - 1] = 2;
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
        if (moveCount % 2 == 1) {
            document.querySelector(".gameboard").removeEventListener("click", boxClickHandler);
            // deprecated for smartAI function
            // setTimeout(randomAI, 500);
            setTimeout(smartAISecondMove, 500);
        } else {
            document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
        }
    } else {
        if (boardContents[0] == 1 && boardContents[1] == 1 && boardContents[2] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "112px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[3] == 1 && boardContents[4] == 1 && boardContents[5] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "216px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[6] == 1 && boardContents[7] == 1 && boardContents[8] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "320px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[0] == 1 && boardContents[3] == 1 && boardContents[6] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "332px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[1] == 1 && boardContents[4] == 1 && boardContents[7] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "436px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[2] == 1 && boardContents[5] == 1 && boardContents[8] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "540px";
            document.querySelector(".line").style.width = "300px";
            win();
        } else if (boardContents[0] == 1 && boardContents[4] == 1 && boardContents[8] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "213px";
            document.querySelector(".line").style.transform = "rotate(45deg)";
            document.querySelector(".line").style.left = "400px";
            document.querySelector(".line").style.width = "350px";
            win();
        } else if (boardContents[2] == 1 && boardContents[4] == 1 && boardContents[6] == 1) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(194, 20, 20, .9)";
            document.querySelector(".line").style.top = "210px";
            document.querySelector(".line").style.transform = "rotate(-45deg)";
            document.querySelector(".line").style.left = "385px";
            document.querySelector(".line").style.width = "375px";
            win();

    // --------------- checking for O winning --------------
    // console.log("right before check lose")
    // console.log(moveCount)
    // console.log(boardContents)
        } else if (boardContents[0] == 2 && boardContents[1] == 2 && boardContents[2] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "112px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[3] == 2 && boardContents[4] == 2 && boardContents[5] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "216px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[6] == 2 && boardContents[7] == 2 && boardContents[8] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "320px";
            document.querySelector(".line").style.transform = "rotate(0deg)";
            document.querySelector(".line").style.left = "426px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[0] == 2 && boardContents[3] == 2 && boardContents[6] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "332px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[1] == 2 && boardContents[4] == 2 && boardContents[7] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "436px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[2] == 2 && boardContents[5] == 2 && boardContents[8] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "222px";
            document.querySelector(".line").style.transform = "rotate(90deg)";
            document.querySelector(".line").style.left = "540px";
            document.querySelector(".line").style.width = "300px";
            lose();
        } else if (boardContents[0] == 2 && boardContents[4] == 2 && boardContents[8] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "213px";
            document.querySelector(".line").style.transform = "rotate(45deg)";
            document.querySelector(".line").style.left = "400px";
            document.querySelector(".line").style.width = "365px";
            lose();
        } else if (boardContents[2] == 2 && boardContents[4] == 2 && boardContents[6] == 2) {
            document.querySelector(".line").style.borderBottom = "6px solid rgba(9, 9, 184, .9)";
            document.querySelector(".line").style.top = "205px";
            document.querySelector(".line").style.transform = "rotate(-45deg)";
            document.querySelector(".line").style.left = "402px";
            document.querySelector(".line").style.width = "350px";
            lose();
        } else {
            checkTie();
        };
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
        if (moveCount % 2 == 1) {
            document.querySelector(".gameboard").removeEventListener("click", boxClickHandler);
            setTimeout(smartAIThirdMove, 500);
            // console.log("right after starting smartAIThirdMove(): nested in checkTie()")
            // setTimeout(randomAI, 500);
        } else {
            document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
        }
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
    // line below deprecated as AI will always start first as player X
    // document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
    disableReset();
    moveCount = 1;
    tieVariable = 0;
    document.querySelector(".line").style.borderBottom = "none";
    document.querySelector(".line").style.top = "0px";
    document.querySelector(".line").style.transform = "rotate(0deg)";
    document.querySelector(".line").style.left = "0px";
    document.querySelector(".line").style.width = "0px";
    // setTimeout(randomAI, 500);
    setTimeout(smartAIStart, 500);
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
    document.querySelector(".wonLostTied").innerText = "X won the game :("
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
    document.querySelector(".wonLostTied").innerText = "O won the game! :)"
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

// decided not to deprecate as smartAI needs to choose something when a TIE is inevitable
let randomAI = function() {
    console.log("randomAI() enacting")
    let randomBox = Math.floor(Math.random() * 9);
    if (boardContents[randomBox] == 0) {
        // console.log(document.getElementsByClassName("box")[randomBox])
        document.getElementsByClassName("box")[randomBox].classList.add("x-selected");
        updateBoardContentsX(randomBox + 1);
        moveCount++;
        checkWin();
    } else {
        randomAI();
    }
}

let smartAIStart = function() {
    document.getElementsByClassName("box")[4].classList.add("x-selected");
    updateBoardContentsX(5);
    moveCount++;
    checkWin();
}

let smartAISecondMove = function() {
    // smartAI will automatically choose center on the first turn; the next choice is to choose one of the four possible corners if available
        // keep in mind that the O player might choose one of the corners, so the corner must be checked to make sure it has not been chosen yet
    console.log("Starting smartAISecondMove()")
    let smartBox = Math.floor(Math.random() * 4);
    if (smartBox == 0) {
        if (boardContents[0] == 0) {
        document.getElementsByClassName("box")[0].classList.add("x-selected");
        updateBoardContentsX(1);
        moveCount++;
        checkWin();
        } else {
            //if all four corners are taken, choose something
            if (boardContents[0] != 0 && boardContents[2] != 0 && boardContents[6] != 0 && boardContents[8] != 0) {
                // choose random?
                randomAI();
            } else {
                smartAISecondMove();
            }
        }
    } else if (smartBox == 1) {
        if (boardContents[2] == 0) {
        document.getElementsByClassName("box")[2].classList.add("x-selected");
        updateBoardContentsX(3);
        moveCount++;
        checkWin();
        } else {
            //if all four corners are taken, choose something
            if (boardContents[0] != 0 && boardContents[2] != 0 && boardContents[6] != 0 && boardContents[8] != 0) {
                // choose random?
                randomAI();
            } else {
                smartAISecondMove();
            }
        }
    } else if (smartBox == 2) {
        if (boardContents[6] == 0) {
        document.getElementsByClassName("box")[6].classList.add("x-selected");
        updateBoardContentsX(7);
        moveCount++;
        checkWin();
        } else {
            //if all four corners are taken, choose something
            if (boardContents[0] != 0 && boardContents[2] != 0 && boardContents[6] != 0 && boardContents[8] != 0) {
                // choose random?
                randomAI();
            } else {
                smartAISecondMove();
            }
        }
    } else {
        if (boardContents[8] == 0) {
        document.getElementsByClassName("box")[8].classList.add("x-selected");
        updateBoardContentsX(9);
        moveCount++;
        checkWin();
        } else {
            //if all four corners are taken, choose something
            if (boardContents[0] != 0 && boardContents[2] != 0 && boardContents[6] != 0 && boardContents[8] != 0) {
                // choose random?
                randomAI();
            } else {
                smartAISecondMove();
            }
        }
    }
}

let smartAIThirdMove = function() {
    console.log("right after starting smartAIThirdMove()")
    smartAICheckWin1();
}

let smartAICheckWin1 = function () {
    //breaking out smartAIThirdMove function
    // smartAI needs to choose the square to win if available
    if ((boardContents[0] == 1 && boardContents[1] == 1) || (boardContents[0] == 1 && boardContents[2] == 1) || (boardContents[1] == 1 && boardContents[2] == 1)) {
        if (boardContents[0] == 2 || boardContents[1] == 2 || boardContents[2] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin2();
        } else {
            document.getElementsByClassName("box")[0].classList.add("x-selected");
            document.getElementsByClassName("box")[1].classList.add("x-selected");
            document.getElementsByClassName("box")[2].classList.add("x-selected");
            updateBoardContentsX(1);
            updateBoardContentsX(2);
            updateBoardContentsX(3);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin2();
    }
}

let smartAICheckWin2 = function () {
    if ((boardContents[3] == 1 && boardContents[4] == 1) || (boardContents[3] == 1 && boardContents[5] == 1) || (boardContents[4] == 1 && boardContents[5] == 1)) {
        if (boardContents[3] == 2 || boardContents[4] == 2 || boardContents[5] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin3();
        } else {
            document.getElementsByClassName("box")[3].classList.add("x-selected");
            document.getElementsByClassName("box")[4].classList.add("x-selected");
            document.getElementsByClassName("box")[5].classList.add("x-selected");
            updateBoardContentsX(4);
            updateBoardContentsX(5);
            updateBoardContentsX(6);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin3();
    }
}

let smartAICheckWin3 = function () {
    if ((boardContents[6] == 1 && boardContents[7] == 1) || (boardContents[6] == 1 && boardContents[8] == 1) || (boardContents[7] == 1 && boardContents[8] == 1)) {
        if (boardContents[6] == 2 || boardContents[7] == 2 || boardContents[8] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin4();
        } else {
            document.getElementsByClassName("box")[6].classList.add("x-selected");
            document.getElementsByClassName("box")[7].classList.add("x-selected");
            document.getElementsByClassName("box")[8].classList.add("x-selected");
            updateBoardContentsX(7);
            updateBoardContentsX(8);
            updateBoardContentsX(9);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin4();
    }
}

let smartAICheckWin4 = function () {
    if ((boardContents[0] == 1 && boardContents[3] == 1) || (boardContents[0] == 1 && boardContents[6] == 1) || (boardContents[3] == 1 && boardContents[6] == 1)) {
        if (boardContents[0] == 2 || boardContents[3] == 2 || boardContents[6] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin5();
        } else {
            document.getElementsByClassName("box")[0].classList.add("x-selected");
            document.getElementsByClassName("box")[3].classList.add("x-selected");
            document.getElementsByClassName("box")[6].classList.add("x-selected");
            updateBoardContentsX(1);
            updateBoardContentsX(4);
            updateBoardContentsX(7);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin5();
    }
}

let smartAICheckWin5 = function () {
    if ((boardContents[1] == 1 && boardContents[4] == 1) || (boardContents[1] == 1 && boardContents[7] == 1) || (boardContents[4] == 1 && boardContents[7] == 1)) {
        if (boardContents[1] == 2 || boardContents[4] == 2 || boardContents[7] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin6();
        } else {
            document.getElementsByClassName("box")[1].classList.add("x-selected");
            document.getElementsByClassName("box")[4].classList.add("x-selected");
            document.getElementsByClassName("box")[7].classList.add("x-selected");
            updateBoardContentsX(2);
            updateBoardContentsX(5);
            updateBoardContentsX(8);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin6();
    }
}

let smartAICheckWin6 = function () {
    if ((boardContents[2] == 1 && boardContents[5] == 1) || (boardContents[2] == 1 && boardContents[8] == 1) || (boardContents[5] == 1 && boardContents[8] == 1)) {
        if (boardContents[2] == 2 || boardContents[5] == 2 || boardContents[8] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin7();
        } else {
            document.getElementsByClassName("box")[2].classList.add("x-selected");
            document.getElementsByClassName("box")[5].classList.add("x-selected");
            document.getElementsByClassName("box")[8].classList.add("x-selected");
            updateBoardContentsX(3);
            updateBoardContentsX(6);
            updateBoardContentsX(9);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin7();
    }
}

let smartAICheckWin7 = function () {
    if ((boardContents[0] == 1 && boardContents[4] == 1) || (boardContents[0] == 1 && boardContents[8] == 1) || (boardContents[4] == 1 && boardContents[8] == 1)) {
        if (boardContents[0] == 2 || boardContents[4] == 2 || boardContents[8] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckWin8();
        } else {
            document.getElementsByClassName("box")[0].classList.add("x-selected");
            document.getElementsByClassName("box")[4].classList.add("x-selected");
            document.getElementsByClassName("box")[8].classList.add("x-selected");
            updateBoardContentsX(1);
            updateBoardContentsX(5);
            updateBoardContentsX(9);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckWin8();
    }
}

let smartAICheckWin8 = function () {
    if ((boardContents[2] == 1 && boardContents[4] == 1) || (boardContents[2] == 1 && boardContents[6] == 1) || (boardContents[4] == 1 && boardContents[6] == 1)) {
        if (boardContents[2] == 2 || boardContents[4] == 2 || boardContents[6] == 2) {
            //needs to make sure that O does not have the one that is not selected of the set of three
            smartAICheckLose();
        } else {
            document.getElementsByClassName("box")[2].classList.add("x-selected");
            document.getElementsByClassName("box")[4].classList.add("x-selected");
            document.getElementsByClassName("box")[6].classList.add("x-selected");
            updateBoardContentsX(3);
            updateBoardContentsX(5);
            updateBoardContentsX(7);
            moveCount++;
            checkWin();
        }
    } else {
        smartAICheckLose();
    }
}

let smartAICheckLose = function() {
    //breaking out smartAIThirdMove funciton
    //AI needs to choose square to prevent O from winning if O is one move away
    console.log("right after starting smartAICheckLose()")
    if (boardContents[0] == 2 && boardContents[1] == 2 && boardContents[2] == 0) {
        document.getElementsByClassName("box")[2].classList.add("x-selected");
        updateBoardContentsX(3);
        moveCount++;
        checkWin();
    } else if (boardContents[0] == 2 && boardContents[2] == 2 && boardContents[1] == 0) {
        document.getElementsByClassName("box")[1].classList.add("x-selected");
        updateBoardContentsX(2);
        moveCount++;
        checkWin();
    } else if (boardContents[1] == 2 && boardContents[2] == 2 && boardContents[0] == 0) {
        document.getElementsByClassName("box")[0].classList.add("x-selected");
        updateBoardContentsX(1);
        moveCount++;
        checkWin();
    } else if (boardContents[3] == 2 && boardContents[4] == 2 && boardContents[5] == 0) {
        document.getElementsByClassName("box")[5].classList.add("x-selected");
        updateBoardContentsX(6);
        moveCount++;
        checkWin();
    } else if (boardContents[3] == 2 && boardContents[5] == 2 && boardContents[4] == 0) {
        document.getElementsByClassName("box")[4].classList.add("x-selected");
        updateBoardContentsX(5);
        moveCount++;
        checkWin();
    } else if (boardContents[4] == 2 && boardContents[5] == 2 && boardContents[3] == 0) {
        document.getElementsByClassName("box")[3].classList.add("x-selected");
        updateBoardContentsX(4);
        moveCount++;
        checkWin();
    } else if (boardContents[6] == 2 && boardContents[7] == 2 && boardContents[8] == 0) {
        document.getElementsByClassName("box")[8].classList.add("x-selected");
        updateBoardContentsX(9);
        moveCount++;
        checkWin();
    } else if (boardContents[6] == 2 && boardContents[8] == 2 && boardContents[7] == 0) {
        document.getElementsByClassName("box")[7].classList.add("x-selected");
        updateBoardContentsX(8);
        moveCount++;
        checkWin();
    } else if (boardContents[7] == 2 && boardContents[8] == 2 && boardContents[6] == 0) {
        document.getElementsByClassName("box")[6].classList.add("x-selected");
        updateBoardContentsX(7);
        moveCount++;
        checkWin();
    } else if (boardContents[0] == 2 && boardContents[3] == 2 && boardContents[6] == 0) {
        document.getElementsByClassName("box")[6].classList.add("x-selected");
        updateBoardContentsX(7);
        moveCount++;
        checkWin();
    } else if (boardContents[0] == 2 && boardContents[6] == 2 && boardContents[3] == 0) {
        document.getElementsByClassName("box")[3].classList.add("x-selected");
        updateBoardContentsX(4);
        moveCount++;
        checkWin();
    } else if (boardContents[3] == 2 && boardContents[6] == 2 && boardContents[0] == 0) {
        document.getElementsByClassName("box")[0].classList.add("x-selected");
        updateBoardContentsX(1);
        moveCount++;
        checkWin();
    } else if (boardContents[1] == 2 && boardContents[4] == 2 && boardContents[7] == 0) {
        document.getElementsByClassName("box")[7].classList.add("x-selected");
        updateBoardContentsX(8);
        moveCount++;
        checkWin();
    } else if (boardContents[1] == 2 && boardContents[7] == 2 && boardContents[4] == 0) {
        document.getElementsByClassName("box")[4].classList.add("x-selected");
        updateBoardContentsX(5);
        moveCount++;
        checkWin();
    } else if (boardContents[4] == 2 && boardContents[7] == 2 && boardContents[1] == 0) {
        document.getElementsByClassName("box")[1].classList.add("x-selected");
        updateBoardContentsX(2);
        moveCount++;
        checkWin();
    } else if (boardContents[2] == 2 && boardContents[5] == 2 && boardContents[8] == 0) {
        document.getElementsByClassName("box")[8].classList.add("x-selected");
        updateBoardContentsX(9);
        moveCount++;
        checkWin();
    } else if (boardContents[2] == 2 && boardContents[8] == 2 && boardContents[5] == 0) {
        document.getElementsByClassName("box")[5].classList.add("x-selected");
        updateBoardContentsX(6);
        moveCount++;
        checkWin();
    } else if (boardContents[5] == 2 && boardContents[8] == 2 && boardContents[2] == 0) {
        document.getElementsByClassName("box")[2].classList.add("x-selected");
        updateBoardContentsX(3);
        moveCount++;
        checkWin();
    } else if (boardContents[0] == 2 && boardContents[4] == 2 && boardContents[8] == 0) {
        document.getElementsByClassName("box")[8].classList.add("x-selected");
        updateBoardContentsX(9);
        moveCount++;
        checkWin();
    } else if (boardContents[0] == 2 && boardContents[8] == 2 && boardContents[4] == 0) {
        document.getElementsByClassName("box")[4].classList.add("x-selected");
        updateBoardContentsX(5);
        moveCount++;
        checkWin();
    } else if (boardContents[4] == 2 && boardContents[8] == 2 && boardContents[0] == 0) {
        document.getElementsByClassName("box")[0].classList.add("x-selected");
        updateBoardContentsX(1);
        moveCount++;
        checkWin();
    } else if (boardContents[2] == 2 && boardContents[4] == 2 && boardContents[6] == 0) {
        document.getElementsByClassName("box")[6].classList.add("x-selected");
        updateBoardContentsX(7);
        moveCount++;
        checkWin();
    } else if (boardContents[2] == 2 && boardContents[6] == 2 && boardContents[4] == 0) {
        document.getElementsByClassName("box")[4].classList.add("x-selected");
        updateBoardContentsX(5);
        moveCount++;
        checkWin();
    } else if (boardContents[4] == 2 && boardContents[6] == 2 && boardContents[2] == 0) {
        document.getElementsByClassName("box")[2].classList.add("x-selected");
        updateBoardContentsX(3);
        moveCount++;
        checkWin();
    }
    // also needs suggestions for if neither X nor O is one move away
    else {
        smartAISecondMove();
    }
}




// DOM Content Loaded


document.addEventListener("DOMContentLoaded", function(){
    // placing eventListeners here
//event listener here deprecated as AI will start as player X
    // document.querySelector(".gameboard").addEventListener("click", boxClickHandler);
    document.querySelector(".xWinCount").innerText = xWins;
    document.querySelector(".oWinCount").innerText = oWins;
    document.querySelector(".tieCount").innerText = tieCount;
    // deprecating in order to set up smartAI
    // setTimeout(randomAI, 500);
    setTimeout(smartAIStart, 500);
});