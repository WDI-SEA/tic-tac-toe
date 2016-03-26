var squares = document.getElementsByClassName('board-squares');
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(e) {
        e.target.innerHTML = '<img class="x-o-markers" src="o.png" alt="o">';
    });
};