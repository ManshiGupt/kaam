"use client"
import React, { useState } from 'react'

const ProgressBar = () => {
    const[list,setList]= useState([]);
    const[task,setTask]= useState("");
    const[isInput, setIsInput]= useState(false);
    const[count,setCount]=useState(0);
const[cutTask, setCutTask]= useState(0);
    const handleenter=()=>{
        if(
            task.trim()
        ){
            setList([...list,task]);
            setTask("");
        }

      
    }

    const handleNew=()=>{
       
    }
    const handlecolorincrese=()=>{
        setCount((prev)=>(prev+1)>8?8 : (prev+1));


    }

    const handleIndexList=(i)=>{
        setCutTask((prev)=>prev+1);
        setIsInput(true);
    }
  return (
    <div>
       <input className=' border-4 p-4 m-2' placeholder='enter your task' value={task} type='text'  onChange={(e)=>setTask(e.target.value)}/>
        <button className='border-2 border-red-400 m-4'onClick={()=>handleenter()}>Enter</button>
        <button className='border-2 border-red-400 p-4' onClick={()=>handleNew()}>+</button>
        <h1>{list.map((m,i)=>
        (
           <div className={`p-4 ${isInput && "bg-black"}`} onClick={()=>handleIndexList(i)}>{m}</div> 
        )
        )}</h1>

        <h1 className='border-4 border-green-600'></h1>
        <button className='border-2 border-red-400 p-4' onClick={()=>handlecolorincrese()}>+</button>
        {[...Array(list.length)].map((_,i)=>(
            <button className={`${cutTask>i?"bg-green-800":" bg-red-400" } border-0`}>{i}</button>
        ))}


    </div>
  )
}

export default ProgressBar