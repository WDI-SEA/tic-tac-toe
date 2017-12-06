let move = 0;
let gameOver = false;
let winMem = {
    X: 0,
    O: 0
};
var innerCheck = function(e) {
    let x = document.getElementsByClassName("tile");
    return x[e].getElementsByTagName("a")[0].innerText;
}
var innerSet = function(e) {
    let x = document.getElementsByClassName("tile");
    return x[e].getElementsByTagName("a")[0];
}
var isWin = function(n) {
    switch (true) {
        case innerCheck(0) === n && innerCheck(1) === n && innerCheck(2) === n:
        case innerCheck(3) === n && innerCheck(4) === n && innerCheck(5) === n:
        case innerCheck(6) === n && innerCheck(7) === n && innerCheck(8) === n:
        case innerCheck(0) === n && innerCheck(3) === n && innerCheck(6) === n:
        case innerCheck(1) === n && innerCheck(4) === n && innerCheck(7) === n:
        case innerCheck(2) === n && innerCheck(5) === n && innerCheck(8) === n:
        case innerCheck(0) === n && innerCheck(4) === n && innerCheck(8) === n:
        case innerCheck(2) === n && innerCheck(4) === n && innerCheck(6) === n:
            showLabel(n);
            gameOver = true;
            return true;
            break;
        default:
            return false;
            break;
    }
}
function showLabel(n) {
    winMem[n]++;
    if (n.length === 1) {
        document.getElementById("win-text").innerText = n + " Wins";
        document.getElementById(n+"-score").getElementsByTagName("div")[0].innerText = winMem[n];
    } else {
        document.getElementById("win-text").innerText = "Draw";
    }
    document.getElementById("win-text").style.visibility = "visible";
    document.getElementById("win-text").style.opacity = "1";
    setTimeout(function() {
        document.getElementById("win-text").style.visibility = "hidden";
        document.getElementById("win-text").style.opacity = "0";
    }, 2000);
}
function newGame() {
    gameOver = false;
    move = 0;
    let x = document.getElementsByClassName("tile");
    for (let i = 0; i < x.length; i++) {
        innerSet(i).innerText = "";
        innerSet(i).removeAttribute("style");
    }
}

function checkWin(plr) {
    move++;
    if (move >= 5 && move <= 9) {
        if (!(isWin(plr)) && move === 9) {
            showLabel("draw");
        }
    }
}

function tileClickEvents() {
    let x = document.getElementsByClassName("tile");
    for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function() {
            if (gameOver === true) {
                newGame();
            } else {
                if ((move % 2) === 0 && innerSet(i).id === "last-hovered") {
                    innerSet(i).innerText = "X";
                    innerSet(i).style.color = "#8826FF";
                    checkWin(innerCheck(i));
                    innerSet(i).removeAttribute("id");
                } else if ((move % 2) === 1 && innerSet(i).id === "last-hovered") {
                    innerSet(i).innerText = "O";
                    innerSet(i).style.color = "#FA9911";
                    checkWin(innerCheck(i));
                    innerSet(i).removeAttribute("id");
                } else {
                    if (move === 9) {
                        newGame();
                    }
                }
            }
        });
        x[i].addEventListener("mouseover", function() {
            if (gameOver === false) {
                if ((move % 2) === 0 && innerCheck(i).length === 0) {
                    innerSet(i).innerText = "X";
                    innerSet(i).setAttribute("id", "last-hovered");
                } else if ((move % 2) === 1 && innerCheck(i).length === 0) {
                    innerSet(i).innerText = "O";
                    innerSet(i).setAttribute("id", "last-hovered");
                }
            }
        });
        x[i].addEventListener("mouseout", function() {
            if (gameOver === false) {
                try {
                    document.getElementById("last-hovered").innerText = "";
                    document.getElementById("last-hovered").removeAttribute("id");
                } catch (e) {

                }
            }
        });
    }
}
window.onload = tileClickEvents();