// $(document).ready(function(){
//     $(".column").click(clickFunction);
// });

var array1 = document.getElementsByClassName("column");
var flag = true;        //track move,deault setting is “X turn”
var Xarray = [];
var Oarray = [];
var isWin = false;

// var A = document.getElementById("number0");
// A.addEventListener("click",clickFunction);
// var B = document.getElementById("number1");
// B.addEventListener("click",clickFunction);
// var C = document.getElementById("number2");
// C.addEventListener("click",clickFunction);
// var D = document.getElementById("number3");
// D.addEventListener("click",clickFunction);
// var E = document.getElementById("number4");
// E.addEventListener("click",clickFunction);
// var F = document.getElementById("number5");
// F.addEventListener("click",clickFunction);
// var G = document.getElementById("number6");
// G.addEventListener("click",clickFunction);
// var H = document.getElementById("number7");
// H.addEventListener("click",clickFunction);
// var I = document.getElementById("number8");
// I.addEventListener("click",clickFunction);
var winarray = [
    ["0", "1", "2"], ["3", "4", "5"],
    ["6", "7", "8"], ["0", "3", "6"],
    ["1", "4", "5"], ["2", "5", "8"],
    ["0", "4", "8"], ["2", "4", "6"]
];


for (var i = 0; i < 9; i++) {
    var getclick = document.getElementById("number" + i);
    getclick.addEventListener("click", clickFunction);
}

document.getElementById("reset").addEventListener("click", function(){
    isWin = false;
    flag=true;
    Xarray = [];
    Oarray = [];

    for (var i = 0; i < 9; i++) {
        var cell = document.getElementById("number" + i);
        cell.classList.remove("black");
        cell.classList.remove("white");
    }
    document.getElementById("information").value = ("Reset!");
})

function lookup(XorOplayer) {
    //console.log(XorOplayer);
    for (var j = 0; j < 8; j++) {
        var winoption = winarray[j];
        //if(winoption.some(function(cell){ return XorOplayer.indexOf(cell)===-1}))
        if (XorOplayer.indexOf(winoption[0]) >= 0 &&
            XorOplayer.indexOf(winoption[1]) >= 0 &&
            XorOplayer.indexOf(winoption[2]) >= 0) {
            return true;
        }
    }

    return false;
}


function clickFunction(e) {
    if(isWin == true){
        return;
    }
    console.log(e.target.id.replace("number", ""));
    var clicked = e.target.id.replace("number", "");
    if (flag) {
        Xarray.push(clicked);
        e.target.classList.add("white");
        document.getElementById("information").value = "O turn";
        if (lookup(Xarray)) {
            alert("X win");
            document.getElementById("information").value = ("X win");
            isWin=true;
        }
        flag = false;
    }
    else {
        Oarray.push(clicked);
        e.target.classList.add("black");
        document.getElementById("information").value = "X turn";
        if (lookup(Oarray)) {
            alert("O win");
            document.getElementById("information").value = ("O win");
            isWin=true;
        }
        flag = true;
    }
}


