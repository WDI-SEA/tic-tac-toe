console.log('Hello frontend');

/* - - - - - - - - - - Game State/Global Variables - - - - - - - - - */

let squares = {
    first: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    second: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    third: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    forth: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    fifth: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    sixth: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    seventh: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    eighth: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    },
    ninth: {
        played: false,
        catImage: 'img/pink-background.jpeg',
        dogImage: 'img/grey-background.png'
    }
};

let playerCount = 0;
let player;

let catsPlayed = [];
let dogsPlayed = [];
let dummyArr = [];
//workspace junk
let resetDummyArr = function() {
    dummyArr = [];
    dummyArr.push("#first");
    dummyArr.push("#second");
    dummyArr.push("#third");
    dummyArr.push("#forth");
    dummyArr.push("#fifth");
    dummyArr.push("#sixth");
    dummyArr.push("#seventh");
    dummyArr.push("#eighth");
    dummyArr.push("#ninth");

}
/* - - - - - - - - - - - - - - - - Functions - - - - - - - - - - - - - - - - -*/
let gameInit = function() {
    let domSquares = document.querySelector("img");
    let domResetBtn = document.querySelector(".reset");
    

    catsPlayed = [];
    dogsPlayed = [];
   
    resetDummyArr();
    //reset squares images
    
    for (let i = 0; i < 9; i++) { 
        document.querySelectorAll(`${dummyArr[i]}`)[0].src = `img/white-background.png`;
            //reset played vs not played
            //give name??
    }

    //disable button
    domResetBtn.disabled = true;
    
}


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
        else {
            console.log("It's a tie");
        }
    }

}

let checkPlayer = function() {
    if (playerCount % 2 === 0) {
        player = "dog";
    } else if (playerCount % 2 === 1) {
        player = "cat";
    }
    playerCount++;
    return player;
}

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
        } else {
            e.target.src = squares[e.target.id].dogImage;
            dogsPlayed.push(e.target.id);
        }
        console.log(catsPlayed);
        console.log(dogsPlayed)

        //check if it is a win
        let winState = checkWin(turn);
        if (winState === true) {
            console.log("The winner is: " + turn + "s!!");
            document.querySelector(".reset").disabled = false;
            //NEED TO MAKE SQUARES UNCLICKABLE
            document.querySelectorAll(".game-board").disabled = true;
        }
    }
};

let resetTheBoard = function(e) {
    /*let domSquares = document.querySelector("img");
    let domResetBtn = document.querySelector(".reset");
    

    catsPlayed = [];
    dogsPlayed = [];
    

    //reset squares images
    console.log(dummyArr);
    for (let i = 0; i < 9; i++) { 
        document.querySelectorAll(`${dummyArr[i]}`)[0].src = `img/white-background.png`;
        
            //reset played vs not played
            //give name??
    }
    resetDummyArr();
    
    squares[e.target.id].played = false;
    gameInit();
    //disable button
    //domResetBtn.disabled = true;*/
    window.location.reload();
};




document.addEventListener('DOMContentLoaded', function() {
    // DOM references
    // do literally everything here
    let x = 2;
 

        gameInit();
        document.querySelector(".game-board").addEventListener("click", squareClickHandler);
        document.querySelector(".reset").addEventListener("click", resetTheBoard);
    
    


});