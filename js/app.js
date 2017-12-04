var square = document.getElementsByClassName("square");
var start = 0;
var reset = document.getElementById('reset');
var squareClicked = function(){
  start++;
  if(start%2===0){
    document.getElementById("displayPlayer").textContent = "Player One, Hold Fast";
    this.textContent = "X";
    this.style.color = "gold";
    this.style.border = "5px solid gold";
    this.removeEventListener('click', squareClicked);
  } else{
    document.getElementById("displayPlayer").textContent = "Player Two At The Ready";
    this.textContent = "O";
    this.style.color = "silver";
    this.removeEventListener('click', squareClicked);
    }
  }
var click = function(){
    for(var i=0; i < square.length; i++){
      square[i].addEventListener('click', squareClicked);
  }
}
var startGame = function() {
   for (var i =1; i <= square.length; i++) {
   clearBox(i)};
   click();
   resetGame();
 }
var clearBox = function(number) {
    return document.getElementById("sq" + number).textContent = "";
  }
var resetGame = function(){
  reset.addEventListener('click', startGame);
}

startGame();
