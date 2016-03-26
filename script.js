var squares = document.getElementsByClassName('board-squares');
var button = document.getElementById('clear-button');

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        e.target.innerHTML = '<img class="x-o-markers" src="x.png" alt="o">';
    });
};

button.addEventListener('click', function(e) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
});