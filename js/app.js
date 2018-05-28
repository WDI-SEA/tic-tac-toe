

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
var marker =["X","O"];
var turn = 0;




function toggle(){
	if(turn === 0){
    turn = 1;
	}
else{
    turn = 0;
	}
}

function xAndO(){
	box.innerText = marker[turn];
}
	

for(var i =0; i < box.length; i++){

box[i].addEventListener("click", toggle, xAndO);

}





	




