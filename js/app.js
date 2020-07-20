
document.addEventListener("DOMContentLoaded", 
function(){

 let gameboard=["", "", "", "", "", "", "", "", ""];



const playerX = "X";
const playerO = "O";
//these were to set up my win funciton and condition. I could not get 
//a winner function put together but wanted to turn in what I have.


let tL= document.querySelector("#topLeft").className;
let tC= document.querySelector("#topCenter").className;
let tR= document.querySelector("#topRight").className;
let mL= document.querySelector("#middleLeft").className;
let mC= document.querySelector("#middleCenter").className;
let mR= document.querySelector("#middleRight").className;
let bL= document.querySelector("#bottomLeft").className;
let bC= document.querySelector("#bottomCenter").className;
let br= document.querySelector("#bottomRight").className;








let currentPlayer= playerX

var box1Clicked = false;
const box1= document.querySelector("#topLeft")
box1.onclick = function(){
  if (box1Clicked == false){
  box1.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  } 
  box1Clicked =true;
  }
  
  }


var box2Clicked = false;
const box2= document.querySelector("#topCenter")
box2.onclick = function(){
  if (box2Clicked == false){
  box2.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box2Clicked =true;
}
}
var box3Clicked = false;
const box3= document.querySelector("#topRight")
box3.onclick = function(){
  if (box3Clicked == false){
  box3.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box3Clicked =true;
}
}
var box4Clicked = false;
const box4= document.querySelector("#middleLeft")
box4.onclick = function(){
  if (box4Clicked == false){
  box4.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box4Clicked =true;
}
}
var box5Clicked = false;
const box5= document.querySelector("#middleCenter")
box5.onclick = function(){
  if (box5Clicked == false){
  box5.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box5Clicked =true;
}
}
var box6Clicked = false;
const box6= document.querySelector("#middleRight")
box6.onclick = function(){
  if (box6Clicked == false){
  box6.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box6Clicked =true;
}
}
var box7Clicked = false;
const box7= document.querySelector("#bottomLeft")
box7.onclick = function(){
  if (box7Clicked == false){
  box7.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box7Clicked =true;
}
}
var box8Clicked = false;
const box8= document.querySelector("#bottomCenter")
box8.onclick = function(){
  if (box8Clicked == false){
  box8.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box8Clicked =true;
}}
var box9Clicked = false;
const box9= document.querySelector("#bottomRight")
box9.onclick = function(){
  if (box9Clicked == false){
  box9.innerHTML = currentPlayer
  if( currentPlayer === playerX){
    currentPlayer = playerO;
  }else{
    currentPlayer= playerX;
  }
  box9Clicked =true;
}}


;

});
//I cant get my reset button to function, but I am not sure what
//is wrong with it.
reset.addEventListener('clicked', () => {
  window.location.reload(false);
}
);
