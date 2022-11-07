import React from 'react'
import Square from './Square'

export default function Board({player, setPlayer, squares, setSquares}) {
    return (
        <div className='board'>
            <div className='status'>{'Next player: ' + player}</div>
            {[...Array(3).keys()].map(i => {
                return <div className={'row ' + i} key={'row ' + i}>
                    {[...Array(3).keys()].map(j => {
                        return <Square key={i * 3 + j} value={i * 3 + j} player={player} setPlayer={setPlayer} squares={squares} setSquares={setSquares}/>
                    })}
                </div>
            })}
        </div>
    )
}
