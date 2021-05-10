window.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById("demo").addEventListener("click", function);
    let tiles;
    let player = "x";
    let gameOver = false;
    const index = (i, j) => 3 * i + j

    const Otext = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle fill="none" cx="50" cy="50" stroke-width="6" r="45"/></svg>`

    const Xtext = `<svg viewBox="0 0 130.2 130.2" xmlns="http://www.w3.org/2000/svg">
    <line class="path line" fill="none" stroke="#167072" stroke-width="6" stroke-linecap="round" x1="34.4" y1="38" x2="95.8" y2="92.3"/>
    <line class="path line second" fill="none" stroke="#167072" stroke-width="6" stroke-linecap="round" x1="95.8" y1="38" x2="34.4" y2="92.3"/>
    </svg>`

    document.getElementsByClassName("tile").addEventListener("click", function() {
        function setup(){
        tiles = $(".tile")
        }
    })

    tiles.forEach(tile => {

        if (!gameOver) {
            if ($(this).html() == "") {
                $(this).html(player == "o" ? Otext : Xtext)
                $(this).val(player)
                player = player == "o" ? "x" : "o"
                $(".turn").html(player.toUpperCase() + "'s Turn")
            }
            if (winner()) {
                $(".winner").html("Winner: " + winner().toUpperCase())
                gameOver = true;
            }
        }
    });

    document.getElementById("reset").addEventListener("click", function() {
    function reset() {
        gameOver = false
        player = "x"
        for (let t of tiles) {
            t = $(t)
            t.val("")
            t.html("")
        }
        $(".winner").html("")
        $(".turn").html("X's Turn")
    }

    function getvals() {
        let r = []
        for (let t of tiles) {
            r.push($(t).val())
        }
        return r
    }
    

    function winner() {
        const board = getvals()

        //first diagonal check
        let first = board[0]
        let diagonal = first != ""
        for (let i = 0; i < 3; i++) {
            if (board[index(i, i)] != first) {
                diagonal = false
                break
            }
        }
        if (diagonal) return first

        //second diagonal check
        first = board[index(0, 2)]
        let back_diag = first != ""
        for (let i = 1; i < 4; i++) {
            if (board[index(i - 1, 3 - i)] != first) {
                back_diag = false
                break
            }
        }
        if (back_diag) return first

        //horizontal and vertical checks
        for (let i = 0; i < 3; i++) {
            first = board[index(i, 0)]
            let sideways = first != ""
            for (let j = 0; j < 3; j++) {
                if (board[index(i, j)] != first) {
                    sideways = false
                    break
                }
            }
            if (sideways) return first
        }

        for (let i = 0; i < 3; i++) {
            first = board[index(0, i)]
            let sideways = first != ""
            for (let j = 0; j < 3; j++) {
                if (board[index(j, i)] != first) {
                    sideways = false
                    break
                }
            }
            if (sideways) return first
        }

        return board.filter(v => v == "").length == 0 ? "tie" : undefined;
    }
    })
})