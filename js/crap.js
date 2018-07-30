//CAN PLAY GAME
// CAN ONLY EVER TIE
// GAME RESETS ON FINISH
//CHOOSE WHETHER X or O

// MINIMAX ALGORITH


// START DEFAULT AS X
var playerTurn = "X";

//FUNCTION TO SET A WIN LINE
    function createIfQuery(player, number1, number2, number3) {
    if ($("#" + number1).text() === player && $("#" + number2).text() === player && $("#" + number3).text() === player) {
  alert("Congratulations " + player + ". You won.");
  $(".game").text("");
}
  } // end of function

  //FUNCTION TO SET ALL POSSIBLE WIN LINES
  function win(letter) {
   createIfQuery(letter, 1,2,3);
   createIfQuery(letter, 4,5,6);
   createIfQuery(letter, 7,8,9);
   createIfQuery(letter, 1,4,7);
   createIfQuery(letter, 2,5,8);
   createIfQuery(letter, 3,6,9);
   createIfQuery(letter, 1,5,9);
   createIfQuery(letter, 3,5,7);
 }
  
 
   //IF ALL BOXES FULL - DRAW
  function draw() {
var buttons = document.getElementsByClassName("game");
    console.log(buttons)
    var counter = 0;
    while (counter < 9) {
      
   if (buttons[counter].innerHTML === "X" || buttons[counter].innerHTML === "O") {
     console.log(buttons[counter].innerHTML)
      console.log("has an X or Y")
      counter += 1;
    }
    else {
      console.log("there is nothing there")
      return;
    }
      if (counter === 8) {
        alert("its a draw")
        $(".game").text("")
      }
      }
        };//end of draw function

// CHANGE DEFAULT WITH BUTTONS
$("#x").click(function() {
  playerTurn = "X";
  console.log(playerTurn);
})

$("#o").click(function() {
  playerTurn = "O";
  console.log(playerTurn);
})

// ADD EVENT HANDLER TO GRID BUTTON CLICK

$(".game").click(function() {
  console.log($(this).text())
 
  // IF TRY AND CLICK ON ALREADY CLICKED, GIVE MESSAGE
  if ($(this).text() === "X" || $(this).text() === "O") {
    alert("Already clicked, choose another box");
    return
  }
  else { //ADD TEXT TO BUTTON
 $(this).text(playerTurn);

    // CHANGE PLAYER FOR NEXT GO
    if (playerTurn === "X") {
      playerTurn = "O";
    }
    else if (playerTurn === "O") {
      playerTurn = "X";
    }
    }//end of else


  // RUN FUNCTIONS FOR X AND O PARAMETERS
  win("X");
  win("O");
  
  if (!win("X") || !win("O")) {
  draw();
    }
    

}); //End of game click handler

