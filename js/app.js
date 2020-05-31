console.log("This is Randy speaking :-)");

//Initialize variables; cache the DOM
var pScore = document.getElementById("player-score");
var rScore = document.getElementById("computer-score");
var message = document.getElementById("message");
var display = document.getElementById("display");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const resetBtn = document.getElementById("resetBtn");
const square = document.getElementsByClassName("square");

//at the beginning, the game isn't over
//set this value to false
let gameOver = false;

//object to set player points to 0 at beginning of the game
//to set the currentChoice to null (player hasn't gone yet)
//null signifies this value can change
let player = {
  points: 0,
  currentChoice: null
}

//object to set Randy's initial points at 0 for beginning of game
//object to set the first choice to "null", no one has chosen
let randy = {
    points: 0,
    currentChoice: null
  }

//array for boxes to be filled
let boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//an array of the arrays of the winning combinations
//I learned this method from Michela
const winCombos = [
    ["one", "five", "nine"], ["one", "two", "three"], ["three", "six", "nine"], ["two", "five", "eight"], ["one", "four", "seven"], ["four", "five", "six"], ["three", "five", "seven"], ["seven", "eight", "nine"]
];


//Functions
//first function to check if it is player turn or computer (Randy) turn
//this function relies on Boolean logic to track whose turn it is
//I learned this function from Lemon 🍋
function getTurn(){
  if (turn % 2 !== 0){
    return true;
  } else {
    return false;
  }
}

//function for the computer to "choose" randomly
//this is why he's named Randy :-)
function getRandomChoice(){
  const randomChoice = Math.floor(Math.random() * boxes.length);
  return choices[randomChoice];
}

//isSelected function
//I learned this from Michela, Emily, and Zachary
function isSelected(e) {
    console.dir("You chose " + e)
    let square = e.target;

    if (playerChooses) {
       square.classList.add("cat");
        display.innerText = "Player is on top of their game! Randy is deliberating..."
    }else if (randyChooses) {
        square.classList.add("frog");
    }    
}

//function for player choice
function playerChooses(event){
    karly.currentChoice = event.target.value;
    turn++;
    //disable the square chosen from being able to be clicked
    //change background image of div to a cat emoji
    updateScoreboard();
    console.log("turn", turn, "player choice", event.target.value);
    randyChooses();
}

//function for computer choice
function randyChooses(){    

    //randy's choice is a random choice 
    randy.currentChoice = getRandomChoice();
    console.log("randy's choice", randy.currentChoice);
    square.classList.add(".frog");

        //remove randy's choice from the array
        let boxIndex = boxes.indexOf(".square");
      // If the box has an index, it needs to be filled!
      if (boxIndex > -1) {
        boxesToFill.splice(boxIndex, 1);
        if (boxesToFill.length < 1) {
          endGame(true);
        }
      } else {
        endGame(false);
      }


    //make it seem like he is thinking with a timeOut delay
    setTimeout(function(){
        checkWin();
        turn++;
            //remove the ability to click the square "chosen"
    })
    updateScoreboard();
}

//function to update the scoreboard; we will call this later in the game
function updateScoreboard() {
	pScore.textContent = player.points;
	rScore.textContent = randy.points;
};


//function to reset the game
function resetGame(){}

//function to start the game
function startGame(){}

/*********Event Listeners***********/

//An event listener to change background image to a cat
//This is when playerChooses
one.addEventListener("click", isSelected);
two.addEventListener("click", isSelected);
three.addEventListener("click", isSelected);
four.addEventListener("click", isSelected);
five.addEventListener("click", isSelected);
six.addEventListener("click", isSelected);
seven.addEventListener("click", isSelected);
eight.addEventListener("click", isSelected);
nine.addEventListener("click", isSelected);

//Randy's choice cannot be an event listener I don't think

/*****Game Logic******/

/****Winning Conditions****/

function checkWin(){
//Conditions if player has won
if (playerChoices = "one", "five", "nine"){
    console.log("Player wins!");
    display.innerText = "Humans are ultimately smarter than computers!"
    player.points++;
} if (playerChoices = "one", "two", "three"){
    console.log("Player wins!");
    display.innerText = "*Player is taking a victory lap!*"
    player.points++;
} if (playerChoices = "three", "six", "nine"){
    console.log("Player wins!");
    display.innerText = "Player is impeccable and skillful!"
    player.points++;
} if (playerChoices = "two", "five", "eight"){
    console.log("Player wins!");
    display.innerText = "5, 6, 7, 8, who do we appreciate?! Player!!"
    player.points++;
} if (playerChoices = "one", "four", "seven"){
    console.log("Player wins!");
    display.innerText = "*Player takes a bow*"
    player.points++;
} if(playerChoices = "four", "five", "six"){
    console.log("Player wins!");
    display.innerText = "Player is the future president of the world!"
    player.points++;
} if (playerChoices = "three", "five", "seven"){
    console.log("Player wins!");
    display.innerText = "Player apparently knows things Randy doesn't!"
    player.points++;
} if (playerChoices = "seven", "eight", "nine"){
    console.log("Player wins!");
    display.innerText = "Player is victorious!"
    player.points++;
}

//Conditions if computer has won (eight total)
  if (randyChoices = "one", "five", "nine"){
    console.log("Randy wins!");
    display.innerText = "Randy is the winner. He will dominate the Earth!"
    randy.points++;
}  if (randyChoices = "one", "two", "three"){
    console.log("Randy wins!");
    display.innerText = "Randy is the most skillful computer on this planet! Fear him!"
    randy.points++;
}  if (randyChoices = "three", "six", "nine"){
    console.log("Randy wins!");
    display.innerText = "Randy is fearsome in all his Earthly activities!"
    randy.points++;
} if (randyChoices = "two", "five", "eight"){
    console.log("Randy wins!");
    display.innerText = "Randy requests your presence when he accepts his award!"
    randy.points++;
} if (randyChoices = "one", "four", "seven"){
    console.log("Randy wins!");
    display.innerText = "*Randy takes a bow!*"
    randy.points++;
} if(randyChoices = "four", "five", "six"){
    console.log("Randy wins!");
    display.innerText = "Randy eats human failure for a healthy snack!"
    randy.points++;
} if (randyChoices = "three", "five", "seven"){
    console.log("Randy wins!");
    display.innerText = "Randy still wants to be friends, although he has defeated you!"
    randy.points++;
} if (randyChoices = "seven", "eight", "nine"){
    console.log("Randy wins!");
    display.innerText = "Watch out, humanity! Randy wins!"
    randy.points++;

resetGame();

    //Draw conditions
} else {
        display.innerText = "Better luck next time - it was a draw!"
    }
    updateScoreboard();
}
