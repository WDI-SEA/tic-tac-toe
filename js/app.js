console.log('Hello frontend');
console.log('Hello frontend');
//* variable field
var WIN_CONDITION = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6']
];
var Xpos =[];
var Opos =[];
var currentToken ='O';
var nextToken = 'O';
var currentId;
var Xscore = 0;
var Oscore = 0;
var win;


//* DOM element fields
var gameBoardEl = document.getElementsByClassName('grid')[0];
var gameBoardsubDivElArr = document.getElementsByClassName('grid-item');
var startBtnEl = document.getElementById('startgame');
var reset = document.getElementById('reset');
var playerOneScoreEl = document.getElementById('player1score');
var playerTwoScoreEl = document.getElementById('player2score');
var messageEl = document.getElementById('message');

//* event fields
startBtnEl.addEventListener('click', newGame);
reset.addEventListener('click', resetBoard);
gameBoardEl.addEventListener('click', placeToken);





//* function fields
//todo this start a new game and reset score of players 
function newGame() {
    resetBoard();
    playerOneScoreEl.textContent = '0';
    playerTwoScoreEl.textContent = '0';
}

//todo this includes actions after click on the token place.
function placeToken(evt) {
    currentId = evt.target.id;
    currentToken = nextToken;
    if (!( Xpos.includes(currentId) || Opos.includes(currentId) )) {
        // console.log(currentToken); //*passed
        evt.target.classList.add(currentToken);
        currentToken === 'O' ? Opos.push(currentId) : Xpos.push(currentId);
        // console.log(Opos, Xpos, currentId);
        currentToken === 'O' ? nextToken = 'X' : nextToken = 'O';
    }
    checkResult();
    

}

//todo check result after take token
function checkResult()  {
    console.log('checking for ' + currentToken);
    WIN_CONDITION.forEach(function(e){
        console.log(e, currentId);
        if (e.includes(currentId)) {
            win = true; 
            if (currentToken === 'O') {
                for (let num of e) {
                    if (!(Opos.includes(num))) {
                        win = false
                        continue;
                    }    
                }    
            } else {
                for (let num of e) {
                    if (!(Xpos.includes(num))) {
                        win = false
                        continue;
                    }
                }   
            }
            console.log(win);
            if (win || (Xpos.length + Opos.length === 9)) {
                endGame();
            }  
           
        }
    });
    //winning combo 
}

//todo end game: update score
function endGame() {
    console.log(currentToken + ' win');
    gameBoardEl.removeEventListener("click",placeToken);
    if (win) {
        if (currentToken === "O"){
            Oscore ++;
            playerOneScoreEl.textContent = Oscore;
            messageEl.textContent = "PLAYER ONE WINS!";
        }
        else{
            Xscore ++;
            playerTwoScoreEl.textContent = Xscore;
            messageEl.textContent = "PLAYER 2 WINS!";
        }
    } else {
        messageEl.textContent = "It is DRAW..."
    }

    Xpos =[];
    Opos =[];
    currentToken = "O";
    nextToken = "O";

    // resetboard 
    

}

//todo this only reset the game board.
function resetBoard() {
    gameBoardEl.textContent = "";
    messageEl.textContent = "";
    console.log(gameBoardEl);
    for (var i = 0; i<9; i++) {
        console.log(i);
        let subdiv = document.createElement('div');
        subdiv.className = 'grid-item';
        subdiv.id = i.toString();
        console.log(subdiv);
        gameBoardEl.appendChild(subdiv);
        console.log(gameBoardEl);
    }
    gameBoardEl.addEventListener('click', placeToken);

    
}
