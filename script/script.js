
var squareArray = [];
squareArray[1] = document.getElementById('1');
var square2 = document.getElementById('2');
var square3 = document.getElementById('3');
var square4 = document.getElementById('4');
var square5 = document.getElementById('5');
var square6 = document.getElementById('6');
var square7 = document.getElementById('7');
var square8 = document.getElementById('8');
var square9 = document.getElementById('9');
console.log(squareArray[1]);

var xOrO = true;



squareArray[1].addEventListener('click', function(){
	if (squareArray[1].value === ''){

		if (xOrO === true){
			squareArray[1].value = 'X';
			xOrO = false;	
		}
		else if(xOrO === false){
			squareArray[1].value = 'O';
			xOrO = true;
		}
	}
	else {
		window.alert("Please choose an empty space :D");
	}

})