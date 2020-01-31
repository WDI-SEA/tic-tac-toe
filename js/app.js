console.log('Hello frontend');

//---- set up your global variables and constants----//

const SQUARES = [
    {
        box: "A",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/A.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "B",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/B.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "C",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/C.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "D",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/D.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "E",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/E.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "F",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/F.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "G",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/G.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "H",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/H.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    },
    {
        box: "I",
        image: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/I.png",
        xImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png",
        oImage: "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png"
    }
    
    ];

console.log(SQUARES);

let xSquares = [];
let oSquares = [];

var xTurn = true;

let domResetBtn = document.querySelector(".reset");

let gameboardSquares = document.querySelectorAll(".box");
let allSquares = document.querySelectorAll(".gameboard");
let player = document.getElementById("current-player").textContent;



// ------ the meat & potatoes (event listeners)------ //

xImage = "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/x.png";
oImage = "/Users/monty/SEI29/unit1/homework/homework_3/tic-tac-toe/img/o.png";

function selectSquare(event) {
    let squareID = document.getElementById(event.target.id)


    if (xTurn === true) {
        squareID.style.background = `url( ${xImage} )`;

        //push selected square into xSquares array
        xSquares.push(event.target.id);
        console.log(xSquares);

        //create class that designates "x"
            // gameboardSquares[8].className = "x";
            // console.log(gameboardSquares[8].className);

        checkWin();
        if(checkWin() != true) {
            switchPlayer();

        }

        //disable click to square
    

    } else {
        squareID.style.background = `url( ${oImage} )`;

        //push selected square into xSquares array
        oSquares.push(event.target.id);
        console.log(oSquares);

        //create class that designates "o"
            // gameboardSquares[8].className = "o";
            // console.log(gameboardSquares[8].className);

        checkWin();
        if(checkWin() != true){
            switchPlayer();
        };

        //disable click to square
      
    }
};


// ------ Check for Win ------ //


let checkWin = function() {

    console.log("checking for win");
    //I have an array of winning combos
    const WINNING = [
        ["A", "B", "C"],
        ["D", "E", "F"],
        ["G", "H", "I"],
        ["A", "D", "G"],
        ["B", "E", "H"],
        ["C", "F", "I"],
        ["A", "E", "I"],
        ["C", "E", "G"]
        ];

    //I want to compare my xSquares array and/or oSquares array to the winning combos
        //if it is X's turn, compare xSquares, else if it is O's turn, compare oSquares
    if (xTurn === true) {
        //compare xSquares to WINNING (combos)
            //I have an array of arrays for WINNING, so I will need a nested for loop to run through all possible combos
        
        for (let i = 0; i < WINNING.length; i++) {
            xWin = 0;
            for (let j = 0; j < WINNING[i].length; j++) {
                //compare to xSquares
                if (xSquares.includes(WINNING[i][j])) {
                    //true here means one of the letters is in the winning combo...but were not to the end yet
                    // enter counter
                    console.log(WINNING[i][j])
                    xWin++;
                    console.log(xWin)
                   
                };

            };
            if (xWin === 3) {
                wonGame();
                return true;
                //at this point the only other options are catsGame or switchPlayer
                    // catsGame() is true if all the squares have been clicked (which is shown by being disabled)
            } 
        };

                //if my counter reaches a combo of three ...I've made a winning combo, then wonGame()
                // if (allSquares.disabled === true) {
                //     catsGame();
                // };

            
        
            
    } else if (xTurn === false) {
            //compare oSquares to WINNING (combos)
                //I have an array of arrays for WINNING, so I will need a nested for loop to run through all possible combos
            
            for (let i = 0; i < WINNING.length; i++) {
                oWin = 0;
                for (let j = 0; j < WINNING[i].length; j++) {
                    //compare to oSquares
                    if (oSquares.includes(WINNING[i][j])) {
                        //true here means one of the letters is in the winning combo...but were not to the end yet
                        // enter counter
                        oWin++;
                        console.log(oWin);

                    };
                };  
                if (oWin === 3) {
                    wonGame();
                    return true;
                    //at this point the only other options are catsGame or switchPlayer
                        // catsGame() is true if all the squares have been clicked (which is shown by being disabled)
                } 
            }; 

                    //if my counter reaches a combo of three ...I've made a winning combo, then wonGame()
                    //  if (allSquares.disabled === true) {
                    //     catsGame();
                    // }; 
    
                
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

        document.getElementById(SQUARES[i].box).addEventListener("click", selectSquare);
        console.log(gameboardSquares[i]);
        console.log("hi");


    };

    document.getElementById("current-player").textContent = "Customer's turn!";
    
};

gameInit();


// ------ reaction ()s ------//

let wonGame = function() {
    console.log("win")
    win = true;
    console.log("win = " + win);
    // //reset button enable
    //     domResetBtn.disabled = false;
    // //disable all click
    //     for ( i = 0; i < SQUARES.length; i++) {
    //         document.getElementById(i).removeEventListener('click', selectSquare);
    //     };
    //if xTurn is true or false provide corect alert ()
        if (xTurn === true) {
            document.getElementById("current-player").textContent = "Cafe, you win! Though you might want to check, I think your Wi-Fi is down...";
        } else {
            document.getElementById("current-player").textContent = "Congratulations Customer! You can now surf the web to your heart's content <3";
        };
    
};

//TODO: get cat's game function working
// let catsGame = function() {
//     //reset button enable
//         domResetBtn.disabled = false;

//     //disable all click
//         // for ( i = 0; i < SQUARES.length; i++) {
//         // // document.getElementById(i).removeEventListener('click', selectSquare);
//         // };

//     //alert()
//         document.getElementById("current-player").textContent = "Cats game! No Wi-Fi or coffee purchase for either of you. Meow run along, or try again.";
// };

let switchPlayer = function() {
    console.log("switching player");
    console.log(xTurn);

    //toggle between xTurn = true/false
        //if xTurn = true then switch xTurn = false and vis versa

        if (xTurn === true) {
            xTurn = false;
            document.getElementById("current-player").textContent = "Customer's turn!";
            
        } else {
            xTurn = true;
            document.getElementById("current-player").textContent = "Cafe's turn!";
        };

};

