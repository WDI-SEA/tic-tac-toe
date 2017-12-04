var str="";
var isStrX=true
var boxes=document.querySelectorAll(".grid-element"); //get all grid element divs
	boxes=Array.from(boxes); //create array of boxes


//on boxes click use pushText function
for (var i = 0; i < boxes.length; i++) {
   boxes[i].addEventListener("click",pushText);
 }


//pushes x or o 
//str left open for "x" and "o"
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




//gets info from each line of boxes and changes into string 

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



function checking (num1,num2,num3) {
  if (
	boxes[num1]===boxes[num2] && 
	boxes[num2]===boxes[num3]&& 
	boxes[num1]===boxes[num3]&& 
	boxes[num1]!=="" &&
	boxes[num2]!=="" &&
	boxes[num3]!=="" 
    )
    console.log(num1,num2,num3)
};

  function reloadGame() {
	location.reload();
	}
        	

