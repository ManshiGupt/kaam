
import React, { useState } from 'react'

const ProgressBar11 = () => {
    const[progress,setProgress]= useState(10)
  return (
    <div className='flex justify-center'>
        {progress}
        <div className='relative bg-gray-400 w-40 h-10 rounded-2xl'>
            <div className={`absolute bg-green-700  top-0 bottom-0 left-0 rounded-r-xl rounded-2xl`} style={{width:`${progress}%`}}>

            </div>
        </div>
        <button className='bg-gray-400 p-4 m-10 rounded-2xl'onClick={()=>setProgress(prev=>prev>=100?100:prev+10)}>+</button>
        <button className='bg-gray-400 p-4 m-10 rounded-2xl ' onClick={()=>setProgress(prev=>prev<10?0:prev-10)}>-</button>
    </div>
  )
}

export default ProgressBar11