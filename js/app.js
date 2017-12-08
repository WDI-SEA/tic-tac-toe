
  var index=boxes
var str="";
var isStrX=true
var boxes=document.querySelectorAll(".grid-element");
boxes=Array.from(boxes);
// var overlay=document.querySelector(".overlay");
var notifiar=document.querySelector("h1");

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",pushText);
  boxes[i].removeEventListener("click", index);
}



function pushText () {
  
  var index=boxes.indexOf(this);

  if (isStrX) {
    str="X";
    isStrX=false;
    console.log(index)
  }
  else{
    str="O";
    isStrX=true;
  }
  this.innerHTML=str;


  checking(0,1,2);
  checking(3,4,5);
  checking(6,7,8);

  checking(0,3,6);
  checking(1,4,7);
  checking(2,5,8);

  checking(0,4,8);
  checking(2,4,6);

}

//show overlay when win is calculated....?
function checking (num1,num2,num3) {

  if (
      boxes[num1].innerHTML.trim()===boxes[num2].innerHTML.trim() && 
      boxes[num2].innerHTML.trim()===boxes[num3].innerHTML.trim() &&
      boxes[num1].innerHTML.trim()===boxes[num3].innerHTML.trim() &&
      boxes[num1].innerHTML.trim()!=="" &&
      boxes[num2].innerHTML.trim()!=="" &&
      boxes[num3].innerHTML.trim()!=="" 
    )
    {
      notifiar.innerHTML=str+" wins";
      console.log(num1,num2,num3);
    }
}


function reloadGame() {
location.reload()
}
       