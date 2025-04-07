import React, { useRef, useState } from 'react'

const Otp2 = () => {
    const[item,setItem]= useState( new Array(5).fill(''))
    //[2,3,5,6]
    //0 1  2  3
    //i=2
    //a.splice(i,i-1,)
    const ref= useRef([])

    const handleChange=(event,index)=>{


       if(isNaN(event))return;
        const newChar= event.trim().slice(-1);
        console.log("newChar",newChar);
        const newArray= [...item];
        console.log("newArray",newArray);
        // newArray.splice(index,1,newChar);

        newArray[index]= newChar;
        console.log("newArray1",newArray);
        newChar &&  ref.current[index+1]?.focus();
        setItem(newArray);
    }


    const handleKeyDown=(e,index)=>{
        if(!e.target.value && e.key==="Backspace"){
            ref.current[index-1]?.focus();
        }
    }

  return (
    <div className='flex gap-2 justify-center'>
        {item.map((_,i)=>(
            <div  key={i}>
               
                <input 
                         value={item[i]} 
                       ref={(el)=>ref.current[i]=el}
                        className='border-2 border-black bg-yellow-200 text-black' 
                        onChange={(e)=>handleChange(e.target.value,i)}
                        onKeyDown={(e)=>handleKeyDown(e,i)}
                />
            </div>
        ))}
    </div>
  )
}

export default Otp2