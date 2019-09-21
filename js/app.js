var currentPlayer = 1;
var winCombo = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]
var xPosition = [false,false,false,false,false,false,false,false];
var oPosition = [false,false,false,false,false,false,false,false];

let box = document.querySelectorAll('.box');
for (let i = 0; i < box.length; i++) {
	box[i].addEventListener('click', boxClicked);
	console.log(box[i]);
}
function boxClicked(e) {
  if (e.target.innerHTML === "X" || e.target.innerHTML === "O") {
    box.removeEventListener("click", boxClicked);
  }
  takeTurn(e);
}
function takeTurn(e) {
  if (currentPlayer === 1) {
    var x = e.target.innerHTML = "X";
    // xPosition.push(x);
    xPosition[e.target.id] = true;
    checkForWin(e)
    console.log(xPosition);
    currentPlayer++;
  } else if (currentPlayer !== 1) {
    var o = e.target.innerHTML = "O";
    // oPosition.push(o);
    oPosition[e.target.id] = true;
    checkForWin(e);
    // console.log(oPosition);
    console.log(oPosition);
    currentPlayer--;
  }
}
function checkForWin(e){
  
  for(let i = 0; i < winCombo.length; i++) {
    

      for(let j= 0; j< winCombo.length[i]; j++){
      
    
      }
    }

}
