// console.log('Hello frontend');

var user = "";// intital condition no user defined
var plan = { "1": [["2", "3"],["4", "7"],["5", "9"]],
            "3": [["1", "2"],["4", "7"],["6", "9"]],
            "7": [["1", "4"],["5", "3"],["8", "9"]],
            "9": [["6", "3"],["5", "1"],["8", "7"]],
            "2": [["1", "3"],["5", "8"]],
            "4": [["5", "6"],["1", "7"]],
            "6": [["4", "5"],["3", "9"]],
            "8": [["2", "5"],["7", "9"]],
            "5": [["2", "8"],["4", "6"],["1", "9"],["3", "7"]]
          }; // board to check who won

document.addEventListener('DOMContentLoaded', function() { // setting it so that the js dosnen't get ran before the page loads
  // console.log("DOM loaded");

 var cells = document.getElementsByClassName('square'); // Setting var cells = to class square
  for (var i = 0; i < cells.length; i++){
      cells[i].addEventListener('click', cellClick);
  }
  function cellClick (){     //check that cell not occupied. So that the cells can't be clicked again
    var text = this.firstChild.innerHTML; // var text = the inner div HTML. Basicall its going to be X or O

    if (text === "X" || text === "O")
      return;// Cell occupied no further action

    user = getUser(); // Tells is player is x or y
    changeText(this); // Changes the clicked cell to either x or y

    changeColor(this); // Adding the class X or O which changes the background color
    var win = ifWon(this); // 
    if (win) alert("Win");
  }

  function changeColor(theCell){ // theCell is the cell that has been clicked
      theCell.className += " " + user; // adding the class name either X or O.
      //Those properties for the new class then get applied: changing the background color
  }
  function changeText(theCell){// theCell is the cell that has been clicked
      theCell.firstChild.innerHTML = user; // Changing the inner DIVs HTML text to either X or O depading on who the player is
  }
  function getUser() {
    if (user === ""){ // Setting board var user is set to ""
      return "X"; // X goes first
    }
      if(user === "X"){ //
        return "O"; // O is second because X is now true
      }
      return "X"; //after O plays need this so that X is returned insteaad of undefined
  }
  function ifWon(theCell){ // The cell is the cell that was clicked
      var id = theCell.id;
      var toDo = plan[id]; //
      for(var i=0; i < toDo.length; i++){ //
        var pair = toDo[i];
        if (checkPair(pair)) return true;
      }
      return false;
  }
  function checkPair(pair){
      var check = document.getElementById(pair[0]).firstChild.innerHTML;
        if (check === user){
          check = document.getElementById(pair[1]).firstChild.innerHTML;
          return check === user;
        }
          return false;
  }

});
// remove innerHTML and restore original calss name and remove the string x and o from the calss name also erase the win message
