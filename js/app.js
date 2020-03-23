let victor = false;
let player1, player2;
let turns = 0;
let gameBoard = document.getElementsByClassName('gridSet');
//start game
const startGame = () => {
	document.getElementById('nar-w').pause();
	document.getElementById('nar-s').pause();
	document.getElementById('pain-s').pause();
	document.getElementById('pain-w').pause();
	document.getElementById('battle').play();
	document.getElementById('textTurn').textContent = "Naruto's Turn"
	player1 = true;
	player2 = false;
	for (let i =0; i < gameBoard.length; i++) {
		document.getElementById(`section-${i+1}`).addEventListener('click', (e) => {
			chooseSpace(i);
		});
	
	}
	document.getElementById('reset').addEventListener('click', reset)
}


//set draw condition
const draw = () => {
	if (turns ==9 && victor == false ) {
		document.getElementById('players').textContent = "Draw, go again"
			document.getElementById('battle').pause();
	}
}


const chooseSpace = (space) => {
	if (gameBoard[space].classList.contains('taken') != true) {
		if (player1 == true) {
			//set class to player 1
			player1 = false;
			player2 = true;
			player1Space(space);
			document.getElementById('textTurn').textContent = "Pain's Turn"
		
		} else {
			//set class to player 2
			player1 = true;
			player2 = false;
			player2Space(space);
			document.getElementById('textTurn').textContent= "Naruto's Turn"
		}
		checkWin();
		turns = turns + 1;
		draw();
		let taken = gameBoard[space];
		taken.classList.add('taken');

	}
}


const player1Space = (space) => {
	let spot = document.getElementsByClassName('gridSet')[space];
	spot.classList.add("player1Spot")
}
const player2Space = (space) => {
	let spot = document.getElementsByClassName('gridSet')[space];
	spot.classList.add("player2Spot")
}




//reset board
const reset = () => {
	for (i = 0; i < gameBoard.length; i++) {
		let sector =  gameBoard[i];
		if (sector.classList.contains('taken')) {
			sector.classList.remove('taken')
			if (sector.classList.contains('player1Spot')) {
				sector.classList.remove('player1Spot')
			}
			else if (sector.classList.contains('player2Spot')) {
				sector.classList.remove('player2Spot')
			}
		}
	}
	startGame();
}



const checkWin = () => {
	if (wins('col') == true || wins('row') == true || wins('diag') == true) {
		document.getElementById('battle').pause();
		if (player2 == true) {
			document.getElementById('players').textContent = "Nobody hurts my friends and gets away with it!";
			document.getElementById('textTurn').textContent= "Naruto Wins";
			document.getElementById('nar-s').play();
			document.getElementById('nar-w').play();
		}
		else {
			document.getElementById('players').textContent = "This world shall know Pain";
			document.getElementById('textTurn').textContent= "Pain Wins";
			document.getElementById('pain-s').play();
			document.getElementById('pain-w').play();
		}
	}

}

const wins = (type) => {
	for (i=1; i<=2; i++) {
		let chances = 3;
		if (type == 'diag') {
			chances = 2;
		}
		for(j=1; j <=chances; j++) {
		let col = (document.getElementsByClassName(type +j));
			if (col[0].classList.contains(`player${i}Spot`) && col[1].classList.contains(`player${i}Spot`) 
	&& col[2].classList.contains(`player${i}Spot`)) {
				checkTiles();
				victor = true;
				return true;
			}
		
		}

	}	
}

//kills all tiles
const checkTiles = () => {
	for (i = 0; i < gameBoard.length; i++) {
		let sector =  gameBoard[i];
		if (sector.classList.contains('taken') != true) {
			sector.classList.add('taken')
		}
	}		
}	

document.getElementById('start').addEventListener('click', startGame);

