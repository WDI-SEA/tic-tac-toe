var numClicks =1;
var box_1_played = 0;
var box_2_played = 0;
var box_3_played = 0;
var box_4_played = 0;
var box_5_played = 0;
var box_6_played = 0;
var box_7_played = 0;
var box_8_played = 0;
var box_9_played = 0;

// var turn = function(){
// 	document.querySelectorAll('box').
// }

var clearGame = function (){
	alert("test");
}

var playMove1 = function (){
   if (box_1_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_1').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_1').style.backgroundImage='url(../images/x.png)';}
 
	  box_1_played =1;
	  numClicks++;
	  alert(numClicks);
   	}
  }

document.getElementById("box_1").addEventListener("click", function() {playMove()});

var playMove2 = function (){
   if (box_2_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_2').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_2').style.backgroundImage='url(../images/x.png)';}
 
	  box_1_played =1;
	  numClicks++;
	  alert(numClicks);
   	}
  }


document.getElementById("Clear").addEventListener("click", function() {clearGame()});