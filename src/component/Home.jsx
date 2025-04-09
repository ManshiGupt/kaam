import React, { useContext, useState } from 'react'
import { dataContext } from './TabDataPersi';



const Home = () => {
    const[ram,setRam]=useState("");
    // const{data}=funTouseContext();
   
     const{data,setData}= useContext(dataContext);
  return (
    <div>Home
        <input value={data} onChange={(e)=>setData(e.target.value)} className='border-2 border-black bg-yellow-300'/>
        {data}
    </div>
  )
}

export default Home