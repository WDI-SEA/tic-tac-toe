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

// Event listener for click on each box/div
for (var i = 0; i < allBoxes.length; i++){
	allBoxes[i].addEventListener('click', clicked);
};

// Action when clicked
function clicked(e){
	console.log(e.target.getAttribute('id') + ' clicked!');
	e.target.removeEventListener('click', clicked);
	switchTurn(e);
};

// Switch turns
function switchTurn(e){
	//if Xlength equals Olength add selected box/div to X array, else add it to O array
	if (selectedXBoxes.length == selectedOBoxes.length){
		selectedXBoxes.push(e.target.getAttribute("id").replace("box", ""));
		imageX(e); //show X
		//Player 1 color
	}
	else{
		selectedOBoxes.push(e.target.getAttribute("id").replace("box", ""));
		imageO(e); //show O
		//Player 2 color
	};
};

//Player Turn lights up

// win condition 123 456 789 147 258 369 159 357

// tie condition else

// reset button

// var reset = document.getElementById('reset');