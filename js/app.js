

var boxOne = document.getElementById("one");
var boxTwo = document.getElementById("two");
var boxThree = document.getElementById("three");
var boxFour = document.getElementById("four");
var boxFive = document.getElementById("five");
var boxSix = document.getElementById("six");
var boxSeven = document.getElementById("seven");
var boxEight = document.getElementById("eight");
var boxNine = document.getElementById("nine");
var box = document.getElementsByClassName("box");
var button = document.getElementById("buttonOne")
var marker =["X","O"];
var turn = 0;
var counter = 0;

// var eG = false

// function endGame(){
// 	// eG = true;
// 	alert(marker[turn] + " is the winner");
// 	reset();

// }
function reset(){
	for(var i =0; i < box.length; i++){

		box[i].innerText = "";

		}

	turn = 0;
	counter = 0;
	

}

button.addEventListener("click", reset);
//switch between x and o
function toggle(){
	if(turn === 0){
    turn = 1;
	}
else{
    turn = 0;
	}
	console.log('it worked')
	
	counter++
	console.log("counter" + counter)
	
}

function xAndO(e){
	console.log('claim')
	console.log(e.target)
	e.target.innerText = marker[turn];
	winCondition(marker[turn])
}
	
for(var i =0; i < box.length; i++){
	box[i].addEventListener("click", function(e){
		if(e.target.innerText == ""){
			toggle();
			xAndO(e);
		}
		
	})
}

function winCondition(player) {
	console.log(player);
	var resetOnEnd = function(){
		for(var i =0; i < box.length; i++){

		box[i].innerText = "";

		}
		turn = 0;
		counter = 0;

	}
	function endGame(){
		alert(marker[turn] + " is the winner");
		}


	if (counter >= 5){
		if (boxOne.innerText == player && boxTwo.innerText == player && boxThree.innerText == player){
			endGame();
			resetOnEnd();
			console.log('win 1');
		}
	
		else if  (boxFour.innerText == player && boxFive.innerText == player && boxSix.innerText == player){
			endGame();
			resetOnEnd();
			console.log('win 2');
		}
		else if  (boxSeven.innerText == player && boxEight.innerText == player && boxNine.innerText == player){ 
			endGame();
			resetOnEnd();
			console.log('win 3');
		}
		else if  (boxOne.innerText == player && boxFour.innerText == player && boxSeven.innerText == player){
			endGame();
			resetOnEnd();
			console.log('win 4');
		}
		else if (boxTwo.innerText == player && boxFive.innerText == player && boxEight.innerText == player){
			endGame();
			resetOnEnd();
			console.log('win 5');
		}
		else if 	(boxThree.innerText == player && boxSix.innerText == player && boxNine.innerText == player){
			endGame();
			resetOnEnd();
			console.log('win 6');
		}
		else if	(boxOne.innerText == player && boxFive.innerText == player && boxNine.innerText == player) {
			endGame();
			resetOnEnd();
			console.log('win 7');
		}
		else if (boxThree.innerText == player && boxFive.innerText == player && boxSeven.innerText == player) {
		 	endGame();
		 	resetOnEnd();
		 	console.log('win 8');
		}
	}

}

	
	// body...



//win conditons

//(((boxOne && boxTwo && boxThree)===marker[0])||((boxOne && boxTwo && boxThree)===marker[1]))
//(((boxFour && boxFive && boxSix)===marker[0])||((boxFour && boxFive && boxSix)===marker[1]))
//(((boxSeven && boxEight && boxNine)===marker[0])||((boxSeven && boxEight && boxNine)===marker[1]))
//(((boxOne && boxFour && boxSeven)===marker[0])||((boxOne && boxFour && boxSeven)===marker[1]))
//(((boxTwo && boxFive && boxEight)===marker[0])||((boxTwo && boxFive && boxEight)===marker[1]))
//(((boxThree && boxSix && boxNine)===marker[0])||((boxThree && boxSix && boxNine)===marker[1]))
//(((boxOne && boxFive && boxNine)===marker[0])||((boxOne && boxFive && boxNine)===marker[1]))
//(((box && boxTwo && boxThree)===marker[0])||((boxOne && boxTwo && boxThree)===marker[1]))






	




