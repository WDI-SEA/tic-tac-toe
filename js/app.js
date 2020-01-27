/* - - - - - - - - - - Game State/Global Variables - - - - - - - - - */

let squares = {
    first: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    second: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    third: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    forth: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    fifth: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    sixth: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    seventh: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    eighth: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    },
    ninth: {
        played: false,
        catImage: 'img/catCrown.png',
        dogImage: 'img/norman.png'
    }
};

let playerCount = 0;
let player;

let catsPlayed = [];
let dogsPlayed = [];
let turnDecider = [];


/* - - - - - - - - - - - - - - - - Functions - - - - - - - - - - - - - - - - -*/
let resetturnDecider = function() {
    turnDecider = [];
    turnDecider.push("#first");
    turnDecider.push("#second");
    turnDecider.push("#third");
    turnDecider.push("#forth");
    turnDecider.push("#fifth");
    turnDecider.push("#sixth");
    turnDecider.push("#seventh");
    turnDecider.push("#eighth");
    turnDecider.push("#ninth");

};

let gameInit = function() {
    let domSquares = document.querySelector("img");
    let domResetBtn = document.querySelector(".reset");
    

    catsPlayed = [];
    dogsPlayed = [];
   
    resetturnDecider();

    //reset squares images
    for (let i = 0; i < 9; i++) { 
        document.querySelectorAll(`${turnDecider[i]}`)[0].src = `img/white-background.png`;
    }

    //disable button
    domResetBtn.disabled = true;
    
};


let checkWin = function(currentTurn) {
    
    if (playerCount >= 4)  {
        if (currentTurn === "dog") {
            switch(true) {
                case (dogsPlayed.includes("first") && dogsPlayed.includes("second") && dogsPlayed.includes("third")): 
                    return true;
                    break;
                case (dogsPlayed.includes("forth") && dogsPlayed.includes("fifth") && dogsPlayed.includes("sixth")):
                    return true;
                    break;
                case (dogsPlayed.includes("seventh") && dogsPlayed.includes("eighth") && dogsPlayed.includes("ninth")):
                    return true;
                    break;
                case (dogsPlayed.includes("first") && dogsPlayed.includes("forth") && dogsPlayed.includes("seventh")):
                    return true;
                    break;
                case (dogsPlayed.includes("second") && dogsPlayed.includes("fifth") && dogsPlayed.includes("eighth")):
                    return true;
                    break;
                case (dogsPlayed.includes("third") && dogsPlayed.includes("sixth") && dogsPlayed.includes("ninth")):
                    return true;
                    break;
                case (dogsPlayed.includes("third") && dogsPlayed.includes("fifth") && dogsPlayed.includes("seventh")):
                    return true;
                    break;
                case (dogsPlayed.includes("first") && dogsPlayed.includes("fifth") && dogsPlayed.includes("ninth")):
                    return true;
            }
        } else if (currentTurn === "cat") {
            switch(true) {
                case (catsPlayed.includes("first") && catsPlayed.includes("second") && catsPlayed.includes("third")): 
                    return true;
                    break;
                case (catsPlayed.includes("forth") && catsPlayed.includes("fifth") && catsPlayed.includes("sixth")):
                    return true;
                    break;
                case (catsPlayed.includes("seventh") && catsPlayed.includes("eighth") && catsPlayed.includes("ninth")):
                    return true;
                    break;
                case (catsPlayed.includes("first") && catsPlayed.includes("forth") && catsPlayed.includes("seventh")):
                    return true;
                    break;
                case (catsPlayed.includes("second") && catsPlayed.includes("fifth") && catsPlayed.includes("eighth")):
                    return true;
                    break;
                case (catsPlayed.includes("third") && catsPlayed.includes("sixth") && catsPlayed.includes("ninth")):
                    return true;
                    break;
                case (catsPlayed.includes("third") && catsPlayed.includes("fifth") && catsPlayed.includes("seventh")):
                    return true;
                    break;
                case (catsPlayed.includes("first") && catsPlayed.includes("fifth") && catsPlayed.includes("ninth")):
                    return true;
            }
        }
        if (playerCount === 9) {
            document.querySelector(".game-anouncements").innerText = "Oh no!! Cat's game. Well not that kind of cat... Click reset to play again!"
            document.querySelector(".reset").disabled = false;
    
        }
    }

};

let checkPlayer = function() {
    if (playerCount % 2 === 0) {
        player = "dog";
    } else if (playerCount % 2 === 1) {
        player = "cat";
    }
    playerCount++;
    return player;
};

let squareClickHandler = function(e) {
    
    //check if square has been played
    if (!squares[e.target.id].played) {
        console.log(e.target.id);
        squares[e.target.id].played = true;
        
        //check if player is cat or dog
        let turn = checkPlayer();

        //change img based on turn
        if (turn === "cat") {
            e.target.src = squares[e.target.id].catImage;
            catsPlayed.push(e.target.id);
            document.querySelector(".game-anouncements").innerText = "You're up Doggo!!"
        } else {
            e.target.src = squares[e.target.id].dogImage;
            dogsPlayed.push(e.target.id);
            document.querySelector(".game-anouncements").innerText = "Hey Cat, your turn now!!"

        }

        //check if it is a win
        let winState = checkWin(turn);
        if (winState === true) {
            document.querySelector(".game-anouncements").innerText = "AND THE " + turn.toUpperCase() + "S TAKE THE GAME!! Hit reset to play again.";
            document.querySelector(".reset").disabled = false;
            document.querySelector(".game-board").removeEventListener("click", squareClickHandler);
            
            let lastPlayer = checkPlayer();
            if (lastPlayer === "cat") {
                for (let i = 0; i < 9; i++) { 
                    document.querySelectorAll(`${turnDecider[i]}`)[0].src = `img/norman.png`;
                }
            }
            else {
                for (let i = 0; i < 9; i++) { 
                    document.querySelectorAll(`${turnDecider[i]}`)[0].src = `img/catCrown.png`;
                }
            }
        }
    }
};

let resetTheBoard = function(e) {
    window.location.reload();

};


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".game-anouncements").innerText = "You're up Doggo!! Click on one of the empty squares to begin!"

    gameInit();
    document.querySelector(".game-board").addEventListener("click", squareClickHandler);
    document.querySelector(".reset").addEventListener("click", resetTheBoard);

});

// - - - - - - - - - - - - - - - Future things to work on, please ignore - - - - - - - - - - - - //
        /*let resetTheBoard = function(e) {
            window.location.reload();
            
            let domSquares = document.querySelector("img");
            let domResetBtn = document.querySelector(".reset");
            
        
            catsPlayed = [];
            dogsPlayed = [];
            
        
            //reset squares images
            console.log(turnDecider);
            for (let i = 0; i < 9; i++) { 
                document.querySelectorAll(`${turnDecider[i]}`)[0].src = `img/white-background.png`;
                
                    //reset played vs not played
                    //give name??
            }
            resetturnDecider();
            
            squares[e.target.id].played = false;
            gameInit();
            //disable button
            //domResetBtn.disabled = true;
           
        };*/