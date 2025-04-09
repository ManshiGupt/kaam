import React, { createContext, useState } from 'react'

import About from './About';
import Contactus from './Contactus';
import Home from './Home';

const TabDataPersi = () => {
    const[index,setIndex]= useState(0);
    const[data,setData]= useState("lo");
    const tabs=["home","about","contactus"];

    const contextApi= createContext();


    const handlething=()=>{

    }
  return (
    <Context.contextApi value={data}>
    <div className=''>
        {index}
        {data}
        <div className='flex gap-4 justify-center'>
        {tabs.map((data,i)=>(
            <div key={i} onClick={()=>setIndex(i)}>
                {data}
            </div>
        ))}
        </div>
        <div className='flex justify-center py-4'>
        {index==0 && <Home/>}
        {index== 1 && <About/>}
        {index==2 && <Contactus/>}
        </div>
    </div>
    </Provider.contextApi>
  )
}

export default TabDataPersi