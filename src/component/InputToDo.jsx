import React, { useState } from 'react'

const InputToDo = () => {
    const[text,setText]= useState("");
    const[list,setList]= useState([]);
    const handleChange=()=>{
        setText("");
        setList([...list,text]);
    }
  return (
    <div>
        <input placeholder='se' value={text} onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleChange}>click me</button>
        <ul>
           { list.map((list)=>(
                <div>
                    {list}
                </div>
            ))}
        </ul>

    </div>
  )
}

export default InputToDo