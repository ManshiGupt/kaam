import React, { useState } from 'react'

const TicTacToe = () => {
  const[player,setPlayer]= useState(false);
  const[turn,setTurn]= useState({});
  const[current,setCurrent]= useState()

  const handle=(i)=>{
    setCurrent([i])
    setPlayer(!player);
    setTurn(({...turn, [i]:player}))
    console.log(turn);
  }
  return (
    <div>TicTacToe
      <h1>Winner</h1>
      <h1>Next PLayer {player?"X":"O"}</h1>
      <div>
        <div className=' gap-10 justify-center'>
          {Array.from({length:9}).map((item,i)=>(
            <div key={i} className=' hover:bg-red-500 p-4 rounded-xl' onClick={()=>handle(i)}>
            {turn?(turn[i]?"X":"O"): "M "}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicTacToe