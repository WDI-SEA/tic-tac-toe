console.log('Hello frontend');
//this var contains X or 0, exchange every time the user clicks on a box, and used for updating the content of the clicked element
var nextCard = "X";
//this var used to save the amount of times that X won
var xWon = 0;
//this var used to save the amount of times that 0 won
var zeroWon = 0;
//this function receives the id attribute of the box that we want to get its inner text and returns the inner text
var getText = function (id){
  var checkId = document.getElementById(id);
  var result = checkId.innerText;
  return result;
}
//this function receives the inner text of the box and checks whether its text was changed from space to X or 0.
var wasClicked = function(text){
  if(text === "X" || text === "0"){
    return true;
  } else {
    return false;
  }
}
//this function receives raw number and checks if the elements in this raw are the same, if the elements are the same it ends the game.
var checkRaw = function(i){
  if (getText(i + "-1") === getText(i + "-2")
    && getText(i + "-2") === getText(i + "-3")
    && wasClicked(getText(i + "-1"))){
    var player = getText(i + "-1");
    gameOver(player);
  }
}
//this function receives column number and checks if the elements in this column are the same, if the elements are the same it ends the game.
var checkColumn = function(i){
  if (getText("1-" + i) === getText("2-" + i)
    && getText("2-" + i) === getText("3-" + i)
    && wasClicked(getText("1-" + i))){
    var player = getText("1-" + i);
    gameOver(player);
  }
}
//it function checks if all the elements in the left diagonal are the same, if the elements are the same it ends the game
var checkDiagonalLeft = function(){
  if (getText("1-1") === getText("2-2")
    && getText("2-2") === getText("3-3")
    && wasClicked(getText("1-1"))){
    var player = getText("1-1");
    gameOver(player);
  }
}
//it function checks if all the elements in the right diagonal are the same, if the elements are the same it ends the game
var checkDiagonalRight = function(){
  if (getText("1-3") === getText("2-2")
    && getText("2-2") === getText("3-1")
    && wasClicked(getText("1-3"))){
    var player = getText("1-3");
    gameOver(player);
  }
}
//this function receives X or 0, alerts of the winner, counts/updates the score and reset the game.
var gameOver = function(player){
 if (player === "X"){
   xWon += 1;
   alert(player + " win! " + player + " current score is: " + xWon + ". " + "0 current score is: " + zeroWon + ".");
 } else {
   zeroWon +=1;
   alert(player + " win! " + player + " current score is: " + zeroWon + ". " + "X current score is: " + xWon + ".");
  }
  reset();
}

//this function checks if someone won
var win = function(){
  checkRaw("1");
  checkRaw("2");
  checkRaw("3");
  checkColumn("1");
  checkColumn("2");
  checkColumn("3");
  checkDiagonalLeft();
  checkDiagonalRight();
}
//this function put an X or 0 in the text of the element that was clicked and calls function win
var onClick = function (){
  if (this.innerHTML !== "&nbsp;"){
    return;
  }
  var id = this.getAttribute("id");
  console.log("clicked on ", id);

  this.innerText = nextCard;

  if (nextCard === "X"){
      nextCard = "0";
  } else {
    nextCard = "X";
  }
  win();
}

var boxElements = document.getElementsByClassName("box");
for (var i=0; i<boxElements.length; i++){
  boxElements[i].addEventListener('click', onClick);
  boxElements[i].innerHTML = "&nbsp;";
}

//resets the game to its initial state
var reset = function (){
  for (var i=0; i<boxElements.length; i++){
    boxElements[i].innerHTML = "&nbsp;";
  }
  nextCard = "X";
}

var resetElement = document.getElementById("button");
resetElement.addEventListener('click', reset);



