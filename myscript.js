var cells = document.getElementById('row'); 
for (var i = 0; i < cells.length; i++) { 
   cells[i].onclick = function(){
    console.log("click");
   };
}