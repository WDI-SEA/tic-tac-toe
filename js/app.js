console.log('Hello frontend');

//---- set up your global variables and constants----//

const SQUARES = [
    {
        box: "A",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/A.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "B",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/B.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "C",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/C.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "D",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/D.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "E",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/E.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "F",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/F.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "G",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/G.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "H",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/H.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "I",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/I.png",
        xImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    }
    
    ];

console.log(SQUARES);

const WINNING = [
    'ACB', 'ABC', 'BAC', 'BCA', 'CAB', 'CBA', 'DFE', 'DEF', 'EFD', 'EDF', 'FED', 'FDE', 'GHI', 'GIH', 'HIG', 'HGI', 'IGH', 'IHG', 'ADG', 'AGD', 'DAG', 'DGA', 'GDA', 'GAD', 'BEH', 'BHE', 'EHB', 'EBH', 'HEB', 'HBE', 'CFI', 'CIF', 'FIC', 'FCI', 'IFC', 'ICF', 'AEI', 'AIE', 'EIA', 'EAI', 'IEA', 'IAE', 'CEG', 'CGE', 'EGC', 'ECG', 'GEL', 'GCE'
];

console.log(WINNING);

let xSquares = [];
let oSquares = [];

let xTurn = true;

let domResetBtn = document.querySelector(".reset");

let gameboardSquares = document.querySelectorAll(".box");
let allSquares = document.querySelectorAll(".gameboard");
let player = document.getElementById("current-player").textContent;



// ------ the meat & potatoes (event listeners)------ //

//---------- Try #1 ---------- //

// ------ A ------ //
document.getElementById("A").addEventListener("click", selectSquare);

function selectSquare() {
    if (xTurn === true) {
        gameboardSquares[0].style.background = `url( ${SQUARES[0].xImage} )`;

        //push selected square into xSquares array
        xSquares.push(SQUARES[0].box);
        console.log(xSquares);

        //create class that designates "x"
            // gameboardSquares[0].className = "x";
            // console.log(gameboardSquares[0].className);

        checkWin();

        //disable click to square
        document.getElementById("A").disabled = true;
        console.log(document.getElementById("A").disabled);

    } else {
        gameboardSquares[0].style.background = `url( ${SQUARES[0].oImage} )`;

        //push selected square into xSquares array
        oSquares.push(SQUARES[0].box);
        console.log(oSquares);

        //create class that designates "o"
            // gameboardSquares[0].className = "o";
            // console.log(gameboardSquares[0].className);

        checkWin();

        //disable click to square
        document.getElementById("A").disabled = true;
        console.log(document.getElementById("A").disabled);
    }
};



// // ------ B ------ //
// document.getElementById("B").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[1].style.background = `url( ${SQUARES[1].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[1].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[1].className = "x";
//             // console.log(gameboardSquares[1].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("B").disabled = true;
//         console.log(document.getElementById("B").disabled);

//     } else {
//         gameboardSquares[1].style.background = `url( ${SQUARES[1].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[1].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[1].className = "o";
//             // console.log(gameboardSquares[1].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("B").disabled = true;
//         console.log(document.getElementById("B").disabled);
//     }
// };



// // ------ C ------ //
// document.getElementById("C").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[2].style.background = `url( ${SQUARES[2].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[2].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[2].className = "x";
//             // console.log(gameboardSquares[2].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("C").disabled = true;
//         console.log(document.getElementById("C").disabled);

//     } else {
//         gameboardSquares[2].style.background = `url( ${SQUARES[2].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[2].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[2].className = "o";
//             // console.log(gameboardSquares[2].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("C").disabled = true;
//         console.log(document.getElementById("C").disabled);
//     }
// };



// // ------ D ------ //
// document.getElementById("D").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[3].style.background = `url( ${SQUARES[3].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[3].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[3].className = "x";
//             // console.log(gameboardSquares[3].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("D").disabled = true;
//         console.log(document.getElementById("D").disabled);

//     } else {
//         gameboardSquares[3].style.background = `url( ${SQUARES[3].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[3].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[3].className = "o";
//             // console.log(gameboardSquares[3].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("D").disabled = true;
//         console.log(document.getElementById("D").disabled);
//     }
// };



// // ------ E ------ //
// document.getElementById("E").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[4].style.background = `url( ${SQUARES[4].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[4].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[4].className = "x";
//             // console.log(gameboardSquares[4].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("E").disabled = true;
//         console.log(document.getElementById("E").disabled);

//     } else {
//         gameboardSquares[4].style.background = `url( ${SQUARES[4].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[4].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[4].className = "o";
//             // console.log(gameboardSquares[4].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("E").disabled = true;
//         console.log(document.getElementById("E").disabled);
//     }
// };



// // ------ F ------ //
// document.getElementById("F").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[5].style.background = `url( ${SQUARES[5].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[5].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[5].className = "x";
//             // console.log(gameboardSquares[5].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("F").disabled = true;
//         console.log(document.getElementById("F").disabled);

//     } else {
//         gameboardSquares[5].style.background = `url( ${SQUARES[5].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[5].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[5].className = "o";
//             // console.log(gameboardSquares[5].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("F").disabled = true;
//         console.log(document.getElementById("F").disabled);
//     }
// };



// // ------ G ------ //
// document.getElementById("G").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[6].style.background = `url( ${SQUARES[6].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[6].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[6].className = "x";
//             // console.log(gameboardSquares[6].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("G").disabled = true;
//         console.log(document.getElementById("G").disabled);

//     } else {
//         gameboardSquares[6].style.background = `url( ${SQUARES[6].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[6].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[6].className = "o";
//             // console.log(gameboardSquares[6].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("G").disabled = true;
//         console.log(document.getElementById("G").disabled);
//     }
// };



// // ------ H ------ //
// document.getElementById("H").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[7].style.background = `url( ${SQUARES[7].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[7].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[7].className = "x";
//             // console.log(gameboardSquares[7].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("H").disabled = true;
//         console.log(document.getElementById("H").disabled);

//     } else {
//         gameboardSquares[7].style.background = `url( ${SQUARES[7].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[7].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[7].className = "o";
//             // console.log(gameboardSquares[7].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("H").disabled = true;
//         console.log(document.getElementById("H").disabled);
//     }
// };



// // ------ I ------ //
// document.getElementById("I").addEventListener("click", selectSquare);

// function selectSquare() {
//     if (xTurn === true) {
//         gameboardSquares[8].style.background = `url( ${SQUARES[8].xImage} )`;

//         //push selected square into xSquares array
//         xSquares.push(SQUARES[8].box);
//         console.log(xSquares);

//         //create class that designates "x"
//             // gameboardSquares[8].className = "x";
//             // console.log(gameboardSquares[8].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("I").disabled = true;
//         console.log(document.getElementById("I").disabled);

//     } else {
//         gameboardSquares[8].style.background = `url( ${SQUARES[8].oImage} )`;

//         //push selected square into xSquares array
//         oSquares.push(SQUARES[8].box);
//         console.log(oSquares);

//         //create class that designates "o"
//             // gameboardSquares[8].className = "o";
//             // console.log(gameboardSquares[8].className);

//         checkWin();

//         //disable click to square
//         document.getElementById("I").disabled = true;
//         console.log(document.getElementById("I").disabled);
//     }
// };

// /* ------------------------------------------------------------ */


// // ---------- Try #2 ---------- //

// // ------ A ------ //
// document.querySelector(".gameboard").addEventListener("click", selectSquare);

// function selectSquare(e) {
    
//         if (xTurn === true) {
//             allSquares[e.target.id].style.background = `url( ${SQUARES[e.target.id].xImage} )`;
            
//             // testing...
//             let squareIndex = SQUARES.indexOf(e.target.id);
//             console.log("This is squareIndex: " + squareIndex);

//             //push selected square into xSquares array
//             xSquares.push(SQUARES[e.target.id].box);
//             console.log("This is the xSquares array: " + xSquares);

//             //create class that designates "x"
//                 // gameboardSquares[i].className = "x";
//                 // console.log(gameboardSquares[i].className);

//             // checkWin();

//             //disable click to square (attempt #1)
//             document.getElementById("A").disabled = true;
//             console.log(document.getElementById("A").disabled);


//         } else {
//             allSquares[e.target.id].style.background = `url( ${SQUARES[e.target.id].oImage} )`;

//             // testing...
//             let squareIndex = SQUARES.indexOf(e.target.id);
//             console.log("This is squareIndex: " + squareIndex);

//             //push selected square into xSquares array
//             oSquares.push(SQUARES[e.target.id].box);
//             console.log("This is the oSquares array: " + oSquares);

//             //create class that designates "o"
//                 // gameboardSquares[i].className = "o";
//                 // console.log(gameboardSquares[i].className);

//             // checkWin();

//             //disable click to square (attempt #1)
//             document.getElementById("A").disabled = true;
//             console.log(document.getElementById("A").disabled);

//         }
    
// };


// --- attempt # 2 at removing event listener to disable squares after they've been clicked --- //
// document.getElementsByClassName("gameboard")[xSquares && oSquares].removeEventListener('click', selectSquare);







// ------------ Try #3 ---------- //

// let setGameboard = function() {
//     for (let i = 0; i < SQUARES.length; i++) {
//         allSquares.setAttribute("data-id", i);
//         allSquares.addEventListener("click", selectSquare);
//     };
// };

// setGameboard();

// const selectSquare = function() {
//     let squareId = allSquares.getAttribute("data-id");
//     if (xTurn === true) {
//         xSquares.push(SQUARE[squareId].box);
//         allSquares[squareId].style.background = `url( ${SQUARES[squareId].xImage} )`;
//         checkWin();
//     } else {
//         oSquares.push(SQUARE[squareId].box);
//         allSquares[squareId].style.background = `url( ${SQUARES[squareId].oImage} )`;
//         checkWin();
//     };
// }






// ------ Check for Win ------ //


let checkWin = function() {

    console.log("checking for win");
    //if xTurn = true
        //compare if xSquares array == any element in WINNING array
        //https://www.w3schools.com/jsref/jsref_includes_array.asp    
    if (xTurn === true) {
        for (i = 0; i < WINNING.length; i++) { 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

            // let win = WINNING.indexOf(xSquares);
            let win = 1;
            console.log(win);

        //if == returns true, then wonGame()
            if (win > 0) {
                console.log("trouble with checkWin is here");
                wonGame();

        //else if == returns false && all squares clicked then catsGame()
            } else if (win < 0 &&  allSquares.disabled === true) {
                
                catsGame();
    
        // else == returns false && all squares ! clicked then switchPlayer()
            } else if (win < 0 && allSquares.disabled === false) {
                
                switchPlayer();
            }; 
            break;
        };           
            
    } else if (xTurn === false) {
    //else if xTurn = false
        //compare if oSquares array == any element in WINNING array
        for (i = 0; i < WINNING.length; i++) { 
            let win = WINNING.includes(oSquares);
    
        //if == returns true, then wonGame()
            if (win > 0) {
                wonGame();

        //else if == returns false && all squares clicked then catsGame()
            } else if (win < 0 &&  allSquares.disabled === true) {
                catsGame();
    
        // else == returns false && all squares ! clicked then switchPlayer()
            } else if (win < 0 && allSquares.disabled === false) {
                switchPlayer();
            };
            break;
        };           
    };
};



// ------ resetGame() ------ //

let resetGame = function() {
    //set arrays to clear (array = [])
    xSquares = [];
    oSquares = [];

    //set images to initial (img corresponding to square)
    for (i = 0; i < SQUARES.length; i++) {
        gameboardSquares[i].style.background = `url( ${SQUARES[i].image} )`;
    };

    //set xTurn = false
    xTurn = false;

    //domResetBtn.disabled = true;
    domResetBtn.disabled = true;

    //print("Customer's turn")
    document.getElementById("current-player").textContent = "Customer's turn!";
}


// ------ gameInit() ------ //

let gameInit = function() {
    
    for (i = 0; i < SQUARES.length; i++) {
        gameboardSquares[i].style.background = `url( ${SQUARES[i].image} )`;
        console.log(gameboardSquares[i]);
        console.log("hi");
    };

    document.getElementById("current-player").textContent = "Customer's turn!";

    // document.querySelector(".gameboard").addEventListener("click", selectSquare);
    
};

gameInit();


// ------ reaction ()s ------//

let wonGame = function() {
    //reset button enable
        domResetBtn.disabled = false;

    //disable all click
        for ( i = 0; i < SQUARES.length; i++) {
            // document.getElementById(i).removeEventListener('click', selectSquare);
        };
    //if xTurn is true or false provide corect alert ()
        if (xTurn === true) {
            document.getElementById("current-player").textContent = "Cafe, you win! Though you might want to check, I think your Wi-Fi is down...";
        } else {
            document.getElementById("current-player").textContent = "Congratulations Customer! You can now surf the web to your heart's content";
        };
    
};

let catsGame = function() {
    //reset button enable
        domResetBtn.disabled = false;

    //disable all click
        for ( i = 0; i < SQUARES.length; i++) {
        // document.getElementById(i).removeEventListener('click', selectSquare);
        };

    //alert()
        document.getElementById("current-player").textContent = "Cats game! No Wi-Fi or coffee purchase for either of you. Meow run along, or try again.";
};

let switchPlayer = function() {

    console.log("switching player");
    //toggle between xTurn = true/false
        //if xTurn = true then switch xTurn = false and vis versa
        if (xTurn === true) {
            xTurn = false;
        } else {
            xTurn = true;
        };

    //(if) xTurn = true
        if (xTurn === true) {

        //(then) print("Cafe's turn")   
        document.getElementById("current-player").textContent = "Cafe's turn!";

        //(if) xTurn = false
        } else {
    
        //(then) print("Customer's turn")
        document.getElementById("current-player").textContent = "Customer's turn!";
        };
};


/* --- alternative ending? --- */

// let lostGame = function() {
//     //reset button enable
//     //disable click
//     //if xTurn is true
//         //alert("Bummer Cafe! looks like your customer is going to nurse one cup of coffee for six hours.")
//     //if xTurn is false
//         //alert("Bummer Customer! Guess you won't get that homework done after all.");
// };

/* --------------------------- */