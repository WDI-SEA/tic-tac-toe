var squareArray = [];
for (var i = 0; i <= 8; i++){
	squareArray[i] = document.getElementById('box' + i);
}
var turn = document.getElementById('turn');
var emptyInnerHtml = '<h2><strong> </strong></h2>';

var xOrO = true;
turn.innerHTML = '<h3>Current Player: X </h3>';

var moves = 0;
var square;

var addListener = function(square){
	square.addEventListener('click', function(e){
		e.preventDefault();
		if (square.innerHTML === emptyInnerHtml){
			
			if (xOrO === true){
				square.innerHTML = '<h2><strong>X</strong></h2>';
				xOrO = false;	
				turn.innerHTML = '<h3>Current Player: O </h3>';
				moves++;
				square.className += ' xColor';
				if (moves === 9){
					turn.innerHTML = '<h3>No More Moves!</h3>';
				}
			}
			else if(xOrO === false){
				square.innerHTML = '<h2><strong>O</strong></h2>';
				xOrO = true;
				turn.innerHTML = '<h3>Current Player: X </h3>';
				moves++;
				square.className += ' oColor';
				
			}
			 
		}
		else if (moves === 9){
			window.alert('Game Over! no more moves.');
		}
		else {
			window.alert('Please choose an empty space :D');
		}
	});
};

for (var i = 0; i <= 8; i++){
	square = squareArray[i];
	addListener(square);

}


document.getElementById('reset').addEventListener('click', function(e){
	e.preventDefault();
	for (item in squareArray) {
		squareArray[item].className = 'theBoard';
		squareArray[item].innerHTML = '<h2><strong> </strong></h2>';
		xOrO = true;
		turn.innerHTML = '<h3>Current Player: X </h3>';
		moves = 0;
	}
});

