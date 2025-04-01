import React, { useState } from 'react'

const ButtonDelete = () => {

    const[showBox,setShowBox]= useState(false);
    const[k,setK]= useState()
    const[item,setItem]= useState( [...Array(5)])

    const handleDelete=(i)=>{
        setItem(  item.filter((_,ind)=>ind!==i))
    }
  return (
    <div>ButtonDelete
        
        <button onClick={()=>setShowBox(prev=>!prev)}>add</button>
       {
        showBox && 
        item.map((data,i)=>(
        <div>
             <input placeholder='hdhd' value={k}/>
                <button onClick={()=>handleDelete(i)}>delete</button>
            </div>
       ))}
    </div>
  )
}

export default ButtonDelete