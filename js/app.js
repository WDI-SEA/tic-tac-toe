
// A user should be able to click on different squares to make a move.
// * Every click will alternate between marking an `X` and `O`
// * Upon marking of an individual cell, 
//use JavaScript to add a class to each cell to display separate colors.
// * A cell should not be able to be replayed once marked.
// * Add a reset button that will clear the contents of the board.
var wins1 = 0;
var wins2 = 0;
var p1Col1 = 0;
var p1Col2 = 0;
var p1Col3 = 0;
var p1Row1 = 0;
var p1Row2 = 0;
var p1Row3 = 0;
var p1Dia1 = 0;
var p1Dia2 = 0;

var p2Col1 = 0;
var p2Col2 = 0;
var p2Col3 = 0;
var p2Row1 = 0;
var p2Row2 = 0;
var p2Row3 = 0;
var p2Dia1 = 0;
var p2Dia2 = 0;

var clickCount = 0;

var el = document.getElementsByClassName('box');
for(var i=0; i<el.length;i++){
	addEventListener(el.item(i), 'click', boxClicked);
}

function boxClicked(){
	clickCount++;
	if(clickCount%2!==0 && clickCount<=9){
		if(i==1){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col1++;
			p1Row1++;
			p1Dia1++;
			checkWinner();
		}
		if(i==2){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col2++;
			p1Row1++;
			checkWinner();
		}
		if(i==3){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col3++;
			p1Row1++;
			p1Dia2++;
			checkWinner();
		}
		if(i==4){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col1++;
			p1Row2++;
			checkWinner();
		}
		if(i==5){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col2++;
			p1Row2++;
			p1Dia1++;
			p1Dia2++;
			checkWinner();
		}
		if(i==6){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col3++;
			p1Row2++;
			checkWinner();
		}
		if(i==7){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col1++;
			p1Row3++;
			p1Dia2++;
			checkWinner();
		}
		if(i==8){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col2++;
			p1Row3++;
			checkWinner();
		}
		if(i==9){
			this.src = '../img/x.png';
			this.style.backgroundSize = "contain";
			p1Col3++;
			p1Row3++;
			p1Dia1++;
			checkWinner();
		}
	}else if(clickCount%2===0 && clickCount<=9){
		if(i==1){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col1++;
			p2Row1++;
			p2Dia1++;
			checkWinner();
		}
		if(i==2){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col2++;
			p2Row1++;
			checkWinner();
		}
		if(i==3){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col3++;
			p2Row1++;
			p2Dia2++;
			checkWinner();
		}
		if(i==4){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col1++;
			p2Row2++;
			checkWinner();
		}
		if(i==5){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col2++;
			p2Row2++;
			p2Dia1++;
			p2Dia2++;
			checkWinner();
		}
		if(i==6){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col3++;
			p2Row2++;
			checkWinner();
		}
		if(i==7){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col1++;
			p2Row3++;
			p2Dia2++;
			checkWinner();
		}
		if(i==8){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col2++;
			p2Row3++;
			checkWinner();
		}
		if(i==9){
			this.src = '../img/o.png';
			this.style.backgroundSize = "contain";
			p2Col3++;
			p2Row3++;
			p2Dia1++;
			checkWinner();
		}
	}
}

function reset(){
	var boxImages = document.getElementsByTagName('img');
	for(var i=0; i<boxImages.length; i++){
		boxImages[i].setAttribute('src', '../img/squre.jpg');
	}
	var el = document.getElementsByClassName('box');
	for(var i=0; i<el.length;i++){
	el.item(i).onclick = boxClicked;
	}
	clickCount = 0;
	p1Col1 = 0;
	p1Col2 = 0;
	p1Col3 = 0;
	p1Row1 = 0;
	p1Row2 = 0;
	p1Row3 = 0;
	p1Dia1 = 0;
	p1Dia2 = 0;
	p2Col1 = 0;
	p2Col2 = 0;
	p2Col3 = 0;
	p2Row1 = 0;
	p2Row2 = 0;
	p2Row3 = 0;
	p2Dia1 = 0;
	p2Dia2 = 0;
}

function resetGame(){
	wins1 = 0;
	wins2 = 0;
	reset();
}

function checkWinner(){
	if(clickCount>=3){
		if(p1Col1==3 || p1Col2==3 || p1Col3==3 || p1Row1==3 || p1Row2==3 || p1Row3==3 || p1Dia1==3 || p1Dia1==3){
		wins1++;
		document.getElementById("wins1").textContent= wins1;
		clickCount=0;
		setTimeout(reset(), 2000);
		}
		if(p2Col1==3 || p2Col2==3 || p2Col3==3 || p2Row1==3 || p2Row2==3 || p2Row3==3 || p2Dia1==3 || p2Dia2==3){
		wins2++;
		document.getElementById("wins2").textContent= wins2;
		clickCount=0;
	}else if(clickCount<9){
		return true;
	}else if(clickCount==9){
		setTimeout(reset(), 2000);
	}
}
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('reset').addEventListener('click', reset);
	document.getElementById('resetFull').addEventListener('click', resetGame);
	reset();
})





