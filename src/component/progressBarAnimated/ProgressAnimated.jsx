import React, { useState } from 'react'

const ProgressAnimated = () => {
    const[progress,setProgress]= useState(0);
  return (
    <div>
    <div className='border-solid border-2 border-black p-2 m-8 rounded-xl'>
        <div className={`bg-green-500 p-1 m-0 rounded-xl`} style={{width:`${progress}%`}} >

        </div>
    </div>
    <div className='px-20 flex gap-20'>
        {progress}
    <button onClick={()=>setProgress(prev=>(prev+10)%110)}>+</button>
    <button onClick={()=>setProgress(prev=>prev<=0?0:prev-10)}>-</button>
    </div>
    </div>
  )
}

export default ProgressAnimated