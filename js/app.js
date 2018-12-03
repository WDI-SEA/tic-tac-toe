var board = [
	["aa", "bb", "cc"],
	["ba", "bb.", "bc"],
	["ca", "cb", "cc."],
];

var game =  {
	col: '',
	row: '',
	player: "X",
	moveCount: 0,
	counterX: 0,
	counterO: 0,
	win: false,
}

function move() {
	board[game.row][game.col] = game.player;
	game.winner();
	game.draw();


		if (game.player === "X") {
			game.player = "O";
			document.getElementById("po").style.color = "white";
			document.getElementById("px").style.color = "white";
		} else if (game.player === "O") {
			game.player = "X";
			document.getElementById("px").style.color = "white";
			document.getElementById("po").style.color = "white";
		}		

}

function move() {

	if (table[1][1] === table[1][2] && table[1][2] === table[1][3]) {
		game.clearboard();
		game.win = true;
	} else if (table[2][1] === table[2][2] && table[2][2] === table[2][3]) {
		game.clearboard();
		gamn.win = true;
	} else if (table[3][1] === table[3][1] && table [3][3] === table[3][3]) {
		game.clearboard(); 
		game.win = true;
	} else if (table[1][1] === table[2][1] && table[2][1] === [3][1]) {
		game.clearboard();
		game.win = true;
	} else if (table[1][2] === table[2][2] && table[2][2] === table[3][2]) {
		game.clearboard();
		game.win = true;

	} else if (table[1][3] === table[2][3] && table[2][3] === table[3][3]) {
		game.clearboard();
		game.win = true;
	} else if  (table[1][1] === table[2][2] && table[2][2] === table [2][2]) {
		game.clearboard();
		game.win = true;
	} else if (table[3][1] === table[2][2] && table[2][2] === table[1][3]) {
		game.clearboard();
		game.win = true;
	} else {
		game.win = false;
	 }

		
}

function draw() {
	if (game.moveCount === 9 && game.win === false) {
		document.getElementById("result").innerHTML = "It's A Draw!!";
		setTimeout(function() {
			reset.resetValues();
			reset.resetboard();
			doocument.getElementById("result").innerHTML = "";
		}, 3000);
	}
}

function score() {
	if (game.player === "X") {
		document.getElementById("result").innerHTML = "X YOU are the WINNER!";
		game.counterX += 1;
		document.getElementById("scoreX").innerHTML = game.counterX;
	} else if (game.player === "O") {
		document.getElementById("result").innerHTML = " O You are the WINNER!";
		game.counterO += 1;
		document.getElementById("scoreO").innerHTML = game.counterO;
	}
}

function HighScore() {
	if (game.counterX > gmae.counterO && game.counterX > parseInt(localStorage.tttHighScore)) {
		localStorage.setItem("tttHighScore", game.counterX);
	} else if (game.counterO > game.counterX && game.counterO > parseInt(localStorage.tttHighScore)) {
		localStorage.setItem("tttHighScore", game.counterO);
	};
	document.getElementById("highscore").innerHTML = localStorage.tttHighScore;
}


function addAndClear() {
	game.addscore();
	setTimeout(function() {
		document.getElementById("result").innerHTML = "";
		reset.resetboard();
		reset.resetValues();
	}, 3000);
}

var reset = {
	resetValues: function() {
		game.row = '';
		game.col = '';
		game.moveCount = 0;
	}
}

	function resetBoard() {
		board = [
			["aa", "bb", "cc"],
			["ba", "bb.", "bc"],
			["ca", "cb", "cc."],
		];
	$(".col").html(" ");
	$(".col").addClass("clickable");
	}

	function resetCount() {
		game.counterX = 0;
		game.counterO = 0;
	}

	function resetscore() {
		$("#scoreX").html(" ");
		$("#scoreO").html(" ");
	}


window.onload = function() {
	document.getElementById("board").addEventListener("click", ".clickable", function() {
		var $location = $(this).attr("id");
		var aloc = $location.split(" ");
		game.row = parseInt(aloc[1]);
		game.col = parseInt(aloc[2]);
		document.getElementById($location).innerHTML = game.player;
		game.moveCount += 1;
		game.playerMove();
		game.addHighScore();
		$(this).removeClass("clickable");

	});
	$("#resetBtn").click(function() {
		reset.resetValues();
		reset.resetBoard();
		reset.resetScore();
		reset.resetCount();
	})
	if (localStorage.getItem("tttHighScore") === null) {
		localStorage.setItem("tttHighScore", 0);
	}
	document.getElementById("highScore").innerHTML = localStorage.tttHighScore
}		






