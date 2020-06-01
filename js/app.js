// console.log("This is Randy speaking :-)");

//Initialize variables; cache the DOM
var pScore = document.getElementById("player-score");
var rScore = document.getElementById("computer-score");
var message = document.getElementById("message");
var display = document.getElementById("display");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const resetBtn = document.getElementById("resetBtn");

const square = document.getElementsByClassName("square");

let turn = 0;

//at the beginning, the game isn't over
//set this value to false
let gameOver = false;

//object to set player points to 0 at beginning of the game
//to set the currentChoice to null (player hasn't gone yet)
//null signifies this value can change
let player = {
  points: 0,
  currentChoice: null,
  allChoices: []
}

//object to set Randy's initial points at 0 for beginning of game
//object to set the first choice to "null", no one has chosen
let randy = {
    points: 0,
    currentChoice: null,
    allChoices: []
  }

//array for boxes to be filled
let boxesToFill = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

//an array of the arrays of the winning combinations
//I learned this method from Michela
const winCombos = [
    ["one", "five", "nine"], 
    ["one", "two", "three"], 
    ["three", "six", "nine"], 
    ["two", "five", "eight"], 
    ["one", "four", "seven"], 
    ["four", "five", "six"], 
    ["three", "five", "seven"], 
    ["seven", "eight", "nine"]
];


/*************************Functions**********************/

// function to check if it is player turn or computer (Randy) turn
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
//assigning random choice to a random value in boxesToFill
//once we have this value, we want to take this out of boxesToFill
//similar logic needs to apply to playerChooses
function getRandomChoice(){
    //Math.floor rounds it down so it's not a float
    //numeric value that serves as the index we access boxesToFill from
  const randomIndex = Math.floor(Math.random() * boxesToFill.length);
  const randomChoice = boxesToFill[randomIndex];
    //splice one value from whatever randomIndex turns out to be 
    snipIt(boxesToFill, randomChoice);
  return randomChoice;
}

//remove listeners
//need to use this in playerChooses and randyChooses to remove 
//remove elements that he picks
function removeListener(elementId){
    const dog = document.getElementById(elementId)
    dog.removeEventListener("click", playerChooses);
}

//snipIt - splice logic so that once a id/index has been used, 
//cannot be used again by either player or Randy
//boxes will be an array, elementId is a string, "one", "two", ex
//const index is going to be the index the string lives at
function snipIt(boxes, elementId){
    //this is what we need to know what to splice
const index = boxes.indexOf(elementId)
if (index > -1) {
    boxes.splice(index, 1);
    if (boxes.length < 1) {
      gameOver = true;
    //   console.log("game over!! :(");
      display.innerText = "No one has won! Player and Randy are at a draw."
    }
  }
}


//function for player choice
function playerChooses(event){
    //need to get id value before passing it in
    console.log("player", gameOver);
    player.currentChoice = event.target.id;
    //push choices to allChoices
    player.allChoices.push(player.currentChoice)
    document.getElementById(player.currentChoice).classList.add("cat");
    snipIt(boxesToFill, player.currentChoice);
    removeListener(player.currentChoice);
    turn++;
    checkWin();
    updateScoreboard();
    // console.log("turn", turn, "player choices", player.allChoices);
    if(boxesToFill.length > 1 && gameOver === false){
    randyChooses();
    }
}

//function for computer choice
function randyChooses(){    
console.log("randy", gameOver);
   
    //randy's choice is a random choice 
    //since we do splicelogic in getRandomChoice, don't be redundant
    randy.currentChoice = getRandomChoice();
    randy.allChoices.push(randy.currentChoice)
    turn++;
    // console.log(randy.currentChoice, "randy choices", randy.allChoices);
    //returns the id of the box he "chose"
    //we can use document.getElementById and pass in this id 
    //document.getElementById(randy.currentChoice).classList.add("frog");
    //removeListener(randy.currentChoice);
    display.innerText = "Randy is deliberating..."

    checkWin(); 
    removeCurrentListeners(boxesToFill);
    setTimeout(function(){
        document.getElementById(randy.currentChoice).classList.add("frog");
        currentListeners(boxesToFill);
        removeListener(randy.currentChoice);
        display.innerText = "Player, make your move!"
    }, 2000);

    // console.log("randy's choice", randy.currentChoice, event.target.value);
    updateScoreboard();
}

//function to update the scoreboard; we will call this later in the game
function updateScoreboard() {
	pScore.textContent = player.points;
	rScore.textContent = randy.points;
};


//function to reset the game
resetBtn.addEventListener("click", resetGame);

function resetGame(){
    boxesToFill = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    gameOver = false;
    // console.log("Clicked play game", boxesToFill);
    boxesToFill.forEach(function(element){
        //callback function that accepts one parameter
        const peach = document.getElementById(element);
        peach.classList.remove("frog");
        peach.classList.remove("cat");
    })
    addAllEventListeners();
}

/********************Event Listeners***********************/

//An event listener to change background image to a cat
//This is when playerChooses

function addAllEventListeners(){
one.addEventListener("click", playerChooses);
two.addEventListener("click", playerChooses);
three.addEventListener("click", playerChooses);
four.addEventListener("click", playerChooses);
five.addEventListener("click", playerChooses);
six.addEventListener("click", playerChooses);
seven.addEventListener("click", playerChooses);
eight.addEventListener("click", playerChooses);
nine.addEventListener("click", playerChooses);
}

addAllEventListeners();

function currentListeners(listeners){
    listeners.forEach(function(element){
        //callback function that accepts one parameter
        const peach = document.getElementById(element);
        peach.addEventListener("click", playerChooses)
    })
}

function removeCurrentListeners(listeners){
    listeners.forEach(function(element){
        //callback function that accepts one parameter
        const peach = document.getElementById(element);
        peach.removeEventListener("click", playerChooses)
    })
}
/****Winning Conditions****/

function checkWin(){
    // console.log("it is finally fucking working");
//Conditions if player has won


    for (let i = 0; i < winCombos.length; i++){
        let playerMatch = 0; 
        let randyMatch = 0;
        for (let b = 0; b < winCombos[i].length; b++){
            if (player.allChoices.includes(winCombos[i][b])){
                playerMatch++;
                // console.log(playerMatch);
            }
            if (playerMatch === 3){
                // console.log("WIN MOTHERFUCKER ASKJASKJASJK");
                display.innerText = "Player wins! Humanity is going to be ok."
                removeCurrentListeners(boxesToFill);
                gameOver = true;
                player = {
                   currentChoice: null,
                   allChoices: [],
                   points: player.points + 1
                }
                randy = {
                    currentChoice: null,
                    allChoices: [],
                    points: randy.points
                }
                
            }   if (randy.allChoices.includes(winCombos[i][b])){
                randyMatch++;
                // console.log(randyMatch);
        }   if (randyMatch === 3){
                // console.log("Randy wins and reigns eternal");
                display.innerText = "Randy wins! He eats human failure for a healthy snack!"
                removeCurrentListeners(boxesToFill);
                gameOver = true;
                randy = {
                    currentChoice: null,
                    allChoices: [],
                    points: randy.points + 1
                 }

                player = {
                    currentChoice: null, 
                    allChoices: [],
                    points: player.points 
                }
            } 
        }
    } 
}

resetGame();
updateScoreboard();
