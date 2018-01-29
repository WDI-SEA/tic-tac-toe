console.log("javascript running");

//grab elements I need from DOM
var box = document.querySelectorAll('.box');

//function to change color of clicked box
var boxClick = function() {
  this.style.backgroundColor = 'black';
};

// add event listener to all boxes for click

var addBoxClickListener = function() {
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
};
for(var i = 0; i < box.length; i++){

var addBoxClickListener = function() {
  	for(var i = 0; i < box.length; i++){
  		box[i].addEventListener('click', boxClick);
  	}
  };

document.addEventListener("DOMContentLoaded", function() {

    addBoxClickListener();

});
