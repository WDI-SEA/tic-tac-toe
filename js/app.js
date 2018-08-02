var turn=0;

document.addEventListener("DOMContentLoaded", function(){
	console.log("DOM got loaded");

	document.getElementById("reset").addEventListener("click", start);
});
	start()

	function start(){
		addtileListeners();

		document.getElementById("tile1").style.background = "../img/blank.jpg";
		document.getElementById("tile2").style.background = "../img/blank.jpg";
		document.getElementById("tile3").style.background = "../img/blank.jpg";
		document.getElementById("tile4").style.background = "../img/blank.jpg";
		document.getElementById("tile5").style.background = "../img/blank.jpg";
		document.getElementById("tile6").style.background = "../img/blank.jpg";
		document.getElementById("tile7").style.background = "../img/blank.jpg";
		document.getElementById("tile8").style.background = "../img/blank.jpg";
		document.getElementById("tile9").style.background = "../img/blank.jpg";
	}

	function addtileListeners(){
		var tileimages = document.querySelectorAll("#board img");	

		for(var i = 0; i < tileimages.length; i++){
			// tileimages[i].src = ;
			console.log(tileimages[i]);
			tileimages[i].addEventListener("click", clicktile);
		}
	}


	function clicktile(){
		if(turn %2 == "0"){
			this.src = "./img/c.png";
			this.removeEventListener("click", clicktile);
			document.getElementById(this.id).classList.add("X");
			document.getElementById(this.id).classList.remove("tile");
			document.getElementById("player").textContent = "Player O's turn";
			if(checkwin()){
				stopgame();
			}else if(turn === 8){
				stopgame();
				document.getElementById("player").textContent = "Player X and O tie";
			}
		}
		else{
			this.src = "./img/c-1.png";
			this.removeEventListener("click", clicktile);
			document.getElementById(this.id).classList.add("O");
			document.getElementById(this.id).classList.remove("tile");
			document.getElementById("player").textContent = "Player X's turn";
			if(checkwin()){
				stopgame();
			};
		}
		turn++;
	}

	function removetileListeners(){
		var tileimages = document.querySelectorAll("#board img");

		for(var i = 0; i < tileimages.length; i++){
			tileimages[i].removeEventListener("click", clicktile);
		}
	}

		function checkwin(){
			if((document.getElementById("tile1").classList.value === document.getElementById("tile2").classList.value && document.getElementById("tile2").classList.value === document.getElementById("tile3").classList.value && document.getElementById("tile3").classList.value !== "tile") ||
			 (document.getElementById("tile4").classList.value === document.getElementById("tile5").classList.value && document.getElementById("tile5").classList.value === document.getElementById("tile6").classList.value && document.getElementById("tile6").classList.value !== "tile") ||
			  (document.getElementById("tile7").classList.value === document.getElementById("tile8").classList.value && document.getElementById("tile8").classList.value === document.getElementById("tile9").classList.value && document.getElementById("tile9").classList.value !== "tile") ||
			   (document.getElementById("tile1").classList.value === document.getElementById("tile4").classList.value && document.getElementById("tile4").classList.value === document.getElementById("tile7").classList.value && document.getElementById("tile7").classList.value !== "tile") ||
			    (document.getElementById("tile2").classList.value === document.getElementById("tile5").classList.value && document.getElementById("tile5").classList.value === document.getElementById("tile8").classList.value && document.getElementById("tile8").classList.value !== "tile") ||
			     (document.getElementById("tile3").classList.value === document.getElementById("tile6").classList.value && document.getElementById("tile6").classList.value === document.getElementById("tile9").classList.value && document.getElementById("tile9").classList.value !== "tile") ||
			      (document.getElementById("tile1").classList.value === document.getElementById("tile5").classList.value && document.getElementById("tile5").classList.value === document.getElementById("tile9").classList.value && document.getElementById("tile9").classList.value !== "tile") ||
			       (document.getElementById("tile3").classList.value === document.getElementById("tile5").classList.value && document.getElementById("tile5").classList.value === document.getElementById("tile7").classList.value && document.getElementById("tile7").classList.value !== "tile")){
				return true;
			}
			return false;
		}

		function stopgame(){
			removetileListeners()

			if(turn %2 === 1){
				document.getElementById("player").textContent = "Player O wins!";
			}
			else{
				document.getElementById("player").textContent = "Player X wins!";
		}
	}
		console.log(document.getElementById("tile1").style.background);



