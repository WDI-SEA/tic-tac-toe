document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM loaded');
});





var click = document.querySelectorAll('.tile');

var textBox = document.getElementsByClassName('.topcontainer')

var win = ['a,b,c', 'd,e,f', 'g,h,i', 'a,d,g', 'b,e,h', 'c,f,i', 'a,e,i', 'c,e,g']

// click.addEventListener('click', add);

// function add(){
// 	console.log('hi');
// }


click.onClick = console.log('hello');



// var click = document.querySelectorAll('.container button')

