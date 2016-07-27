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
var currentPlayero = '<img src="img/o.jpg" alt="o">';
var currentPlayerx = '<img src="img/x.jpg" alt="x">';

var newGame = document.getElementById('btn');



// var winComb = [ ['top1', 'top2', 'top3'], 
//                 ['middle1', 'middle2', 'middle3'], 
//                 ['bottom1', 'bottom2', 'bottom3'],
//         	       ['top1', 'middle1', 'bottom1'], 
//         	       ['top2', 'middle2', 'bottom2'], 
//         		     ['top3', 'middle3', 'bottom3'],
//         		     ['top1', 'middle2', 'bottom3'], 
//         		     ['top3', 'middle2', 'bottom1'] ];



function checkWinner(){

	if(top1.innerHTML && top2.innerHTML && top3.innerHTML === currentPlayerx){
	    alert('sproket wrench please');
	    console.log('winner')
	}else if(middle1.innerHTML && middle2.innerHTML && middle3.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(bottom1.innerHTML && bottom3.innerHTML && bottom3.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(top1.innerHTML && middle1.innerHTML && bottom1.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(top2.innerHTML && middle2.innerHTML && bottom2.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(top3.innerHTML && middle3.innerHTML && bottom3.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(top1.innerHTML && middle2.innerHTML && bottom3.innerHTML === currentPlayerx){
		alert('sprocket wrench please');
	}else if(top3.innerHTML && middle2.innerHTML && bottom1.innerHTML === currentPlayerx){

	}
};

// checkWinner();

var runCheck = function(elem){
	if (currentPlayer === 'x') {
		elem.innerHTML = currentPlayerx;
		currentPlayer = 'o';
		checkWinner();
	} else if (currentPlayer === 'o') {
		elem.innerHTML = currentPlayero;
		currentPlayer = 'x';
		checkWinner();
	}
}

 

top1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);
	runCheck(top1);
});


top2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(top2);
	
});

top3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

runCheck(top3);
	
});

middle1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(middle1);
});

middle2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(middle2);
});

middle3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(middle3);
});

bottom1.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(bottom1);
});

bottom2.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(bottom2);
});

bottom3.addEventListener('click', function() {
	alert('current player is: ' + currentPlayer);

	runCheck(bottom3);
});




newGame.addEventListener('click', function() {
  alert('I know how to add an event listener');
	   location.reload();



});

