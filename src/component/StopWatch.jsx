import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const[time,setTime]= useState(0);
    const ref= useRef(0);
let k;
    const handleStart=()=>{
       
        k= setInterval(()=>{
            setTime(prev=>prev+1);
        },500)
    }
    const handleEnd=()=>{
        clearInterval(k)
    }
    const handleReset=()=>{
        clearInterval(k)
    }
  return (
    <div>
        
        <h1>StopWatch</h1>
        <h1 className='flex gap-4 justify-around'>{time}</h1>
        <h1 className='flex gap-4 justify-around'>{ref.current}</h1>
        <div className='flex gap-4 justify-around'>
        <button className='border border-black p-4 bg-yellow-500' onClick={()=>handleStart()} >start</button>
        <button className='border border-black p-4 bg-yellow-500' onClick={()=>handleEnd()}>stop</button>
        <button className='border border-black p-4 bg-yellow-500' onClick={()=>handleReset()}>reset</button>
        </div>
    </div>
  )
}

export default StopWatch