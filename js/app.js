var square = document.getElementsByClassName("square");
var start = 0;
var reset = document.getElementById('reset');
var squares = document.querySelectorAll(".square");

var checkWinner = function(winner){
    var boxes = document.querySelectorAll(".square");
    for(var i=0; i < square.length; i++)
    if(boxes[0].className === "square" + winner && boxes[1].className === "square"+ winner && boxes[2].className === "square"+ winner){
      document.getElementById("headline").textContent = winner + " Won!";
      boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[3].className === "square" + winner && boxes[4].className === "square" + winner && boxes[5].className === "square" + winner){
        document.getElementById("headline").textContent = winner + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[6].className === "square" + winner && boxes[7].className === "square" + winner && boxes[8].className === "square" + winner){
        document.getElementById("headline").textContent = winner  + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[2].className === "square" + winner && boxes[4].className === "square" + winner && boxes[6].className === "square" + winner){
        document.getElementById("headline").textContent = winner  + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[0].className === "square" + winner && boxes[4].className === "square" + winner && boxes[8].className === "square" + winner){
        document.getElementById("headline").textContent = winner + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[0].className === "square" + winner && boxes[3].className === "square" + winner && boxes[6].className === "square" + winner){
        document.getElementById("headline").textContent = winner + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[1].className === "square" + winner && boxes[4].className === "square" + winner && boxes[7].className === "square" + winner){
        document.getElementById("headline").textContent = winner + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
    }else if(boxes[2].className === "square" + winner && boxes[5].className === "square"+ winner && boxes[8].className === "square" + winner){
        document.getElementById("headline").textContent = winner + " Won!";
        boxes[i].removeEventListener('click', squareClicked);
      }else if(start >= 9){
       document.getElementById('headline').textContent = ("It be a cat's game now");
     }
 }






var squareClicked = function(){

  start++;
  if(start%2===0){
      document.getElementById("displayPlayer").textContent = "Player One, Hold Fast";
      this.textContent = "X";
      this.className += " X";
      this.style.color = "gold";
      this.style.border = "5px solid gold";
      this.removeEventListener('click', squareClicked);
      checkWinner(" X");
  } else{
      document.getElementById("displayPlayer").textContent = "Player Two At The Ready";
      this.textContent = "O";
      this.className += " O";
      this.style.color = "silver";
      this.removeEventListener('click', squareClicked);
      checkWinner(" O");
    }
}

var click = function(){
    for(var i=0; i < square.length; i++){
      square[i].addEventListener('click', squareClicked);
  }
}

var startGame = function() {
   for (var i =1; i <= square.length; i++) {
     clearBox(i)
   }
   click();
   resetGame();
 }

var clearBox = function(number) {
    start = 0;
    document.getElementById("sq" + number).textContent = "";
    document.getElementById("sq" + number).style.border = "5px solid silver";
    document.getElementById("headline").textContent = "Tic Tac Toe";
    document.getElementById("displayPlayer").textContent = "Player One, Ready Your Men";
    for(var i = 0; i < square.length; i++) {
            squares[i].className = 'square';
        }
  }
var resetGame = function(){
  reset.addEventListener('click', startGame);
}

startGame();
