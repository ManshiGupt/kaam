import React, { useState } from 'react'

const ChipInputs = () => {
    const[data,setData]= useState("")
    const[d,setD]= useState(["dd","dhdhih","jdi"])
    const handle=(e)=>{
        setData(e.target.value)
    }
    const handleRemove=(i)=>{
        console.log(  d.filter((k,ind)=>i!=ind));
       d.filter((k,ind)=>i===ind)
    } 
  return (
    <div>ChipInputs
        {data}
        <input className='border-2 border-black p-4 ' value={data} onChange={(e)=>handle(e)}/>
        <div className='flex gap-4 pt-5 justify-center'>
           {d.map((d,i)=>(
            <div key={i} className='rounded-2xl p-3 border-2 border-black flex gap-5'>
               
                    <button >{d}</button> 
                <button onClick={()=>handleRemove(i)}>x</button>
               
            </div>
           ))}
           </div>
       
    </div>
  )
}

export default ChipInputs