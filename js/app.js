console.log('Hello frontend');

//---- set up your global variables and constants----//

const SQUARES = [
    {
        box: "A",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "B",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "C",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "D",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "E",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "F",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "G",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "H",
        xImage: "tic-tac-toe/img/x.png",
        oImage: "tic-tac-toe/img/o.png"
    },
    {
        box: "I",
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

// ---- set up functions -----//

let wonGame = function() {
    //reset button enable
        //domResetBtn.disabled = false;
    //disable all click
    //if xTurn is true
        //alert("Cafe, you win! Though you might want to check, I think your Wifi is down...")
    //if xTurn is false
        //alert("Congratulations Customer! You can now surf the web to your heart's content.");
};

let catsGame = function() {
    //reset button enable
        //domResetBtn.disabled = false;
    //disable all click
    //alert("Cats game! No Wifi or coffee purchase for either of you. Meow run along, or try again.")
};

let switchPlayer = function() {
    //toggle between xTurn = true/false
        //if xTurn = true then switch xTurn = false
        //if xTurn = false then switch xTurn = true
    //(if) xTurn = true
        //(then) print("Cafe's turn")   
    //(if) xTurn = false
        //(then) print("Customer's turn")
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


let squareClickEventListener = function() {
    //if xTurn = true 
        //push selected square into xSquares array
    //disable click to square
    //add class to square ("x" or "o")
    //pause
    //checkWin () (if else) cats, (else) switch
        //if win run wonGame
        //if cats run catsGame
        //if switch run switchPlayer ...these will go in checkWin function...

};

let resetGame = function() {
    //set arrays to clear (array = [])
    //set images to initial (img corresponding to square)
    //set xTurn = false
    //domResetBtn.disabled = true;
    //print("Customer's turn")
}

let checkWin = function() {
    //if xTurn = true
        //compare if xSquares array == any element in WINNING array
            //if == returns true, then wonGame()
            //else if == returns false && all squares clicked then catsGame()
            // else == returns false && all squares ! clicked then switchPlayer()
    //else if xTurn = false
        //compare if oSquares array == any element in WINNING array
            //if == returns true, then wonGame()
            //else if == returns false && all squares clicked, then catsGame()
            //else == returns false && all squares ! clicked, then switchPlayer()
}


