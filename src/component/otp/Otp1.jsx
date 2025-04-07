import React, { useEffect, useRef, useState } from 'react'

const Otp1 = () => {
    const[items,setItems]= useState([...Array(5)]);
    const ref= useRef([]);

    useEffect(()=>{
      
        console.log("ref");

    },[])
    const handleCLick=(event,i)=>{
        if(NaN(event)){
            return;
        }
        const newArray= [...items];
        const newEvent= event.slice(-1);
        newArray(newEvent())
        setItems(event)
        ref.current.focus();
    }

  return (
    <div className='flex gap-2 justify-center'>
        {items.map((ma,i)=>(
            <div>
               <input 
                    ref={ref[i]}
                    className='border-2 border-black bg-gray-500 text-white'
                    onChange={(e)=>handleCLick(e.target.value,i)}
                />
            </div>
        ))}
    </div>
  )
}

export default Otp1