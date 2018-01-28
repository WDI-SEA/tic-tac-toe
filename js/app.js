console.log("javascript running");

//grab elements I need from DOM
var box = document.querySelectorAll('.box');

//turn counter
var turn = 0

//function to change color of clicked box
var boxClick = fuction() {
  this.style.backgroundColor=#FCBE00;
});

// add event listener to all boxes for click
var addBoxClickListener = function(){
	console.log('box Click Listener On')
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
}
