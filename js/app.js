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





var clickBox = document.getElementsByClass("boxes");
clickBox.addEventListener("click", function(e){
    console.log("anything");
})


// clickBox.addEventListener('click', function( event, boxes{
//     if(boxes.textContent===0){
//                  boxes.textContent = turn;
//                  switchTurn();
//              } else {
//                  setMessage("Hey! No Cheating!")
//              }
//          }
// )

// var clickBox = document.getElementsByClassName("boxes")
// clickBox.addEventListener('click', function(event){
//     for (var i = 0; i < clickBox.length; i++){    
//     }
// })

// clickBox.addEventListener('click', function(event){
//         event.stopPropagation();
//         console.log("something worked");

// first iteration 
// var nextMove = document.getElementsByClassName("boxes");
// for (var i = 0; i < nextMove.length; i++){
//     if boxes[i] === 0; {
//         switchTurn();
//     } else {
//         setMessage("🛑✋! Stop!")
//     }
// }

// What I started with 
// function nextMove(boxes){
//     if(boxes.textContent=' '){
//         boxes.textContent = turn;
//         switchTurn();
//     } else {
//         setMessage("Hey! No Cheating!")
//     }
// }

// function switchTurn(){
//     if(checkWinner(turn = true)){
//         setMessage("Congratulations " + turn + ", you won!")
//     } else if (checkWinner(turn = false)){
//         if(turn = player1){
//             turn = player2;
//             setMessage("It's " + turn + "'s turn")
//         } else {
//             turn = player1;
//             setMessage("It's " + turn + "'s turn")
//         }   
//     }
// }

function switchTurn(){
    if (turn = player1){
        turn = player2;
        setMessage("It's " + turn + "'s turn")
        } else {
            turn = player1;
            setMessage("It's " + turn + "'s turn")
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
} 


//call getBox and compare to the rows of the gameboard. 
function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move){
        result = true;
    }
    return result;
}

//return value in individual bozes
function getBox(number){
    return document.getElementById("num"+number).innerHTML;
}
