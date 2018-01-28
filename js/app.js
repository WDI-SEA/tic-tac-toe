console.log('Hello frontend');

var initGame = null;
var gameOver = null;

var move = document.querySelectorAll(".square");
var move2 = document.querySelectorAll(".clear");
// var clickX = document.querySelectorAll(".mark");

move.forEach(function(squareClick) {
  squareClick.addEventListener("click", function() {
    if (squareClick.classList.contains("square")) {
      squareClick.classList.remove("square");
      squareClick.classList.add("square-clicked");
    }
  });
});

// move2.forEa ch(function(squareClick2) {
//   squareClick2.addEventListener("click", function() {
//     if (squareClick2.classList.contains("clear")) {
//       squareClick2.classList.remove("clear");
//       squareClick2.classList.add("mark");
//         // Need to reference each P, not just the first
//       // document.getElementsByTagName("p")[0].textContent = "X";
//       // document.getElementsByTagName("p")[1].textContent = "O";
//       // document.getElementsByTagName("p")[2].textContent = "X";
//       // document.getElementsByTagName("p")[3].textContent = "O";
//       // document.getElementsByTagName("p")[4].textContent = "X";
//       // document.getElementsByTagName("p")[5].textContent = "O";
//       // document.getElementsByTagName("p")[6].textContent = "X";
//       // document.getElementsByTagName("p")[7].textContent = "O";
// //       // document.getElementsByTagName("p")[8].textContent = "X";
//     }
//   });
// });
