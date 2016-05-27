var cells = document.getElementsByClassName('square');
var currentPlayer = 'x';
var clearButton = document.getElementById('reset_button');


for (var i = 0; i <cells.length; i++) {
  cells[i].addEventListener("mouseover", function(e) {
    console.log(e.target.style.backgroundColor);
    if (e.target.style.backgroundColor === "white") {
      e.target.style = "background-color: red";
    }
  });
}

for (var i = 0; i <cells.length; i++) {
  cells[i].addEventListener("mouseout", function(e) {
    if (e.target.style.backgroundColor === "red") {
      e.target.style = "background-color: white";
    }
  });
}

for (var i = 0; i <cells.length; i++) {
  cells[i].addEventListener('click', function(e) {
    if (e.target.innerHTML !== 'x' && e.target.innerHTML !== 'o') {
      e.target.innerHTML = currentPlayer;
      if (currentPlayer === 'x') {
        currentPlayer = 'o';
        e.target.style = "background-color: blue"
      } else {
        currentPlayer = 'x'
        e.target.style = "background-color: purple"
      }
    }
  })
}


var clear = function () {
  for (var i = 0; i <cells.length; i++) {
    cells[i].innerHTML = '+';
    cells[i].style.backgroundColor = "white"  
  }
}

clearButton.addEventListener('click', clear);



// var cell1 = document.getElementById('c1').addEventListener("click", function(e)   {
//   console.log(e);
//   e.target.innerHTML = 'x';
// });
// var cell2 = document.getElementById('c2').addEventListener("click", function()  {
//   console.log("clicked!");
// });
// var cell3 = document.getElementById('c3').addEventListener("click", function()  {
//   console.log("clicked!");
// });
// var cell4 = document.getElementById('c4').addEventListener("click", function()  {
//   console.log("clicked!");
// });
// var cell5 = document.getElementById('c5').addEventListener("click", function()  {
//   console.log("clicked!");
// });
// var cell6 = document.getElementById('c6').addEventListener("click", function()  {
//   console.log("clicked!");
// }); 
// var cell7 = document.getElementById('c7').addEventListener("click", function()  {
//   console.log("clicked!");
// }); 
// var cell8 = document.getElementById('c8').addEventListener("click", function()  {
//   console.log("clicked!");
// }); 
// var cell9 = document.getElementById('c9').addEventListener("click", function()  {
//   console.log("clicked!");
// });



// for (var i = 0; i < cells.length; i++) { 
//    cells[i].onclick = function(){
//     console.log("click");
//    }; 
// }

