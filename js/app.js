

var counter = 0;
var whosTurn = function(){
  if (counter % 2 === 0){
    return "X";
  } else {
    return "O";
  }
};

var playTurn = function() {
  if (!this.classList.contains("X") && !this.classList.contains("O")) {
    this.classList.add(whosTurn());
    console.log(whosTurn);
    counter++;
    //check for winner
  }
};


var startBoard = function() {
  var gameSquares = document.getElementsByClassName('squares');
    for (var i=0; i < gameSquares.length; i++){
      console.log(gameSquares[i]);
      gameSquares[i].addEventListener('click', playTurn);
    }
  };



startBoard();










