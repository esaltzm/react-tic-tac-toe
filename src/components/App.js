import React, { useState } from "react"
import Board from './Board'
import '../App.css'

const winPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

function App() {
	const [player, setPlayer] = useState('X')
	const [squares, setSquares] = useState(Array(9).fill(null))
	const players = ['X','O']

	const isWon = (player) => {
		let won = false
		const prevPlayer = players.filter(current => current !== player)[0]
		for(let position of winPositions) {
			if (squares[position[0]] === prevPlayer && squares[position[1]] === prevPlayer && squares[position[2]] === prevPlayer) {
				won = true
				break
			}
		}
		return won
	}

	if (isWon(player)) {
		const prevPlayer = players.filter(current => current !== player)[0]
		setTimeout(() => {
			alert(`Player ${prevPlayer} has won!`)
		}, 200)
	}

	return (
		<div className="App">
			<div className="game">
				<div className="game-board">
					<Board player={player} setPlayer={setPlayer} squares={squares} setSquares={setSquares} />
				</div>
			</div>
		</div>
	)
}

export default App;
