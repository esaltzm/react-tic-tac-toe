import React from 'react'

export default function Square({value, player, setPlayer, squares, setSquares}) {
    const players = ['X','O']
    const markSquare = () => {
        squares.splice(value,1,player)
        console.log('square spliced', squares)
        setSquares([...squares])
        setPlayer(players.filter(current => current !== player)[0])
    }
    return (
        <button className="square" onClick={markSquare}>
            {squares[value] ? squares[value] : ''}
        </button>
    )
}
