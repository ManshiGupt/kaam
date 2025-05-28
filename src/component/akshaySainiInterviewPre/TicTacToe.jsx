import React, { useState } from 'react'

const TicTacToe = () => {
  const[player,setPlayer]= useState("X");
  const[turn,setTurn]= useState({});
  const[current,setCurrent]= useState()

  const handle=(i)=>{
    if(turn[i]){
      return
    }
    setCurrent([i])
    setPlayer(prev=>prev=="X"?"O":"X");
    setTurn(({...turn, [i]:player}))
    console.log(turn);
  }
  return (
    <div>TicTacToe
      <h1>Winner</h1>
      <h1>Next PLayer {player?"X":"O"}</h1>
      <div>
        <div className='grid grid-cols-3 gap-0 justify-center px-40'>
          {Array.from({length:9}).map((item,i)=>(
            <div key={i} className=' hover:bg-red-500 p-4 rounded-sm border-2 bg-gray-400' onClick={()=>handle(i)}>
              {turn[i]}
              {/* {i<2?(turn[i]?"X":"O"): "M "} */}
              {/* {i>2 && <div>ram</div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TicTacToe