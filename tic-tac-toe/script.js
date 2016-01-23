console.log ("It Runs");

var board = document.getElementById("board");	

console.log(board);

var gameboard = document.getElementsByTagName("button");
console.log(gameboard);
// gameboard.addEventListener("click", function(userClick) {
// 	// for (var i = 0; i < gameboard.length; i++) 
// 	userClick.preventDefault();
	var input = gameboard.value;
	console.log(input);

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
// console.log(buttonOne);
var counter = 0;

buttonOne.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonOne.innerHTML = "X";
		} else {buttonOne.innerHTML = "O"}
		
	});
	console.log(counter);

console.log("You clicked");

buttonTwo.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonTwo.innerHTML = "X";
		} else {buttonTwo.innerHTML = "O"}
		
	});

buttonThree.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonThree.innerHTML = "X";
		} else {buttonThree.innerHTML = "O"}
		
	});

buttonFour.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonFour.innerHTML = "X";
		} else {buttonFour.innerHTML = "O"}
		
	});

buttonFive.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonFive.innerHTML = "X";
		} else {buttonFive.innerHTML = "O"}
		
	});

buttonSix.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonSix.innerHTML = "X";
		} else {buttonSix.innerHTML = "O"}
		
	});

buttonSeven.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonSeven.innerHTML = "X";
		} else {buttonSeven.innerHTML = "O"}
		
	});
buttonEight.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonEight.innerHTML = "X";
		} else {buttonEight.innerHTML = "O"}
		
	});
buttonNine.addEventListener("click", function(click) {
	for (var i = 0; i < gameboard.length; i++) 
		if (i % 2 == 0) {
			buttonNine.innerHTML = "X";
		} else {buttonNine.innerHTML = "O"}
		
	});