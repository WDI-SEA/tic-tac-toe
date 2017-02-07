var turn = 'X';
function next() {
    turn = turn === 'X' && 'O' || 'X';
}
function play() {
    if (this.innerHTML === '') {
        this.innerHTML = turn;
        checkForWinner();
        next();
    }
}

var squares = document.getElementById("board").getElementsByTagName("td");
for (var i in squares) {
   squares[i].onclick = play;
}

function checkForWinner(){

    /* Rows */

    if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s2").innerHTML == 'X' && document.getElementById("s3").innerHTML == 'X'){
        alert("X WINS!");
        var p = parseInt(document.querySelectorAll('td'));
        document.getElementById("playerOneScore").textContent = p;
        p++;
       
    }

     if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s2").innerHTML == 'O' && document.getElementById("s3").innerHTML == 'O'){
        alert("O WINS!");
    }

      if(document.getElementById("s4").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s6").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s4").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s6").innerHTML == 'O'){
        alert("O WINS!");
    }


      if(document.getElementById("s7").innerHTML == 'X' && document.getElementById("s8").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s7").innerHTML == 'O' && document.getElementById("s8").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
        alert("O WINS!");
    }


    /* Colummns */

    if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s4").innerHTML == 'X' && document.getElementById("s7").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s4").innerHTML == 'O' && document.getElementById("s7").innerHTML == 'O'){
        alert("O WINS!");
    }

      if(document.getElementById("s2").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s8").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s2").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s8").innerHTML == 'O'){
        alert("O WINS!");
    }


      if(document.getElementById("s3").innerHTML == 'X' && document.getElementById("s6").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s3").innerHTML == 'O' && document.getElementById("s6").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
        alert("O WINS!");
    }

    /* Diagonals */

      if(document.getElementById("s1").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s9").innerHTML == 'X'){
        alert("X WINS!");
    }

     if(document.getElementById("s3").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s7").innerHTML == 'O'){
        alert("O WINS!");
    }

          if(document.getElementById("s1").innerHTML == 'O' && document.getElementById("s5").innerHTML == 'O' && document.getElementById("s9").innerHTML == 'O'){
        alert("X WINS!");
        // var p = Integer.parseInt(document.getElementById("playerOneScore").textContent());
        // p++;
    }

     if(document.getElementById("s3").innerHTML == 'X' && document.getElementById("s5").innerHTML == 'X' && document.getElementById("s7").innerHTML == 'X'){
        alert("O WINS!");
    }

/* Restart the game */
    document.getElementById("restart").onclick = function() {
        for (var i in squares) {
           squares[i].innerHTML = '';
        }
    }

}
