console.log ("It Runs");

var board = document.getElementById("board");	

console.log(board);

var buttons = document.getElementsByClassName("grid");
console.log(buttons);

// buttons.addEventListener("click", function(userClick) {
// 	// for (var i = 0; i < buttons.length; i++) 
// 	userClick.preventDefault();
	var input = buttons.value;
//	console.log(input);

	// body...
//})

var buttonOne = document.getElementById("one");
var buttonTwo = document.getElementById("two");
var buttonThree = document.getElementById("three");
var buttonFour = document.getElementById("four");
var buttonFive = document.getElementById("five");
var buttonSix = document.getElementById("six");
var buttonSeven = document.getElementById("seven");
var buttonEight = document.getElementById("eight");
var buttonNine = document.getElementById("nine");
var resetButton = document.getElementById("clear");

var counter = 0;
var buttonArray = [];

// for (var i = 0; i < buttons.length; i++) 

// var clickButton = function(click) {
// 	for (var i = 0; i < buttons.length; i++) 
// 		counter ++;
// 	}
	// body...

// VVV unsuccessful attempt at reset button below  VVV
//  resetButton.addEventListener("click", function() {
// 	document.getElementById("resetbutton").value = null;
// });

resetButton.addEventListener("click", function(click) {
	buttonOne.innerHTML = ""; buttonOne.style.background = "default";
	buttonTwo.innerHTML = "";
	buttonThree.innerHTML = "";
	buttonFour.innerHTML = "";
	buttonFive.innerHTML = "";
	buttonSix.innerHTML = "";
	buttonSeven.innerHTML = "";
	buttonEight.innerHTML = "";
	buttonNine.innerHTML = "";
	console.log ("New Game")
})

buttonOne.addEventListener("click", function(click) {
	// for (var i = 0; i < buttons.length; i++) 
	counter ++; 
	click.preventDefault();
	
		if (counter % 2 == 0)  {(buttonOne.innerHTML = "O", buttonOne.style.background = "palevioletred");
		} else {(buttonOne.innerHTML = "X", buttonOne.style.background = "lightblue")};
	buttonOne.removeEventListener("click", click);
	});

console.log("You clicked");

buttonTwo.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
	counter	++;
	click.preventDefault();
		if (counter % 2 == 0) {
			(buttonTwo.innerHTML = "O", buttonTwo.style.background = "palevioletred");
		} else {(buttonTwo.innerHTML = "X", buttonTwo.style.background = "lightblue")};

	});
 // var clickHandler = function() {
 //        this.removeEventListener('click', clickHandler); }

buttonThree.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
		(buttonThree.innerHTML = "O", buttonThree.style.background = "palevioletred");
		} else {(buttonThree.innerHTML = "X", buttonThree.style.background = "lightblue")};
		
	});

buttonFour.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			(buttonFour.innerHTML = "O", buttonFour.style.background = "palevioletred");
		} else {(buttonFour.innerHTML = "X", buttonFour.style.background = "lightblue")};
		
	});

buttonFive.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			(buttonFive.innerHTML = "O", buttonFive.style.background = "palevioletred");
		} else {(buttonFive.innerHTML = "X", buttonFive.style.background = "lightblue")};
		
	});

buttonSix.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
	(buttonSix.innerHTML = "O", buttonSix.style.background = "palevioletred");
		} else {(buttonSix.innerHTML = "X", buttonSix.style.background = "lightblue")};
		
	});

buttonSeven.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
		(buttonSeven.innerHTML = "O", buttonSeven.style.background = "palevioletred");
		} else {(buttonSeven.innerHTML = "X", buttonSeven.style.background = "lightblue")};
		
	});
buttonEight.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			(buttonEight.innerHTML = "O", buttonEight.style.background = "palevioletred");
		} else {(buttonEight.innerHTML = "X", buttonEight.style.background = "lightblue")};
		
	});
buttonNine.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			(buttonNine.innerHTML = "O", buttonNine.style.background = "palevioletred");
		} else {(buttonNine.innerHTML = "X", buttonNine.style.background = "lightblue")};
	});

// buttonNine.onclick = function(click) {
//    buttonNine.removeEventListener("click"), a; 

  // var stopClick = document.querySelector("button");
  // function once() {
  //   console.log("Done.");
  //   buttons.removeEventListener("click", once);
  // };
