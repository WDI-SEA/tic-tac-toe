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

squareArray[0].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[0].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[0].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[0].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[1].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[1].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[1].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[1].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[2].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[2].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[2].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[2].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[3].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[3].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[3].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[3].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[4].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[4].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[4].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[4].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[5].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[5].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[5].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[5].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[6].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[6].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[6].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[6].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[7].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[7].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[7].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[7].innerHTML = '<h2><strong>O</strong></h2>';
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

squareArray[8].addEventListener('click', function(e){
	e.preventDefault();
		
	if (squareArray[8].innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				squareArray[8].innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				moves++;
			}
			else if(xOrO === false){
				squareArray[8].innerHTML = '<h2><strong>O</strong></h2>';
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

	

	