var player = 'x';
var computer='o';
var played = [];
var allCells = ['cell-1','cell-2','cell-3','cell-4','cell-5','cell-6',
				'cell-7','cell-1','cell-1']

winarray = [
	{
	col1 : [1,2,3],
 	col2 : [4,5,6],
 	col3 : [7,8,9]
	},
	{
	 row1 : [1,4,7],
	 row2 : [2,5,8],
	 row3 : [3,6,9]
	},
	{
	 diag1 : [1,5,9],
	 diag2 : [3,5,7]
	}
];
// var col1 = [1,2,3];
// var col2 = [4,5,6];
// var col3 = [7,8,9];

// var row1 = [1,4,7];
// var row2 = [2,5,8];
// var row3 = [3,6,9];

// var diag1 = [1,5,9];
// var diag2 = [3,5,7];

// var winarray = [col1, col2, col3,row1, row2, row3,diag1,diag2]

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

function removeListners(){
	// console.log(played);
	// if (played.length===9){
	// 		played.forEach(function(element){
	// 			element = document.getElementById(element)
	// 			element.textContent = ' ';
	// 			});		
	// };

	played.forEach(function(element){
		element = document.getElementById(element)
		element.removeEventListener('click', clickCell);
	});

}


function clickCell(){
	removeListners();
	if (played.length<9){
		this.textContent = player;
		this.setAttribute('val', 2);
		played.push(this.id);
		setTimeout(easy, 300);
	} else {
		stopGame();
	};
	winceslls();
	removeListners();
};


// function notPlayedCells(){
// 	var notPlayed =  allCells.filter(x => !played.includes(x));
// 	return rand = notPlayed[Math.floor(Math.random() * notPlayed.length)];
// };

function easy(){

	if (played.length<9){
		var notPlayed =  allCells.filter(x => !played.includes(x));
		notPlayed = notPlayed[Math.floor(Math.random() * notPlayed.length)];
		var np = document.getElementById(notPlayed);
		np.textContent = computer;
		np.setAttribute('val', 5);
		played.push(notPlayed);
	} else {
		stopGame();
	};
	winceslls();
	removeListners();
};


function winceslls(){
	winarray.forEach(function(winType) {
		for (var elem in winType) {
			var combo = winType[elem];
			var sum = 0;
			combo.forEach(function(i) {
				val = document.getElementById('cell-'+ i).getAttribute('val');
				sum = val? sum + Number(val): sum;
				if(sum === 6 ||sum === 15){
					winner = document.getElementById('cell-'+i).textContent;
					str = winner==='x'? 'xs':'os'
					console.log(str);
					updateScore = document.getElementById(str);
					oldScore= updateScore.textContent;
					newScore = oldScore==='-'? Number('1') : Number(oldScore) + 1;
					updateScore.textContent = newScore;	
					stopGame();
					var sum = 0;
				};
			});
		

		};
	});
};


function stopGame(){
	played.forEach(function(element){
		element = document.getElementById(element)
			element.textContent = ' ';
		});		

	played = allCells;
	removeListners();
	document.getElementById('reset').textContent = 'RESTART GAME';
};



