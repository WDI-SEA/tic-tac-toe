console.log('Hello frontend');

var move = document.querySelectorAll(".square");

move.forEach(function(squareClick) {
  squareClick.addEventListener("click", function() {
    if (squareClick.classList.contains("square")) {
      console.log("clicked!");
      squareClick.classList.remove("square");
      squareClick.classList.add("square-clicked");
    }
  });
});
