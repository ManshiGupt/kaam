import React from 'react';
import { useState } from 'react';

const Qui1 = () => {
const[count, setCount]= useState(0);
    const quest = {
        "what is this number?": ["gwdhgdd", "frf", "DDD", "dvff"],
        "whois this?": ["gwdhgddd", "fdrf", "DdDD", "ddff"],
        "ram is what doing?": ["dee", "dhvehgeg", "egytey", "egde"],
      };
const handleNext=()=>{
    // if(count>=Object.keys(quest).length){
    //     setCount(0);
    // }else{
    //     setCount(count+1);
    // }
    setCount((prev)=>(( prev+1) % Object.keys(quest).length)
    
      
    )
    
}
  return (
    <div>
        {/* {quest[1]} */}
       { Object.keys(quest)[count]}
       {Object.values(quest)[count].map((data)=>(
        <li>{data}</li>
       ))}
       <button className='border-2 bg-gray-400 text-white px-4 py-2 rounded-md ' onClick={()=>handleNext()}>submit</button>
    </div>
  )
}

export default Qui1