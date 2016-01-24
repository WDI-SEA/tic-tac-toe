console.log ("It Runs");

var board = document.getElementById("board");	

console.log(board);

var buttons = document.getElementsByTagName("button");
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
// var clickButton = function(click) {
// 	for (var i = 0; i < buttons.length; i++) 
// 		counter ++;
// 	}
	// body...

// VVV unsuccessful attempt at reset button below  VVV
//  resetButton.addEventListener("click", function() {
// 	document.getElementById("resetbutton").value = null;
// });

buttonOne.addEventListener("click", function(click) {
	// for (var i = 0; i < buttons.length; i++) 
	counter ++;
	click.preventDefault();
		if (counter % 2 == 0) {
			buttonOne.innerHTML = "O";
		} else {buttonOne.innerHTML = "X"}
		
	});

console.log("You clicked");

buttonTwo.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
	counter	++;
	click.preventDefault();
		if (counter % 2 == 0) {
			buttonTwo.innerHTML = "O";
		} else {buttonTwo.innerHTML = "X"}
		
	});

buttonThree.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonThree.innerHTML = "O";
		} else {buttonThree.innerHTML = "X"}
		
	});

buttonFour.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonFour.innerHTML = "O";
		} else {buttonFour.innerHTML = "X"}
		
	});

buttonFive.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonFive.innerHTML = "O";
		} else {buttonFive.innerHTML = "X"}
		
	});

buttonSix.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonSix.innerHTML = "O";
		} else {buttonSix.innerHTML = "X"}
		
	});

buttonSeven.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonSeven.innerHTML = "O";
		} else {buttonSeven.innerHTML = "X"}
		
	});
buttonEight.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonEight.innerHTML = "O";
		} else {buttonEight.innerHTML = "X"}
		
	});
buttonNine.addEventListener("click", function(click) {
//	for (var i = 0; i < buttons.length; i++) 
		counter	++;
		click.preventDefault();
		if (counter % 2 == 0) {
			buttonNine.innerHTML = "O";
		} else {buttonNine.innerHTML = "X"}
		
	});