console.log('Hello frontend');

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

var boxOrder = ["tl", "tm", "tr", "ml", "mm", "mr", "bl", "bm", "br"];
var boxNotPlayed = [];

for(var i = 0; i < 9; i++){
    boxNotPlayed.push({ boxPosition: boxOrder[i], played: false});
  }

// //Add an event listener to each box
  var squares = document.getElementById("board");
  console.log(squares);
  for(var j = 0; j < squares.children.length; j++){
    squares.children[j].addEventListener("click", boxPlayed);
  }
  //Create a function to check whether the box has been play
  function boxPlayed(){
    for(var i = 0; i < boxPlayed.length; i++){
      if(boxPlayed[i].played === true){
        return false;
      }
    }
    return true;
  }
});
