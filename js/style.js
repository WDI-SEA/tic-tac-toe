var clearGame = function (){
	alert("test");
}

var playMove = function (){
   document.getElementById('box_1').style.backgroundColor = 'black';
  }

document.getElementById("box_1").addEventListener("click", function() {playMove()});


document.getElementById("Clear").addEventListener("click", function() {clearGame()});