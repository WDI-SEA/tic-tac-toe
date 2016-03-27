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



var clearGame = function (){
	numClicks =1;
 	box_1_played = 0;
	box_2_played = 0;
	box_3_played = 0;
 	box_4_played = 0;
	box_5_played = 0;
	box_6_played = 0;
	box_7_played = 0;
	box_8_played = 0;
	box_9_played = 0;
	document.getElementById('box_1').style.backgroundImage="";
	document.getElementById('box_2').style.backgroundImage="";
	document.getElementById('box_3').style.backgroundImage="";
	document.getElementById('box_4').style.backgroundImage="";
	document.getElementById('box_5').style.backgroundImage="";
	document.getElementById('box_6').style.backgroundImage="";
	document.getElementById('box_7').style.backgroundImage="";
	document.getElementById('box_8').style.backgroundImage="";
	document.getElementById('box_9').style.backgroundImage="";

}
document.getElementById("box_1").addEventListener("click", function() {playMove1()});
document.getElementById("box_2").addEventListener("click", function() {playMove2()});
document.getElementById("box_3").addEventListener("click", function() {playMove3()});
document.getElementById("box_4").addEventListener("click", function() {playMove4()});
document.getElementById("box_5").addEventListener("click", function() {playMove5()});
document.getElementById("box_6").addEventListener("click", function() {playMove6()});
document.getElementById("box_7").addEventListener("click", function() {playMove7()});
document.getElementById("box_8").addEventListener("click", function() {playMove8()});
document.getElementById("box_9").addEventListener("click", function() {playMove9()});

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
   	}
  }


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
 
	  box_2_played =1;
	  numClicks++;
   	}
  }
 
 var playMove3 = function (){
   if (box_3_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_3').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_3').style.backgroundImage='url(../images/x.png)';}
 
	  box_3_played =1;
	  numClicks++;
   	}
  }
var playMove4 = function (){
   if (box_4_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_4').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_4').style.backgroundImage='url(../images/x.png)';}
 
	  box_4_played =1;
	  numClicks++;
   	}
  }

  var playMove5 = function (){
   if (box_5_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_5').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_5').style.backgroundImage='url(../images/x.png)';}
 
	  box_5_played =1;
	  numClicks++;
   	}
  }

  var playMove6 = function (){
   if (box_6_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_6').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_6').style.backgroundImage='url(../images/x.png)';}
 
	  box_6_played =1;
	  numClicks++;
   	}
  }

  var playMove7 = function (){
   if (box_7_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_7').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_7').style.backgroundImage='url(../images/x.png)';}
 
	  box_7_played =1;
	  numClicks++;
   	}
  }

  var playMove8 = function (){
   if (box_8_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_8').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_8').style.backgroundImage='url(../images/x.png)';}
 
	  box_8_played =1;
	  numClicks++;
   	}
  }

  var playMove9 = function (){
   if (box_9_played > 0) {
   alert('uh uh uh');
   return;
   }
   else { 
   if (numClicks%2 ===0) {
   	document.getElementById('box_9').style.backgroundImage='url(../images/o.png)';
   } else {
   		document.getElementById('box_9').style.backgroundImage='url(../images/x.png)';}
 
	  box_9_played =1;
	  numClicks++;
   	}
  }

document.getElementById("Clear").addEventListener("click", function() {clearGame()});