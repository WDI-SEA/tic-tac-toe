
// Things to review to make my code more DRY

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

var updateBox = function(el) {
  el.textContent = 'yooo';
};

// This function grabs the element that was clicked on and calls updateBox on that element

var getElement = function(element) {
  switch (true) {
    case element.target.id === 'one':
      updateBox(one);
      break;
    case element.target.id === 'two':
      updateBox(two);
      break;
    case element.target.id === "three":
      updateBox(three);
      break;
    case element.target.id === "four":
      updateBox(four);
      break;
    case element.target.id === 'five':
      updateBox(five);
      break;
    case element.target.id === 'six':
      updateBox(six);
      break;
    case element.target.id === "seven":
      updateBox(seven);
      break;
    case element.target.id === "eight":
      updateBox(eight);
      break;
    case element.target.id === "nine":
      updateBox(nine);
      break;
  }
}

document.getElementById('board').addEventListener('click', getElement);



// cleaning up addEventListener section
var addClick = function() {
  var boxes = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];
  var fillBoxFunctions = [fillBoxOne, fillBoxTwo, fillBoxThree, fillBoxFour, fillBoxFive, fillBoxSix, fillBoxSeven, fillBoxEight, fillBoxNine];
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", fillBoxFunctions[i]);
  };

  // boxOne.addEventListener("click", fillBoxOne);
  // boxTwo.addEventListener("click", fillBoxTwo);
  // boxThree.addEventListener("click", fillBoxThree);
  // boxFour.addEventListener("click", fillBoxFour);
  // boxFive.addEventListener("click", fillBoxFive);
  // boxSix.addEventListener("click", fillBoxSix);
  // boxSeven.addEventListener("click", fillBoxSeven);
  // boxEight.addEventListener("click", fillBoxEight);
  // boxNine.addEventListener("click", fillBoxNine);
};
