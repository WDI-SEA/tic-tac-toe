var top1 = document.getElementById('top-1');
var top2 = document.getElementById('top-2');
var top3 = document.getElementById('top-3');
var middle1 = document.getElementById('middle-1');
var middle2 = document.getElementById('middle-2');
var middle3 = document.getElementById('middle-3');
var bottom1 = document.getElementById('bottom-1');
var bottom2 = document.getElementById('bottom-2');
var bottom3 = document.getElementById('bottom-3');

var currentPlayer = 'x';
var currentPlayero = '<img src="img/o.jpg" alt="o" />';
var currentPlayerx = '<img src="img/x.jpg" alt="x" />';

var newGame = document.getElementById('btn');



var winComb = [ ['top1', 'top2', 'top3'], 
                ['middle1', 'middle2', 'middle3'], 
                ['bottom1', 'bottom2', 'bottom3'],
        	    ['top1', 'middle1', 'bottom1'], 
        	    ['top2', 'middle2', 'bottom2'], 
        		['top3', 'middle3', 'bottom3'],
        		['top1', 'middle2', 'bottom3'], 
        		['top3', 'middle2', 'bottom1'] ];



function checkWinner(){
if(top1 && top2 && top3 === currentPlayer){
    alert('sproket wrench please');
}else if(middle1 && middle2 && middle3 === currentPlayer){
	alert('sprocket wrench please');
}else if(bottom1 && bottom3 && bottom3){
	alert('sprocket wrench please');
}else if(top1 && middle1 && bottom1 === currentPlayer){
	alert('sprocket wrench please');
}else if(top2 && middle2 && bottom2 === currentPlayer){
	alert('sprocket wrench please');
}else if(top3 && middle3 && bottom3 === currentPlayer){
	alert('sprocket wrench please');
}else if(top1 && middle2 && bottom3 === currentPlayer){
	alert('sprocket wrench please');
}else if(top3 && middle2 && bottom1 === currentPlayer){

}else{
	alert('tie');
}




checkWinner();
 

top1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		top1.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		top1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
	
});


top2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		top2.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		top2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
	
});

top3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		top3.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		top3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
	
});

middle1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
	    middle1.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		middle1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});

middle2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		middle2.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		middle2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});

middle3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		middle3.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		middle3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});

bottom1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		bottom1.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		bottom1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});

bottom2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		bottom2.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		bottom2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});

bottom3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	if (currentPlayer === 'x') {
		bottom3.innerHTML = currentPlayerx;
		currentPlayer = 'o';
	} else if (currentPlayer === 'o') {
		bottom3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}
});




newGame.addEventListener('click', function() {
  alert('I know how to add an event listener');
	   location.reload();

});

