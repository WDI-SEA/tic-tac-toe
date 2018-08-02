var turn=0;

document.addEventListener("DOMContentLoaded", function(){
	console.log("DOM got loaded");

	document.getElementById("reset").addEventListener("click", start);
});
	start()

	function start(){
		addtileListeners();

		document.getElementById("tile1").style.background = "";
		document.getElementById("tile2").style.background = "";
		document.getElementById("tile3").style.background = "";
		document.getElementById("tile4").style.background = "";
		document.getElementById("tile5").style.background = "";
		document.getElementById("tile6").style.background = "";
		document.getElementById("tile7").style.background = "";
		document.getElementById("tile8").style.background = "";
		document.getElementById("tile9").style.background = "";
	}

	function addtileListeners(){
		var tileimages = document.querySelectorAll("#board img");	

		for(var i = 0; i < tileimages.length; i++){
			tileimages[i].src = "./img/blank.jpg";
			console.log(tileimages[i]);
			tileimages[i].addEventListener("click", clicktile);
		}
	}


	function clicktile(){
		if(turn == "0"){
			this.src = "./img/c.png";
			this.removeEventListener("click", clicktile);
			document.getElementById(this.id).classList.add("X");
			document.getElementById(this.id).classList.remove("tile");
			console.log(this.classList)
			turn=1;
			document.getElementById("player").textContent = "Player O's turn";
			if(checkwin()){
				stopgame();
			};
			console.log(this.src);
		}
		else{
			this.src = "./img/c-1.png";
			this.removeEventListener("click", clicktile);
			document.getElementById(this.id).classList.add("O")
			document.getElementById(this.id).classList.remove("tile");
			console.log(this.classList);
			turn=0;
			document.getElementById("player").textContent = "Player X's turn";
			if(checkwin()){
				stopgame();
			};
			console.log(this.src)
		}
	}

	function removetileListeners(){
		var tileimages = document.querySelectorAll("#board img");

		for(var i = 0; i < tileimages.length; i++){
			toileimages[i].removeEventListener("click", clicktile);
		}
	}

		function checkwin(){
			if((document.getElementById("tile1").classList) == (document.getElementById("tile2").classList) == (document.getElementById("tile3").classList) || (document.getElementById("tile4").classList) == (document.getElementById("tile5").classList) == (document.getElementById("tile6").classList) || (document.getElementById("tile7").classList) == (document.getElementById("tile8").classList) == (document.getElementById("tile9").classList) || (document.getElementById("tile1").classList) == (document.getElementById("tile4").classList) == (document.getElementById("tile7").classList) || (document.getElementById("tile2").classList) == (document.getElementById("tile5").classList) == (document.getElementById("tile8").classList) || (document.getElementById("tile3").classList) == (document.getElementById("tile6").classList) == (document.getElementById("tile9").classList) || (document.getElementById("tile1").classList) == (document.getElementById("tile5").classList) == (document.getElementById("tile9").classList) || (document.getElementById("tile3").classList) == (document.getElementById("tile5").classList) == (document.getElementById("tile7").classList)){
				console.log("true");
			}
			console.log("false");
		}

		function stopgame(){
			removetileListeners()

			if(turn == "1"){
				document.getElementById("player").textContent = "Player X wins!";
			}
			else{
				document.getElementById("player").textContent = "player O wins!";
		}
	}
		console.log(document.getElementById("tile1").style.background);



