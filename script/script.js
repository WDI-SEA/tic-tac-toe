var squareArray = [];
squareArray[0] = document.getElementById('box1');
squareArray[1] = document.getElementById('box2');
squareArray[2] = document.getElementById('box3');
squareArray[3] = document.getElementById('box4');
squareArray[4] = document.getElementById('box5');
squareArray[5] = document.getElementById('box6');
squareArray[6] = document.getElementById('box7');
squareArray[7] = document.getElementById('box8');
squareArray[8] = document.getElementById('box9');

var emptyInnerHtml = document.getElementById('box1').innerHTML;
console.log(emptyInnerHtml);

var xOrO = true;
var moves;

for (item in squareArray){
	squareArray[item].addEventListener('click', function(){
		console.log(1);
		if (squareArray[item].innerHTML === emptyInnerHtml){
				console.log(2);
				if (xOrO === true){
					console.log(3);
					squareArray[item].innerHTML = '<h2><strong>X</strong></h2>';
					console.log(squareArray[item].innerHTML);
					xOrO = false;	
				}
				else if(xOrO === false){
					console.log(4);
					squareArray[item].innerHTML = '<h2><strong>O</strong></h2>';
					console.log(squareArray[item].innerHTML);
					xOrO = true;
				}
		}
		else {
				console.log(5);
				window.alert("Please choose an empty space :D");
		}
		console.log(6);
	});
}

	

	