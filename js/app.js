console.log('Hello frontend');

var ticMark="O"
var winCon=false;
var winner="";

var grid;


function placeO(grid){
    if(!winCon){
        if(ticMark==="X"){
            if(document.getElementById(grid).innerText===""){
                document.getElementById(grid).innerText = ticMark;
                ticMark="O";
            }
        }else if(ticMark==="O"){
            if(document.getElementById(grid).innerText===""){
                document.getElementById(grid).innerText = ticMark;
                ticMark="X";
            }
        }
        checkWin();
        
    }
    document.getElementById("turn").innerText=ticMark+"'s Turn";
    
}

function checkWin(){
    if((document.getElementById("grid1").innerText==="O"&&document.getElementById("grid2").innerText==="O"&&document.getElementById("grid3").innerText==="O")
        ||(document.getElementById("grid4").innerText==="O"&&document.getElementById("grid5").innerText==="O"&&document.getElementById("grid6").innerText==="O")
        ||(document.getElementById("grid7").innerText==="O"&&document.getElementById("grid8").innerText==="O"&&document.getElementById("grid9").innerText==="O")
        ||(document.getElementById("grid1").innerText==="O"&&document.getElementById("grid4").innerText==="O"&&document.getElementById("grid7").innerText==="O")
        ||(document.getElementById("grid3").innerText==="O"&&document.getElementById("grid6").innerText==="O"&&document.getElementById("grid9").innerText==="O")
        ||(document.getElementById("grid2").innerText==="O"&&document.getElementById("grid5").innerText==="O"&&document.getElementById("grid8").innerText==="O")
        ||(document.getElementById("grid1").innerText==="O"&&document.getElementById("grid5").innerText==="O"&&document.getElementById("grid9").innerText==="O")
        ||(document.getElementById("grid3").innerText==="O"&&document.getElementById("grid5").innerText==="O"&&document.getElementById("grid7").innerText==="O")
        ){
            winCon=true;
            winner="O";
            document.getElementById("winner").innerText=winner +" is the Winner";
        }else if((document.getElementById("grid1").innerText==="X"&&document.getElementById("grid2").innerText==="X"&&document.getElementById("grid3").innerText==="X")
        ||(document.getElementById("grid4").innerText==="X"&&document.getElementById("grid5").innerText==="X"&&document.getElementById("grid6").innerText==="X")
        ||(document.getElementById("grid7").innerText==="X"&&document.getElementById("grid8").innerText==="X"&&document.getElementById("grid9").innerText==="X")
        ||(document.getElementById("grid1").innerText==="X"&&document.getElementById("grid4").innerText==="X"&&document.getElementById("grid7").innerText==="X")
        ||(document.getElementById("grid3").innerText==="X"&&document.getElementById("grid6").innerText==="X"&&document.getElementById("grid9").innerText==="X")
        ||(document.getElementById("grid2").innerText==="X"&&document.getElementById("grid5").innerText==="X"&&document.getElementById("grid8").innerText==="X")
        ||(document.getElementById("grid1").innerText==="X"&&document.getElementById("grid5").innerText==="X"&&document.getElementById("grid9").innerText==="X")
        ||(document.getElementById("grid3").innerText==="X"&&document.getElementById("grid5").innerText==="X"&&document.getElementById("grid7").innerText==="X")
        ){
            winCon=true;
            winner="X";
            document.getElementById("winner").innerText=winner +" is the Winner";
        }else if(document.getElementById("grid1").innerText!==""&&
        document.getElementById("grid2").innerText!==""&&
        document.getElementById("grid3").innerText!==""&&
        document.getElementById("grid4").innerText!==""&&
        document.getElementById("grid5").innerText!==""&&
        document.getElementById("grid6").innerText!==""&&
        document.getElementById("grid7").innerText!==""&&
        document.getElementById("grid8").innerText!==""&&
        document.getElementById("grid9").innerText!==""){
            winCon=true;
            winner="Nobody";
            document.getElementById("winner").innerText="Tie";
        }

}

function clearB(){
    document.getElementById("grid1").innerText="";
    document.getElementById("grid2").innerText="";
    document.getElementById("grid3").innerText="";
    document.getElementById("grid4").innerText="";
    document.getElementById("grid5").innerText="";
    document.getElementById("grid6").innerText="";
    document.getElementById("grid7").innerText="";
    document.getElementById("grid8").innerText="";
    document.getElementById("grid9").innerText="";
    winCon=false;
    winner="";
    ticMark="O";
    document.getElementById("winner").innerText="";
    document.getElementById("turn").innerText="O's Turn";

}