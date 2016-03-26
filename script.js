



var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');


var grid = [  box1, box2, box3
              box4, box5, box6
              box7, box8, box9  ];


var outcome = [];             



function board(box, outcome){
  this.box = box;
  this.outcome = outcome;
}

grid.prototype.makeX = function () {
  this.box.innerHTML = 'X';
  this.box.style.backgroundColor = "red";
  this.outcome.splice()
}

target.addEventListener('click', function(e){
   target.makeX
}








  )







// function isEven(value) {
//     if (value % 2 == 0)
//         return true;
//     else
//         return false;
// }




// board.prototype.clickit = function(event) {

// }



// forEach.grid = function()



// document.getElementById('clear').addEventListener('click', function(event){
//   document.getElementById('userinput').value = '';
//   document.getElementById('conversion').textContent = '';
//   document.getElementById('conversion').style.backgroundColor = "";
//   document.getElementById('conversion').style.color = "black";
// });


// var theParent = document.querySelector("#theDude");
// theParent.addEventListener("click", doSomething, false);
 
// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         alert("Hello " + clickedItem);
//     }
//     e.stopPropagation();
// }