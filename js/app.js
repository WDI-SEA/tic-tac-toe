// Game mode
let gameMode = "p2"
let selectedGameMode = gameMode

// Game mode modal close and cancel game mode selection
const cancelCreateBtn = document.querySelector("#cancel-create")
const modalBg = document.querySelector(".modal-background")
cancelCreateBtn.addEventListener('click', e => modalBg.classList.add("hidden"))

// Resets selected game mode
const gameModeSelectionBtns = document.querySelectorAll(".game-mode")
const resetSelection = () => {
	gameModeSelectionBtns.forEach(btn => btn.classList.remove("selected"))
}

// Game mode modal open
document.addEventListener('click', e => {
	if (e.target && e.target.className === "player-name") {
		resetSelection()
		selectedGameMode = gameMode 
		document.getElementById(gameMode).classList.add("selected")
		modalBg.classList.remove("hidden")
	}
})

// Game mode selection logic
document.addEventListener('click', e => {
	if (e.target && e.target.className === "game-mode") {
		document.getElementById(selectedGameMode).classList.remove("selected")
		selectedGameMode = e.target.id 
		document.getElementById(selectedGameMode).classList.add("selected")
	}
})

// Initialize selected game mode
const proceedCreateBtn = document.querySelector("#proceed-create")
proceedCreateBtn.addEventListener('click', e => {
	gameMode = selectedGameMode
	modalBg.classList.add("hidden")
	game.initialize()
})

// Board cells
let cellElements = []
for(let i = 0; i < 9; i ++) {
  element = document.querySelector(`#cell_${i}`)
  cellElements.push(element)
}

document.addEventListener('click', e => {  
  if (e.target && e.target.classList.contains("cell")) {
    let cellNo = e.target.dataset["index"]
    if (!game.isInitialized()) {
      modalBg.classList.remove("hidden")
    }
    else if (!game.isOver() && !game.currentPlayer().isComputer) {
      game.currentPlayer().markThis(cellNo)
    }
    else if(game.isOver())
      game.newRound()
    else if (game.currentPlayer().isComputer)
      console.log(`Wait for your turn.`)
  }
})

// Game Module 
const game = (() => {
	let _game
	let _activeTurn
	let _players
	let _board
	let _isOver = true
	let _status
	const patterns = 
		[[0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
		[0, 4, 8], [2, 4, 6]] 			// diagonal

	const newBoard = () => {
		let cells = []
		for (let i = 0; i < 9; i ++)
			cells.push("")
		_board = cells
	}

	const switchTurn = () => {
		_activeTurn = _activeTurn === 0 ? 1 : 0
	}

	const notifyComputer = () => {
		if(currentPlayer().isComputer)
			currentPlayer().notify()
	}

	const currentPlayer = () => _players[_activeTurn]

	playerNameElements = [document.getElementById("p1-name"), document.getElementById("p2-name")]
	
	const generatePlayers = () => {
		let p1 = Player("P1", "x")
		let p2
		switch (gameMode) {
			case "easy":
				p2 = Computer("EASY AI", "o", 1)
				break;
			case "medium":
				p2 = Computer("MEDIUM AI", "o", 5)
				break;
			case "master":
				p2 = Computer("MASTER AI", "o", 8)
				break;
			default:
				p2 = Player("P2", "o")
		}
		playerNameElements[0].textContent = p1.name
		playerNameElements[1].textContent = p2.name
		_players = [p1, p2]
	}

	const board = () => _board.slice(0)

	const players = () => _players

	const setupGame = () => {
		newBoard()
		refreshCellView()
		_activeTurn = Math.floor(Math.random() * 2)
		updateScores()
		_isOver = false
		_status = `It's ${currentPlayer().name}'s turn`
		status()
		notifyComputer()
	}

	const isInitialized = () => (_activeTurn === 0 || _activeTurn === 1)

	const initialize = () => {
		generatePlayers()
		_scores = [0, 0]
		updateScores()
		setupGame()
	}

	const newRound = () => {
		if (_isOver) setupGame()
	}

	const mark = cell => {
		if(_board[cell] === "") {
			_board[cell] = currentPlayer().marker
			updateCellView(cell)
			checkGameConditions()
		}
		else {
			console.log("Please choose another square.")
			notifyComputer()
		}
	}

	const boardMarkers = ["<i class='fas fa-times'></i>", "<i class='far fa-circle'></i>"]
	const updateCellView = cell => {
		cellElements[cell].innerHTML = boardMarkers[_activeTurn]
	}

	const refreshCellView = () => {
		for(let i = 0; i < 9; i ++) {
			cellElements[i].textContent = ""
			cellElements[i].classList.remove("highlight")
		}
	}

	const highlightWinningPattern = pattern => {
		pattern.forEach(index => {
			cellElements[index].classList.add("highlight")
		})
	}

	const findEmptyCells = boardInstance => {
		let freeCells = []
		for(let i = 0; i < 9; i ++)
			if (boardInstance[i] === "")
				freeCells.push(i)
			return freeCells
	}

	const checkGameConditions = () => {
		let winningPattern = findWinningPattern(_board)
		if (winningPattern) {
			_isOver = true
			_status = `${currentPlayer().name} wins!`
			highlightWinningPattern(winningPattern)
			_scores[_activeTurn] ++
			updateScores()
			status()
		}
		else if (draw(_board)) {
			_isOver = true
			_status = "It's a draw!"
			status()
		}
		else {
			switchTurn()
			_status = `It's ${currentPlayer().name}'s turn`
			status()
			notifyComputer()
		}
	}

	let playerScoreElements = [document.getElementById("p1-score"), document.getElementById("p2-score")]

	let _scores = [0, 0]
	const updateScores = () => {
		playerScoreElements[0].textContent = _scores[0]
		playerScoreElements[1].textContent = _scores[1]
	}

	const isOver = () => _isOver

	const findWinningPattern = (boardInstance) => {
		let winPattern = []
		patterns.forEach(pattern => {
			let pick = boardInstance[pattern[0]]
			if (pick && pattern.every(index => boardInstance[index] === pick)) {
				winPattern.push(...pattern)
			}
		})

		if (winPattern.length !== 0)
			return winPattern
		return false
	}

	const winner = boardInstance => {
		for(let i = 0; i < patterns.length; i ++) {
			let currentPattern = patterns[i]
			let pick = boardInstance[currentPattern[0]]
			if (pick && currentPattern.every(index => boardInstance[index] === pick)) {
				return pick
			}
		}
		return false
	}

	const draw = boardInstance => {
		if (boardInstance.some(cell => cell === ""))
			return false
		return true
	}

	const markers = () => _players.map(p => p.marker)

	const statusMessageElement = document.getElementById("status-message")
	const activeMarkerElement = document.getElementById("active-marker")
	const status = () => {
		console.log(`Players: ${_players[0].name} vs ${_players[1].name}`)
		console.log(_board)
		console.log(_status)
		statusMessageElement.textContent = _status
		activeMarkerElement.innerHTML = boardMarkers[_activeTurn]

	}

	_game = {
		board, currentPlayer, isOver, isInitialized, initialize, newRound, status, mark, markers, findEmptyCells, winner, draw
	}
	return _game
})()

// Player 

const Player = (name, marker) => {
	game
	const markThis = (cell) => {
		game.mark(cell)
	}
	return { name, marker, markThis, game }
}

const Computer = (name, marker, difficulty = 2) => {
	game
	difficulty = (difficulty < 1 || isNaN(difficulty)) ? 1 : difficulty

	const markThis = (cell) => {
		game.mark(cell)
	}

	const notify = () => {
		let bestMove = findBestMove()
		markThis(bestMove.position)
	}

	const findBestMove = () => minimax(game.board(), "max")

	const minimax = (board, mode, depth = 0) => {
		let gameScore = evaluate(board)
		if (gameScore !== false)
			return { score: gameScore, position: null }

		if (depth === difficulty)
			return { score: 0, position: null }

		let nextMode = mode === "max" ? "min" : "max"

		let minimaxedMoves = []
		game.findEmptyCells(board).forEach(cell => {
			minimaxedMoves.push({
				score: minimax(simulate(board, cell, mode), nextMode, depth + 1).score, position: cell
			})
		})

		let bestMoves = minimaxedMoves.reduce((stored, current) => {
			if (stored.length === 0)
				return [current]
			else if (stored[0].score < current.score && mode === "max")
				return [current]
			else if (stored[0].score > current.score && mode === "min")
				return [current]
			else if (stored[0].score === current.score)
				stored.push(current)
			return stored
		}, [])

		return bestMoves[Math.floor(Math.random() * bestMoves.length)]
	}

	let _opponentMarker
	const opponentMarker = () => {
		_opponentMarker = _opponentMarker || game.markers().find(m => m !== marker)
		return _opponentMarker
	}

	const simulate = (board, position, mode) => {
		let simMarker = mode === "max" ? marker : opponentMarker()
		simulation = board.slice(0)
		simulation.splice(position, 1, simMarker)
		return simulation
	}

	const evaluate = board => {
		let winner = game.winner(board)
		if (winner)
			if(winner === marker)
				return 10
			else if (winner !== marker)
				return -10

		if (game.draw(board))
			return 0
		return false
	}

	let isComputer = true
	return { name, marker, markThis, game, isComputer, notify }
}