var clearGame = function (){
	alert("test");
}

var playMove = function (){
   document.getElementById('box_1').style.backgroundImage='url(../images/x.png)';

  }

document.getElementById("box_1").addEventListener("click", function() {playMove()});


document.getElementById("Clear").addEventListener("click", function() {clearGame()});