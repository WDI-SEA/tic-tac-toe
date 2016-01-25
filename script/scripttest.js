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

var xOrO = true;
var moves = 0;

for (item in squareArray){
squareArray[item].addEventListener('click', function(e, item){
	e.preventDefault();
		
	if (squareArray[item].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[item].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[item].innerHTML = '<h2><strong>O</strong></h2>';
				xOrO = true;
				moves++;
			}
	}
	else if (moves === 9){
		window.alert("Game Over! no more moves.");
	}
	else {
		window.alert("Please choose an empty space :D");
	}
	
});
}

	

	