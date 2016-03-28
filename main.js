var board = ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7', 'Cell 8', 'Cell 9'];
document.getElementById('Cell1').addEventListener('click', function(event){
	alert(event.target.innerHTML)
})
document.getElementById('Cell2').addEventListener('click', function(event){
	event.target.innerHTML = "X" || "O"
})
