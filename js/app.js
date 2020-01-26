console.log('Hello frontend');

//---- set up your global variables and constants----//

const SQUARES = [
    {
        box: "A",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/A.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "B",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/B.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "C",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/C.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "D",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/D.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "E",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/E.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "F",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/F.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "G",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/G.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "H",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/H.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "I",
        image: "/Users/monty/Desktop/SEI29/unit1/homework/homework_3/tic-tac-toe/img/I.png",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    }
    
    ];

console.log(SQUARES);

const WINNING = [
    'ACB', 'ABC', 'BAC', 'BCA', 'CAB', 'CBA', 'DFE', 'DEF', 'EFD', 'EDF', 'FED', 'FDE', 'GHI', 'GIH', 'HIG', 'HGI', 'IGH', 'IHG', 'ADG', 'AGD', 'DAG', 'DGA', 'GDA', 'GAD', 'BEH', 'BHE', 'EHB', 'EBH', 'HEB', 'HBE', 'CFI', 'CIF', 'FIC', 'FCI', 'IFC', 'ICF', 'AEI', 'AIE', 'EIA', 'EAI', 'IEA', 'IAE', 'CEG', 'CGE', 'EGC', 'ECG', 'GEL', 'GCE'
];

console.log(WINNING);

let xSquares = [];
let oSquares = [];

let xTurn = false;
let domResetBtn = document.querySelector(".reset");
let gameboardSquares = document.querySelectorAll(".box");
let allSquares = document.querySelectorAll(".gameboard");

// let domSquare = document.querySelectorAll(".gameboard")

const PLAYER = document.querySelector(".current-player");


// ---------- set up functions -----------//


// ------ reaction ()s ------//

let wonGame = function() {
    //reset button enable
        domResetBtn.disabled = false;

    //disable all click
        gameboardSquares.disabled = true;

    //if xTurn is true or false provide corect alert ()
        if (xTurn === true) {
            alert("Cafe, you win! Though you might want to check, I think your Wi-Fi is down...");
        } else {
            alert("Congratulations Customer! You can now surf the web to your heart's content");
        };
};

let catsGame = function() {
    //reset button enable
        domResetBtn.disabled = false;

    //disable all click
        allSquares.disabled = true;

    //alert()
        alert("Cats game! No Wi-Fi or coffee purchase for either of you. Meow run along, or try again.");
};

let switchPlayer = function() {
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
            PLAYER.textContent = "Cafe's turn!";

        //(if) xTurn = false
        } else {
    
        //(then) print("Customer's turn")
            PLAYER.textContent = "Customer's turn!";
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


// ------ the meat & potatoes ------ //
let squareIndex = SQUARES.indexOf(e.target.id);
console.log(squareIndex);

let squareClickHandler = function(e) {
    //if xTurn = true (Cafe)

    // if (xTurn === true) {
    
    if (squareIndex > -1) {
        e.target.style.background = `url( ${squareIndex.xImage} )`;
        console.log(e.target.id);};
      
        
    // let cardId = this.getAttribute('data-id');
	// cardsInPlay.push(cards[cardId].rank);
	// this.setAttribute('src', cards[cardId].cardImage);

        //push selected square into xSquares array
    
    //disable click to square
    // let i = SQUARES[i].box
    // domSquare[i].disabled = true;

    //add class to square ("x" or "o")
    
    //pause
    //checkWin () (if else) cats, (else) switch
        //if win run wonGame
        //if cats run catsGame
        //if switch run switchPlayer ...these will go in checkWin function...
    // }

    //if xTurn = false (Customer) 
    // if (xTurn === false) {
    //     //push selected square into xSquares array
    
    // //disable click to square
    // domResetBtn.disabled = false;

    //add class to square ("x" or "o")
    //pause
    //checkWin () (if else) cats, (else) switch
        //if win run wonGame
        //if cats run catsGame
        //if switch run switchPlayer ...these will go in checkWin function...
    // }
// };

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
    PLAYER.textContent = "Customer's turn!";
}

let checkWin = function() {
    //if xTurn = true
        //compare if xSquares array == any element in WINNING array
        //https://www.w3schools.com/jsref/jsref_includes_array.asp    
    if (xTurn === true) {
        for (i = 0; i < WINNING.length; i++) { 
            let win = WINNING.includes(xSquares);
    
        //if == returns true, then wonGame()
            if (win === true) {
                wonGame();

        //else if == returns false && all squares clicked then catsGame()
            } else if (win === false &&  allSquares.disabled === true) {
                catsGame();
    
        // else == returns false && all squares ! clicked then switchPlayer()
            } else if (win === false && allSquares.disabled === false) {
                switchPlayer();
            };
        };           
            
    } else if (xTurn === false) {
    //else if xTurn = false
        //compare if oSquares array == any element in WINNING array
        for (i = 0; i < WINNING.length; i++) { 
            let win = WINNING.includes(oSquares);
    
        //if == returns true, then wonGame()
            if (win === true) {
                wonGame();

        //else if == returns false && all squares clicked then catsGame()
            } else if (win === false &&  allSquares.disabled === true) {
                catsGame();
    
        // else == returns false && all squares ! clicked then switchPlayer()
            } else if (win === false && allSquares.disabled === false) {
                switchPlayer();
            };
        };           
    };
};


// ------ gameInit() ------ //
let gameInit = function() {
    
    for (i = 0; i < SQUARES.length; i++) {
        gameboardSquares[i].style.background = `url( ${SQUARES[i].image} )`;
        console.log(gameboardSquares[i]);
        console.log("hi");
    };

    document.querySelector(".gameboard").addEventListener("click", squareClickHandler);
    
};

gameInit();
