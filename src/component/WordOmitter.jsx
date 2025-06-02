import React, { useState } from 'react'

const WordOmitter = () => {
    const[text,setText]= useState("");
    const[textt,setTextt]= useState([])
    const OMITTED_WORDS = ["a", "the", "and", "or", "but"];

   //manshi is a good
    const handke=()=>{
        const k= text.split(" ");
        const filterd= k.filter((item,i)=>!OMITTED_WORDS.includes(item))
        console.log(filterd)
        setTextt(filterd)
    }
  return (
    <div>
        <input value={text} className='border-2 border-black p-4 ' onChange={(e)=>setText(e.target.value)}/>
        <button className='border-2 border-black p-4 ' onClick={()=>handke()}>filter</button>
        {textt.map((item,i)=>(
            <div>
                {item}
                </div>
        ))}
    </div>
  )
}

export default WordOmitter