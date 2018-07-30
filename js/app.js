document.addEventListener('DOMContentLoaded', function (){
	console.log('Dom got loaded!');

	document.getElementById('reset').addEventListener('click', start);
	

});


function start(){
	for (var i = 0; i < 10; i++){
		var cell = 'cell-' + i
		document.getElementById(cell).addEventListener('click', cellClick);
		}
	}
}



function cellClick(type){
	if (type === x){
		this.textContent = 'X';
	} else {
		this.textContent = 'O';
	};
}

