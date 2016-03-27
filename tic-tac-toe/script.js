 // var nextTurn = 'X';

 // if (this.id == "s1")
 // {
 //      if(document.getElementById("s1").innerHTML == ""){ 
 //           document.getElementById("s1").innerHTML = nextTurn;
 //           changeTurn();
 //      }
 // }  
 // function changeTurn(){
 //      if(nextTurn == 'X'){
 //           nextTurn = 'O';
 //      } else {
 //           nextTurn = 'X';
 //      }
 // }


var turn = 'X';
function next() {
    turn = turn === 'X' ? 'O' : 'X';
}
function play() {
    if (this.innerHTML === '') {
        this.innerHTML = turn;
        next();
    }
}

var squares = document.getElementById("board").getElementsByTagName("td");
for (var i in squares) {
   squares[i].onclick = play;
}
document.getElementById("restart").onclick = function() {
    for (var i in squares) {
       squares[i].innerHTML = '';
    }
}