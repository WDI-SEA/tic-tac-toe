
var isXturn = true;        //track "X turn" or "O turn"
var isWin = false;          //track game win or loose
var Xarray = [];            //store X steps
var Oarray = [];            //store O steps
var winarray = [            
    ["0", "1", "2"], ["3", "4", "5"],
    ["6", "7", "8"], ["0", "3", "6"],
    ["1", "4", "5"], ["2", "5", "8"],
    ["0", "4", "8"], ["2", "4", "6"]
];

//loop through winoption to check if it is included in Xarray or Oarray
function lookup(XorOarray) {
    for (var j = 0; j < 8; j++) {
        var winoption = winarray[j];
        if (winoption.every(function (item) { return XorOarray.indexOf(item) >= 0 })) {
            return true;
        }

    }
    return false;
}

//actions after clicking
function clickaction(e) {

    if (isWin) {
        return;
    }

    clicked = e.target;
    //Whether this element is clicked or not
    if (Xarray.indexOf(clicked.id) >= 0 || Oarray.indexOf(clicked.id) >= 0) {
        return;
    }
    if (isXturn) {
        Xarray.push(clicked.id);
        clicked.classList.add("white");
        document.getElementById("information").value = "O turn";
        if (lookup(Xarray)) {
            alert("X win");
            document.getElementById("information").value = ("X win");
            isWin = true;
        }
        isXturn = false;
        
    }
    else {
        Oarray.push(clicked.id);
        clicked.classList.add("black");
        document.getElementById("information").value = "X turn";
        if (lookup(Oarray)) {
            alert("O win");
            document.getElementById("information").value = ("O win");
            isWin = true;
        }
        isXturn = true;
        
    }

}



function reset() {
    document.getElementById("information").value = "X turn";
    Xarray = [];
    Oarray = [];
    iswin = false;
    isXturn = true;
    location.reload();
    for (var i = 0; i < 9; i++) {
        var getcell = document.getElementById(i);
        getcell.classList.remove("white");
        getcell.classList.remove("black");

    }
}

// function lookup(XorOarray) {
//     //console.log(XorOarray);
//     for (var j = 0; j < 8; j++) {
//         var winoption = winarray[j];
//         var ismatched = true;
//         for (var i = 0; i < 3; i++) {
//             if (XorOarray.indexOf(winoption[i]) == -1) {
//                 ismatched = false;
//                 break;
//             }
//         }
//         if (ismatched){
//             return true;
//         }
//     }
//    return false;
// }


for (var i = 0; i < 9; i++) {
    var getcell = document.getElementById(i);
    getcell.addEventListener("click", clickaction);
}

var resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", reset);
