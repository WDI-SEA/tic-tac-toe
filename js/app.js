var player = 'x';
var computer='o';
var played = [];
var allCells = ['cell-1','cell-2','cell-3','cell-4','cell-5','cell-6',
				'cell-7','cell-1','cell-1']

var col1 = [1,2,3];
var col2 = [4,5,6];
var col3 = [7,8,9];

var row1 = [1,4,7];
var row2 = [2,5,8];
var row3 = [3,6,9];

var diag1 = [1,5,9];
var diag2 = [3,5,7];

var winarray = [col1, col2, col3,row1, row2, row3,diag1,diag2]

document.addEventListener('DOMContentLoaded', function (){
	//startCooseListner()
	document.getElementById('reset').addEventListener('click', start);
	
});

function startCooseListner(){
	document.getElementById('x').addEventListener('click', start);
	document.getElementById('o').addEventListener('click', start);
	choose();
}

function removeCooseListner(){
	document.getElementById('o').removeEventListener('click', start);
	document.getElementById('x').removeEventListener('click', start);
}

function choose(){
	player = this.id; 
	computer = player === 'x'? 'o' : 'x';
	console.log(player)
	removeCooseListner();
	if (player){
		strart()
	} else {
		document.getElementById('reset').addEventListener('click', start);
	};
}


function start(){
	for (var i = 1; i < 10; i++){
		var cell = 'cell-' + i;
		document.getElementById(cell).addEventListener('click', clickCell);
	};
	document.getElementById('reset').textContent = " ";
};

function clickCell(){
	if (played.length<9){
		this.textContent = player;
		played.push(this.id);
		setTimeout(easy, 300);
	} else {
		stopGame();
	};

};



function randomNumber(){
	var r = 0
	while(r){
	 Math.floor(Math.random() * 6) + 1
	};
};

function notPlayedCells(){
	var notPlayed =  allCells.filter(x => !played.includes(x));
	return rand = notPlayed[Math.floor(Math.random() * notPlayed.length)];
};

function easy(){
	if (played.length<9){
	var notPlayed = notPlayedCells();
	document.getElementById(notPlayed).textContent = computer;
	played.push(notPlayed);
	} else {
		stopGame();
	};
};

function winceslls(){
	winarray.forEach(function(i) {
		one = document.getElementById('cell-'+i[[0]]).getAttribute('val');
		two = document.getElementById('cell-'+i[1]).getAttribute('val');
		three = document.getElementById('cell-'+i[2]).getAttribute('val');
		sum = Number(one) + Number(two) + Number(three); 
		if(sum===6 ||sum===6 ){
			winGame(sum);
			winner = document.getElementById('cell-'+i[0]).innerHTML();
			stopGame();
			document.getElementById(winner).textContent = + 1;
		};
	}); 	

}


function removeListnerAndText(){
	console.log('stop called');
	var n = 9;
	while (n>0){
		cell = 'cell-'+ n;
		var element = document.getElementById(cell)
		element.removeEventListener('click', clickCell);
		element.textContent = ' ';
	};
};

function stopGame(){
	//winceslls()
	removeListnerAndText();
	allCells.forEach(function(cell) {
	  
	});
	document.getElementById('reset').textContent = 'RESTART GAME';

};


