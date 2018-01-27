var allSquares = document.getElementsByClassName("square");
var resetBut = document.getElementById("resetButton")
function dataCheck(){
  console.log("click")
}
resetBut.addEventListener("click", dataCheck);
allSquares[0].addEventListener("click", dataCheck);
