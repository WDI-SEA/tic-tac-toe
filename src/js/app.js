document.addEventListener('DOMContentLoaded', function() {

    // Create and set variable for input X and O into game board.
    var o = "O";
    var x = "X";
    var turn = 2;

    // Get all game board spaces from HTML and store them each in a corresponding variable
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');

    // Get reset button from HTML and store it in a variable
    var newGame = document.getElementById('reset');

    // Create counter variable that will keep track of who's turn it is.
    // Switch player turn logic
    console.log(a1.value)
            a1.addEventListener('click', function(event) {
              if (a1.innerHTML === "") {
                if (turn % 2 === 0) {
                a1.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("a1").style.color = "red";
                console.log(turn);
              } else {
                a1.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("a1").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });

              a2.addEventListener('click', function(event) {
              if (a2.innerHTML === "") {
                if (turn % 2 === 0) {
                a2.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("a2").style.color = "red";
                console.log(turn);
              } else {
                a2.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("a2").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 a3.addEventListener('click', function(event) {
              if (a3.innerHTML === "") {
                if (turn % 2 === 0) {
                a3.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("a3").style.color = "red";
                console.log(turn);
              } else {
                a3.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("a3").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 b1.addEventListener('click', function(event) {
              if (b1.innerHTML === "") {
                if (turn % 2 === 0) {
                b1.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("b1").style.color = "red";
                console.log(turn);
              } else {
                b1.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("b1").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 b2.addEventListener('click', function(event) {
              if (b2.innerHTML === "") {
                if (turn % 2 === 0) {
                b2.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("b2").style.color = "red";
                console.log(turn);
              } else {
                b2.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("b2").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 b3.addEventListener('click', function(event) {
              if (b3.innerHTML === "") {
                if (turn % 2 === 0) {
                b3.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("b3").style.color = "red";
                console.log(turn);
              } else {
                b3.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("b3").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 c1.addEventListener('click', function(event) {
              if (c1.innerHTML === "") {
                if (turn % 2 === 0) {
                c1.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("c1").style.color = "red";
                console.log(turn);
              } else {
                c1.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("c1").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 c2.addEventListener('click', function(event) {
              if (c2.innerHTML === "") {
                if (turn % 2 === 0) {
                c2.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("c2").style.color = "red";
                console.log(turn);
              } else {
                c2.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("c2").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });
                 c3.addEventListener('click', function(event) {
              if (c3.innerHTML === "") {
                if (turn % 2 === 0) {
                c3.innerHTML = "X";
                turn = turn + 1;
                document.getElementById("c3").style.color = "red";
                console.log(turn);
              } else {
                c3.innerHTML = "O";
                turn = turn + 1;
                document.getElementById("c3").style.color = "blue";
                console.log(turn);
              }
              }
// Win state
// 1. Should check all divs to see which div has text
// 2. Should check if text is ==== "x" or "o"
// 3. Should
            });

            // Set click functionality to game board spaces based on user input



            console.log(turn);

    // new game button reloads the page to start a new game
    newGame.addEventListener('click', function(event) {
        newGame.innerHTML = location.reload();
    });
});
