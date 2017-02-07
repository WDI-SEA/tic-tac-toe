var modal = document.getElementById('startModal');
var span = document.getElementsByClassName("close")[0];
var restart = document.getElementById('restart');

var playerchoice;

restart.onclick = function(){
  location.reload();
}

Xstart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("xChoice").style.display = "block";
  document.getElementById("oChoice").style.display = "none";
  playerchoice = "X";
  startGame();
}
Ostart.onclick = function() {
  modal.style.display = "none";
  document.getElementById("oChoice").style.display = "block";
  document.getElementById("xChoice").style.display = "none";
  playerchoice = "O";
  startGame();
}

//defaults for win arr
var playerselectionRow = [];
var playerselectionCol = [];

//boolean win condition
var Win = false;

//default squares left to remove for computer to access
var squaresLeft = [0,1,2,3,4,5,6,7,8]
var numIndex;


//emergency computer moves
var playRowOne = false;
var solvedPlayRowOne = false;
var playRowTwo = false;
var solvedPlayRowTwo = false;
var playRowThree = false;
var solvedPlayRowThree = false;
var playColOne = false;
var solvedPlayColOne= false;
var playColTwo = false;
var solvedPlayColTwo= false;
var playColThree = false;
var solvedPlayColThree= false;
//emergency computer cross moves
var playCrossOne = false;
var solvedCrossOne = false;
var playCrossTwo = false;
var solvedCrossTwo = false;



var grid = new clickableGrid(3, 3, function(el, row, col, i) {
  if(squaresLeft.length == 0){
    alert('TIE GAME!')
  }else{
    console.log("You clicked on element:", el);
    console.log("You clicked on row:", row);
    console.log("You clicked on col:", col);
    console.log("You clicked on item #:", i);

    //taking element clicked and removing from array of possibilities
    numIndex = squaresLeft.indexOf(i -1);
    console.log('index of: ' + numIndex);
    squaresLeft.splice((numIndex), 1);
    console.log(squaresLeft);

    //pushing to moves array
    playerselectionRow.push(row);
    playerselectionCol.push(col);
    //sorting for win conditons
    playerselectionRow.sort();
    playerselectionCol.sort();

    if(playerchoice == "O"){
      el.className = 'clickedO';
    }
    if(playerchoice == "X"){
      el.className='clickedX';
    }

    //initialize empty object
    var countsRow = {};
    var countsCol = {};
    //check for repeat row/column values and place into counts object
    playerselectionRow.forEach(function(x){ countsRow[x] = (countsRow[x] || 0) +1; });
    playerselectionCol.forEach(function(x){ countsCol[x] = (countsCol[x] || 0) +1; });



    //counts row & column for computerTurn in case play is close to winning
    if(Win === false){
      if(countsRow[0] == 2 && solvedPlayRowOne == false){
        console.log('user is about to win by row 1!!');
        playRowOne = true;
      }
      if(countsRow[1] == 2 && solvedPlayRowTwo == false){
        console.log('user is about to win by row 2!!');
        playRowTwo = true;
      }
      if(countsRow[2] == 2 && solvedPlayRowThree == false){
        console.log('user is about to win by row 3!!');
        playRowThree = true;
      }
      if(countsCol[0] == 2 && solvedPlayColOne == false){
        console.log('user is about to win by col 1!!');
        playColOne = true;
      }
      if(countsCol[1] == 2 && solvedPlayColTwo == false){
        console.log('user is about to win by col 2!!');
        playColTwo = true;
      }
      if(countsCol[2] == 2 && solvedPlayColThree == false){
        console.log('user is about to win by col 3!!');
        playColThree = true;
      }
      if((countsRow[0] == 1 && countsRow[2] == 1) && (countsCol[2] == 1 && countsCol[0] == 1) && (i == 7 || i == 3)){
        console.log('user is about to cross3!!!')
        playCrossTwo = true;
      }else if(((countsCol[0] == 1 && countsCol[1] == 1) && (countsRow[0] == 1 && countsRow[1] ==1)) || ((countsCol[0] == 1 && countsCol[2] == 1) && (countsRow[0] == 1 && countsRow[2] ==1))){
        console.log('user is about to cross!!!')
        playCrossOne = true;
      }
      if(((countsCol[2] == 1 && countsCol[1] == 1) && (countsRow[0] == 1 && countsRow[1] ==1)) || ((countsCol[0] == 1 && countsCol[1] == 1) && (countsRow[1] == 1 && countsRow[2] ==1))){
        console.log('user is about to cross2!!!')
        playCrossTwo = true;
      }
    }

    //if row count = 3 or col count = 3 then win condition
    if(Win === false){
      if(countsRow[0] == 3){
        Win = true;
      }
      else if((countsRow[1]) == 3){
        Win = true;
      }
      else if((countsRow[2]) == 3){
        Win = true;
      }
      else if(countsCol[0] == 3){
       Win = true;
      }
      else if(countsCol[1] == 3){
       Win = true;
      }
      else if(countsCol[2] == 3){
       Win = true;
     }else if((countsCol[0] == 1 && countsCol[1] == 1 && countsCol[2] == 1) && (countsRow[0] == 1 && countsRow[1] ==1 && countsRow[2] ==1)){
       Win = true;
     }
    computerTurn();
   }
 }
});

function computerTurn(){
  if(squaresLeft.length == 0){
    alert('TIE')
  }else{
    if(Win === true){
      Winner();
    }else if(playRowOne == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        document.getElementsByTagName("td")[squaresLeft[0]].className = 'clickedX';
        console.log(document.getElementsByTagName("td")[squaresLeft[0]]);
        locationCompChoice = squaresLeft.indexOf(squaresLeft[0]);
        squaresLeft.splice(locationCompChoice, 1);
        solvedPlayRowOne = true;
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        document.getElementsByTagName("td")[squaresLeft[0]].className='clickedO';
        console.log(document.getElementsByTagName("td")[squaresLeft[0]]);
        locationCompChoice = squaresLeft.indexOf(squaresLeft[0]);
        squaresLeft.splice(locationCompChoice, 1);
        solvedPlayRowOne = true;
      }
    }else if(playRowTwo == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[3].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(5) > -1)){
          document.getElementsByTagName("td")[5].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[5]);
          locationCompChoice = squaresLeft.indexOf(5);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else if(document.getElementsByTagName("td")[5].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(3) > -1)){
          document.getElementsByTagName("td")[3].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[3]);
          locationCompChoice = squaresLeft.indexOf(0);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else if(document.getElementsByTagName("td")[3].className == "clickedO" && document.getElementsByTagName("td")[5].className == "clickedO" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else{
          solvedPlayRowTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[3].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(5) > -1)){
          document.getElementsByTagName("td")[5].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[5]);
          locationCompChoice = squaresLeft.indexOf(5);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else if(document.getElementsByTagName("td")[5].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(3) > -1)){
          document.getElementsByTagName("td")[3].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[3]);
          locationCompChoice = squaresLeft.indexOf(3);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else if(document.getElementsByTagName("td")[3].className == "clickedX" && document.getElementsByTagName("td")[5].className == "clickedX" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayRowTwo = true;
        }else{
          solvedPlayColTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }else if(playRowThree == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        document.getElementsByTagName("td")[(squaresLeft[squaresLeft.length-1])].className = 'clickedX';
        console.log(document.getElementsByTagName("td")[(squaresLeft[squaresLeft.length-1])]);
        locationCompChoice = squaresLeft.indexOf((squaresLeft[squaresLeft.length-1]));
        squaresLeft.splice(locationCompChoice, 1);
        solvedPlayRowThree = true;
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        document.getElementsByTagName("td")[(squaresLeft[squaresLeft.length-1])].className='clickedO';
        console.log(document.getElementsByTagName("td")[(squaresLeft[squaresLeft.length-1])]);
        locationCompChoice = squaresLeft.indexOf((squaresLeft[squaresLeft.length-1]));
        squaresLeft.splice(locationCompChoice, 1);
        solvedPlayRowThree = true;
      }
    }else if(playColOne == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[0].className == "clickedO" && document.getElementsByTagName("td")[3].className == "clickedO" && (squaresLeft.indexOf(6) > -1)){
          document.getElementsByTagName("td")[6].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[6]);
          locationCompChoice = squaresLeft.indexOf(6);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else if(document.getElementsByTagName("td")[3].className == "clickedO" && document.getElementsByTagName("td")[6].className == "clickedO" && (squaresLeft.indexOf(0) > -1)){
          document.getElementsByTagName("td")[0].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[0]);
          locationCompChoice = squaresLeft.indexOf(0);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else if(document.getElementsByTagName("td")[0].className == "clickedO" && document.getElementsByTagName("td")[6].className == "clickedO" && (squaresLeft.indexOf(3) > -1)){
          document.getElementsByTagName("td")[3].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[3]);
          locationCompChoice = squaresLeft.indexOf(3);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else{
          solvedPlayColOne = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[0].className == "clickedX" && document.getElementsByTagName("td")[3].className == "clickedX" && (squaresLeft.indexOf(6) > -1)){
          document.getElementsByTagName("td")[6].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[6]);
          locationCompChoice = squaresLeft.indexOf(6);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else if(document.getElementsByTagName("td")[3].className == "clickedX" && document.getElementsByTagName("td")[6].className == "clickedX" && (squaresLeft.indexOf(0) > -1)){
          document.getElementsByTagName("td")[0].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[0]);
          locationCompChoice = squaresLeft.indexOf(0);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else if(document.getElementsByTagName("td")[0].className == "clickedX" && document.getElementsByTagName("td")[6].className == "clickedX" && (squaresLeft.indexOf(3) > -1)){
          document.getElementsByTagName("td")[3].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[3]);
          locationCompChoice = squaresLeft.indexOf(3);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColOne = true;
        }else{
          solvedPlayColOne = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }else if(playColTwo == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[1].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(7) > -1)){
          document.getElementsByTagName("td")[7].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[7]);
          locationCompChoice = squaresLeft.indexOf(7);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else if(document.getElementsByTagName("td")[4].className == "clickedO" && document.getElementsByTagName("td")[7].className == "clickedO" && (squaresLeft.indexOf(1) > -1)){
          document.getElementsByTagName("td")[1].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[1]);
          locationCompChoice = squaresLeft.indexOf(1);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else if(document.getElementsByTagName("td")[1].className == "clickedO" && document.getElementsByTagName("td")[7].className == "clickedO" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else{
          solvedPlayColTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[1].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(7) > -1)){
          document.getElementsByTagName("td")[7].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[7]);
          locationCompChoice = squaresLeft.indexOf(7);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else if(document.getElementsByTagName("td")[4].className == "clickedX" && document.getElementsByTagName("td")[7].className == "clickedX" && (squaresLeft.indexOf(1) > -1)){
          document.getElementsByTagName("td")[1].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[1]);
          locationCompChoice = squaresLeft.indexOf(1);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else if(document.getElementsByTagName("td")[1].className == "clickedX" && document.getElementsByTagName("td")[7].className == "clickedX" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColTwo = true;
        }else{
          solvedPlayColTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }
    else if(playColThree == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[2].className == "clickedO" && document.getElementsByTagName("td")[5].className == "clickedO" && (squaresLeft.indexOf(8) > -1)){
          document.getElementsByTagName("td")[8].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[8]);
          locationCompChoice = squaresLeft.indexOf(8);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else if(document.getElementsByTagName("td")[5].className == "clickedO" && document.getElementsByTagName("td")[8].className == "clickedO" && (squaresLeft.indexOf(2) > -1)){
          document.getElementsByTagName("td")[2].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[2]);
          locationCompChoice = squaresLeft.indexOf(2);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else if(document.getElementsByTagName("td")[2].className == "clickedO" && document.getElementsByTagName("td")[8].className == "clickedO" && (squaresLeft.indexOf(5) > -1)){
          document.getElementsByTagName("td")[5].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[5]);
          locationCompChoice = squaresLeft.indexOf(5);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else{
          solvedPlayColThree = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[2].className == "clickedX" && document.getElementsByTagName("td")[5].className == "clickedX" && (squaresLeft.indexOf(8) > -1)){
          document.getElementsByTagName("td")[8].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[8]);
          locationCompChoice = squaresLeft.indexOf(8);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else if(document.getElementsByTagName("td")[5].className == "clickedX" && document.getElementsByTagName("td")[8].className == "clickedX" && (squaresLeft.indexOf(2) > -1)){
          document.getElementsByTagName("td")[2].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[2]);
          locationCompChoice = squaresLeft.indexOf(2);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else if(document.getElementsByTagName("td")[2].className == "clickedX" && document.getElementsByTagName("td")[8].className == "clickedX" && (squaresLeft.indexOf(5) > -1)){
          document.getElementsByTagName("td")[5].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[5]);
          locationCompChoice = squaresLeft.indexOf(5);
          squaresLeft.splice(locationCompChoice, 1);
          solvedPlayColThree = true;
        }else{
          solvedPlayColThree = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }else if(playCrossOne == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[0].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(8) > -1)){
          document.getElementsByTagName("td")[8].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[8]);
          locationCompChoice = squaresLeft.indexOf(8);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne = true;
        }else if(document.getElementsByTagName("td")[8].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(0) > -1)){
          document.getElementsByTagName("td")[0].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[0]);
          locationCompChoice = squaresLeft.indexOf(0);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne = true;
        }else if(document.getElementsByTagName("td")[0].className == "clickedO" && document.getElementsByTagName("td")[8].className == "clickedO" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne = true;
        }else{
          solvedCrossOne = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[0].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(8) > -1)){
          document.getElementsByTagName("td")[8].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[8]);
          locationCompChoice = squaresLeft.indexOf(8);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne= true;
        }else if(document.getElementsByTagName("td")[8].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(0) > -1)){
          document.getElementsByTagName("td")[0].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[0]);
          locationCompChoice = squaresLeft.indexOf(0);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne = true;
        }else if(document.getElementsByTagName("td")[8].className == "clickedX" && document.getElementsByTagName("td")[0].className == "clickedX" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossOne = true;
        }else{
          solvedCrossOne = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }else if(playCrossTwo == true){
      if(playerchoice == "O"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[2].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(6) > -1)){
          document.getElementsByTagName("td")[6].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[6]);
          locationCompChoice = squaresLeft.indexOf(6);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo = true;
        }else if(document.getElementsByTagName("td")[6].className == "clickedO" && document.getElementsByTagName("td")[4].className == "clickedO" && (squaresLeft.indexOf(2) > -1)){
          document.getElementsByTagName("td")[2].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[2]);
          locationCompChoice = squaresLeft.indexOf(2);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo = true;
        }else if(document.getElementsByTagName("td")[2].className == "clickedO" && document.getElementsByTagName("td")[6].className == "clickedO" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo= true;
        }else{
          solvedCrossTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
      if(playerchoice == "X"){
        console.log(document.getElementsByTagName("td"))
        if(document.getElementsByTagName("td")[2].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(6) > -1)){
          document.getElementsByTagName("td")[6].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[6]);
          locationCompChoice = squaresLeft.indexOf(6);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo= true;
        }else if(document.getElementsByTagName("td")[6].className == "clickedX" && document.getElementsByTagName("td")[4].className == "clickedX" && (squaresLeft.indexOf(2) > -1)){
          document.getElementsByTagName("td")[2].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[2]);
          locationCompChoice = squaresLeft.indexOf(2);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo = true;
        }else if(document.getElementsByTagName("td")[6].className == "clickedX" && document.getElementsByTagName("td")[2].className == "clickedX" && (squaresLeft.indexOf(4) > -1)){
          document.getElementsByTagName("td")[4].className = 'clickedO';
          console.log(document.getElementsByTagName("td")[4]);
          locationCompChoice = squaresLeft.indexOf(4);
          squaresLeft.splice(locationCompChoice, 1);
          solvedCrossTwo = true;
        }else{
          solvedCrossTwo = true;
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
          }
          var computerRnd = getRandomInt(0, squaresLeft.length)
          console.log(computerRnd);
          //determine possible moves left then choose
          var computerChoice = squaresLeft[computerRnd];
          console.log('computer chooses: ' + computerChoice);
          //go to win condition if boolean is true otherwise use computer move
          if(playerchoice == "O"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
          if(playerchoice == "X"){
            console.log(document.getElementsByTagName("td"))
            document.getElementsByTagName("td")[computerChoice].className='clickedO';
            console.log(document.getElementsByTagName("td")[computerChoice]);
            locationCompChoice = squaresLeft.indexOf(computerChoice);
            squaresLeft.splice(locationCompChoice, 1);
          }
        }
      }
    }else{
      //generate random number for computer turn
      function makeCompGo(){
        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }
        var computerRnd = getRandomInt(0, squaresLeft.length)
        console.log(computerRnd);
        //determine possible moves left then choose
        var computerChoice = squaresLeft[computerRnd];
        console.log('computer chooses: ' + computerChoice);
        //go to win condition if boolean is true otherwise use computer move


        if(playerchoice == "O"){
          console.log(document.getElementsByTagName("td"))
          document.getElementsByTagName("td")[computerChoice].className = 'clickedX';
          console.log(document.getElementsByTagName("td")[computerChoice]);
          locationCompChoice = squaresLeft.indexOf(computerChoice);
          squaresLeft.splice(locationCompChoice, 1);
        }
        if(playerchoice == "X"){
          console.log(document.getElementsByTagName("td"))
          document.getElementsByTagName("td")[computerChoice].className='clickedO';
          console.log(document.getElementsByTagName("td")[computerChoice]);
          locationCompChoice = squaresLeft.indexOf(computerChoice);
          squaresLeft.splice(locationCompChoice, 1);
        }
      }
      makeCompGo();
    }
  }
}

//create game-board

function clickableGrid(rows, cols, callback) {
  var i = 0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < rows; ++r) {
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < cols; ++c) {
      var cell = tr.appendChild(document.createElement('td'));
      cell.innerHTML = ++i;
      cell.addEventListener('click', (function(el, r, c, i) {
        return function() {
          callback(el, r, c, i);
        }
      })(cell, r, c, i), false);
    }
  }
  return grid;
}


//appending grid to the body of htmls
function startGame(){
  document.body.appendChild(grid);
}
function Winner(){
  alert('You won!');
}
