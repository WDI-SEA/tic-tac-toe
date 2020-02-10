

// ------------------------------------------------------Youtube helped me alot!!!!!!!! 1BestCSharpBlog---------------------------------------------------------
var box1= document.getElementById("s_1"),
box2= document.getElementById("s_2"),
box3= document.getElementById("s_3"),
box4= document.getElementById("s_4"),
box5= document.getElementById("s_5"),
box6= document.getElementById("s_6"),
box7= document.getElementById("s_7"),
box8= document.getElementById("s_8"),
box9= document.getElementById("s_9");



function getWinner(){

    if (box1.innerHTML != "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        console.log("win");
        document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            
    
         if (box4.innerHTML != "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner !"}
            
    
        if (box7.innerHTML != "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner !"}
            
         
        if (box1.innerHTML != "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            
         
        if (box2.innerHTML != "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            
         
         if (box3.innerHTML != "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            
         
         if (box1.innerHTML != "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            
         
         if (box3.innerHTML != "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
            console.log("win");
            document.getElementById("whoW").innerHTML = "We Got A Winner!"}
            

}


var boxes = document.querySelectorAll("#main div"), X_or_O = 0;

for(var i = 0; i < boxes.length; i++){
    boxes[i].onclick = function () {

        if(this.innerHTML !== "X" && this.innerHTML !== "O" ) {
        if(X_or_O%2 === 0) {
            console.log(X_or_O);
            this.innerHTML = "X";
            getWinner();
            X_or_O += 1;

        }else{
            console.log(X_or_O);
            this.innerHTML = "O";
            getWinner();
            X_or_O += 1;
        }
      }
    };
}