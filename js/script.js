//click different squares
//track moves

var clickCounter = 0;

var box = document.getElementsByClassName("box");

var consoleLogs = function() {
  clickCounter++;
  console.log("click");
}

for (var i = 0; i < box.length; i++) {
 box[i].addEventListener('click', consoleLogs, false);
}

//mark boxes alternate X & O



//add class to display separate colors

//cell not able to be replayed

//reset button

