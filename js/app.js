console.log('Hello frontend');

const player1 = "X";
const player2 = "O";
var turn;

// 

function startGame(){
    turn = player1;
    setMessage(`${player1} is ready to rumble!`);
}

function setMessage(msg){
    document.getElementById("message").textContent = msg;
}



function nextMove(boxes){
    if(boxes.textContent=' '){
        boxes.textContent = turn;
        switchTurn();
    } else {
        setMessage("Hey! No Cheating!")
    }
}


function switchTurn(){
    if(checkWinner(turn = true)){
        setMessage("Congratulations " + turn + ", you won!")
    } else if (checkWinner(turn = false)){
        if(turn = player1){
            turn = player2;
            setMessage("It's " + turn + "'s turn")
        } else {
            turn = player1;
            setMessage("It's " + turn + "'s turn")
        }   
    }
}


function checkWinner(move){
    var result = false;
    if(checkRow(0, 1, 2, move) ||
        checkRow(3, 4, 5, move) ||
        checkRow(6, 7, 8, move) ||
        checkRow(0, 3, 6, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(0, 4, 8, move) ||
        checkRow(2, 4, 6, move)) {
            result = true;
        }
        return result;
} console.log("check for check winner");


//call getBox and compare to the rows of the gameboard.
function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

//return individual boxes
function getBox(number){
    return document.getElementById("num"+number).innerHTML;
}
