console.log('Hello frontend');

/**********************
A variable to access all the boxes ** returns an array **
***********************/

var boxes = document.getElementsByClassName('box');

/*********************************************
Variables to access each induvidual box
*********************************************/

var box0 = document.getElementById('box0');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');


/********************
keeps track if its still the computer's turn
*******************/
var computerTurn;

/********************
random number used for the computer's choice
*********************/
var randomNumber;

/***********************
The reset button
*********************/
var resetButton = document.querySelector('.reset');

/***********************
A variable to keep track if someone has won
************************/
var winner = false;

/**********************
keeps track of how many spots have been used
************************/
var imgCount = 0;

/********************
does this really need explaining
*******************/
var score = 0;

/******************
variable to display your score
******************/
var message = document.querySelector('.score');


function checkForWinner() {
		//If statement to check if player(x) has won
		if(box0.data == 'x' && box1.data == 'x' && box2.data == 'x') {
			alert("Congratulations! You won!!!");
			box0.style.border = "4px solid #00e600";
			box1.style.border = "4px solid #00e600";
			box2.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box3.data == 'x' && box4.data == 'x' && box5.data == 'x') {
			alert("Congratulations! You won!!!");
			box3.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box5.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box6.data == 'x' && box7.data == 'x' && box8.data == 'x') {
			alert("Congratulations! You won!!!");
			box6.style.border = "4px solid #00e600";
			box7.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box0.data == 'x' && box3.data == 'x' && box6.data == 'x') {
			alert("Congratulations! You won!!!");
			box0.style.border = "4px solid #00e600";
			box3.style.border = "4px solid #00e600";
			box6.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box1.data == 'x' && box4.data == 'x' && box7.data == 'x') {
			alert("Congratulations! You won!!!");
			box1.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box7.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box2.data == 'x' && box5.data == 'x' && box8.data == 'x') {
			alert("Congratulations! You won!!!");
			box2.style.border = "4px solid #00e600";
			box5.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box0.data == 'x' && box4.data == 'x' && box8.data == 'x') {
			alert("Congratulations! You won!!!");
			box0.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box2.data == 'x' && box4.data == 'x' && box6.data == 'x') {
			alert("Congratulations! You won!!!");
			box2.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box6.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score ++;
			message.textContent = "Score: " + score;
			winner = true;
			return;
			//winner = true;
		}

		//If statement to check if computer(o) has won
			if(box0.data == 'o' && box1.data == 'o' && box2.data == 'o') {
			alert("Oh No! The computer beat you.");
			box0.style.border = "4px solid #00e600";
			box1.style.border = "4px solid #00e600";
			box2.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box3.data == 'o' && box4.data == 'o' && box5.data == 'o') {
			alert("Oh No! The computer beat you.");
			box3.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box5.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box6.data == 'o' && box7.data == 'o' && box8.data == 'o') {
			alert("Oh No! The computer beat you.");
			box6.style.border = "4px solid #00e600";
			box7.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box0.data == 'o' && box3.data == 'o' && box6.data == 'o') {
			alert("Oh No! The computer beat you.");
			box0.style.border = "4px solid #00e600";
			box3.style.border = "4px solid #00e600";
			box6.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box1.data == 'o' && box4.data == 'o' && box7.data == 'o') {
			alert("Oh No! The computer beat you.");
			box1.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box7.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box2.data == 'o' && box5.data == 'o' && box8.data == 'o') {
			alert("Oh No! The computer beat you.");
			box2.style.border = "4px solid #00e600";
			box5.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box0.data == 'o' && box4.data == 'o' && box8.data == 'o') {
			alert("Oh No! The computer beat you.");
			box0.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box8.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		} else if (box2.data == 'o' && box4.data == 'o' && box6.data == 'o') {
			alert("Oh No! The computer beat you.");
			box2.style.border = "4px solid #00e600";
			box4.style.border = "4px solid #00e600";
			box6.style.border = "4px solid #00e600";
			resetButton.style.visibility = "visible";
			score --;
			message.textContent = "Score: " + score;
			winner = true;
			return;
		}

		for (var d = 0; d < boxes.length; d++) {
			if (boxes[d].hasChildNodes()) {
				imgCount ++;
			}
			console.log(imgCount);
			if(imgCount >= 8 && winner == false) {
				alert("It's a Tie!");
				resetButton.style.visibility = "visible";
				message.textContent = "Score: " + score;
				return;
			}
		}

		imgCount = 0;


}


/********************************
1) generates a random #
2) appends an O if there isnt already an img
***************************/
function computerChoice() {

		randomNumber = Math.floor(Math.random() * 9);

		if (boxes[randomNumber].hasChildNodes() == false) {

			//console.log(randomNumber);

			var img = document.createElement('img');

			img.src = 'js/o.jpg';

			boxes[randomNumber].appendChild(img);

			boxes[randomNumber].data = "o";

			computerTurn = false;
		}
}


/********************************
1) Adds an event listener to all the boxes
2) creates and appends an X in the div you click on
3) runs the computer's choice function
**********************************/

for (var i = 0; i < boxes.length; i++) {

	boxes[i].addEventListener('click', function(){

		if(this.hasChildNodes()) {
			alert("Please pick another spot.");
			return;
		} else {

		var img = document.createElement('img');

		img.src = 'js/x.jpg';

		this.appendChild(img);

		this.data = "x";

		//checkForWinner();

		computerTurn = true

		while (computerTurn == true) {
			computerChoice();
		}

		checkForWinner();

	}

	});

}

/**********************************
Adds event listener to the reset button
Empties boxes
Makes the reset button visible
**********************************/
resetButton.addEventListener('click', function(){

	for(var j = 0; j < boxes.length; j++) {
				boxes[j].innerHTML = null;
				boxes[j].data = null;
				boxes[j].style.border = null;
			}

	resetButton.style.visibility = "hidden";

	imgCount = 0;

	});




