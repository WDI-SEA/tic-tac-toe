var board = document.getElementById('container');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');
var allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
var selectedXBoxes = [];
var selectedOBoxes = [];
var imageX = function(e){e.target.style.backgroundImage = 'url(./img/red-x.png)'}; //show X
var imageO = function(e){e.target.style.backgroundImage = 'url(./img/blue-o.png)'}; //show O
var winCombos = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];

// Event Listener for click on each box/div
for(var i = 0; i < allBoxes.length; i++){
	allBoxes[i].addEventListener('click', clicked);
};

// Remove All Event Listeners
function removeAllEventListeners(){
	allBoxes.forEach(function(){
		for(var i = 0; i < allBoxes.length; i++){
			allBoxes[i].removeEventListener('click', clicked);
		}
	});
};

// Action when clicked
function clicked(e){
	console.log(e.target.getAttribute('id') + ' clicked!');
	e.target.removeEventListener('click', clicked);
	switchTurn(e);
	checkWin(selectedXBoxes, winCombos);
};

// Switch turns
function switchTurn(e){
	//if Xlength equals Olength add selected box/div to X array, else add it to O array
	if(selectedXBoxes.length == selectedOBoxes.length){
		selectedXBoxes.push(e.target.getAttribute("id").replace("box", ""));
		imageX(e); //show X
		//Player 1 color
		if(checkWin(selectedXBoxes, winCombos)){
		   removeAllEventListeners();
		   console.log('X wins!');
		   declareWinner();
		}
	}
	else{
		selectedOBoxes.push(e.target.getAttribute("id").replace("box", ""));
		imageO(e); //show O
		//Player 2 color
		if(checkWin(selectedOBoxes, winCombos)){
		   removeAllEventListeners();
		   console.log('O wins!');
		   declareWinner();
		}
	}
};

// Player Turn lights up

// Check Winner
function checkWin(selectedBoxes, winCombos){
   if(selectedBoxes.length >= 3){
       selectedBoxes = selectedBoxes.sort();
       for(var i = 0; i < winCombos.length; i++){
       		var counter = 0;
           for(var j = 0; j < winCombos[i].length; j++){
           		// console.log(winCombos[i][j]);
           		// console.log(selectedBoxes);
               if(selectedBoxes.includes(winCombos[i][j].toString())){
               		counter++;
               }
               if (counter >= 3){
               	return true;
               }
           }
           counter = 0;
       }
   }
   return false;
};

function declareWinner(){
	var newDiv = document.createElement('div');
	newDiv.className = 'winner';
	var xWins = document.createTextNode('X Wins!');
	var oWins = document.createTextNode('O Wins!');
	var heading = document.getElementById('heading');
	document.body.insertBefore(newDiv, heading);
	if(selectedXBoxes.length == selectedOBoxes.length){
		newDiv.appendChild(oWins);
	}
	else{
		newDiv.appendChild(xWins);
	}
}
// tie condition else

// reset button

// var reset = document.getElementById('reset');

// if there is any one array within the winCombos array in which all of its elements are included in selectedXBoxes then X wins
