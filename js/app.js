var boxes = document.getElementsByClassName('box');
var clickCount = 0;
var xWin = document.getElementById('wins1');
var oWin = document.getElementById('wins2');
var winCondition = [
  ["00", "01", "02"],
  ["10", "11", "12"],
  ["20", "21", "22"],
  ["00", "10", "20"],
  ["01", "11", "21"],
  ["02", "12", "22"],
  ["00", "11", "22"],
  ["02", "11", "20"],
];
var xWinArr = [];
var oWinArr = [];
var didXWin;
var didOWin;

//add event listener
function addBoxListeners(){
	for(var i=0; i<boxes.length; i++){
		boxes[i].addEventListener('click', boxClicked);
	}
}

//click event
//change text of boxes
//remove event listeners
//add class name for color change
function boxClicked(){
	clickCount++;
	if(clickCount%2!==0 && clickCount<=9){
		this.textContent = "X";
		this.className += " boxX";
		xWinArr.push(this.id);
		this.removeEventListener('click', boxClicked);
	}else if(clickCount%2===0 && clickCount<=9){
		this.textContent = "O";
		this.className += " boxO";
		oWinArr.push(this.id);
		this.removeEventListener('click', boxClicked);
	}
	if(clickCount>=5){
		checkWinner();
	}
}

function checkWinner(){
	console.log("did someone win???");
	function compareNumbers(a, b){
		return a - b;
	}
	didXWin = xWinArr.slice().sort(compareNumbers);
	didOWin = oWinArr.slice().sort(compareNumbers);

	for(let i=0; i<winCondition.length; i++){
		if(winCondition[i] === didXWin){
			console.log("x won");
		}
		console.log("this was checked");
	}
	for(let i=0; i<winCondition.length; i++){
		if(winCondition[i] === didOWin){
			console.log("o won");
		}
		console.log("this was checked");
	}
	console.log("hmmmm");
}

//reset
function reset(){
	var xBoxes = document.getElementsByClassName('boxX');
	var oBoxes = document.getElementsByClassName('boxO');
	for(var i=0; i<xBoxes.length; i++){
		xBoxes[i].textContent = " ";
		xBoxes[i].className = "box";
	}
	for(var i=0; i<oBoxes.length; i++){
		oBoxes[i].textContent = " ";
		oBoxes[i].className = "box";
	}
	addBoxListeners();
	clickCount = 0;
}

//full reset
function resetGame(){
	wins1 = 0;
	wins2 = 0;
	reset();
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('reset').addEventListener('click', reset);
	document.getElementById('resetFull').addEventListener('click', resetGame);
	addBoxListeners();
})