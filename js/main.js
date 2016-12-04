//Function to create game board


//Click function to add X (turn)

//Array to store position of Xs and Os

//Logic to assess winner, 3 (vertical, horizontal, diagonal).

//If winner, no more plays, perhaps refresh, or button to restart.

//If Array[n] is X or O and no winner possible, tie.

//Find a winner:
// colum win: 0,3,6 | 1,4,7 | 2,5,8
//row win: 0,1,2 | 3,4,5 | 6,7,8
//diagonal win: 0,4,8 | 6,4, 2

document.addEventListener("DOMContentLoaded", function() {

     //Setup gameBoard (visual)
     var gameBoard = ["", "", "",
                      "", "", "",
                      "", "", ""];
     console.log(gameBoard);

     //keep track of whose turn it is
     var turn = 0;
     var exxes = 0;
     var ohhs = 0;

     //if turns = 9, tie game or win

     //Select and assign click listener to board tiles
     var clickTile = document.getElementById("game");
     console.log(clickTile);

     for(var i = 0; i < clickTile.children.length; i++) {
          clickTile.children[i].addEventListener("click", addMarker);

     }
     // console.log(clickTile.children[1].textContent);

     function addMarker() {
          if (turn < 9) {
          //Add check for win on 9th click
               if (turn % 2 === 0 && this.childNodes.length === 0) {
                    this.innerHTML = "I'm Alive (X)";
                    turn ++;
               }
               else if (turn % 2 === 1 && this.childNodes.length === 0){
                    this.innerHTML = "I'm Dead (O)";
                    turn ++;
               }
               console.log(turn);
          }
          else if (turn === 9) {
          console.log("game over bitch");
          }
     }

});
