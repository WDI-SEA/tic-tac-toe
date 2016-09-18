console.log('Hello frontend');

/**********************
A variable to access all the boxes ** returns an array **
***********************/

var boxes = document.getElementsByClassName('box');

/*********************************************
Variables to access each induvidual box
*********************************************/

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');


/********************
keeps track if its still the computer's turn
*******************/
var computerTurn;

/********************
random number used for the computer's choice
*********************/
var randomNumber;



/********************************
1) generates a random #
2) appends an O if there isnt already an img
***************************/
function computerChoice() {

		randomNumber = Math.floor(Math.random() * 9 + 1);

		if (boxes[randomNumber].hasChildNodes()) {

			randomNumber = Math.floor(Math.random() * 9 + 1);

			} else {

			console.log(randomNumber);

			var img = document.createElement('img');

			img.src = 'js/o.jpg';

			boxes[randomNumber].appendChild(img);

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

		computerTurn = true;

		while (computerTurn == true) {
			computerChoice();
		}
	}

	});

}




