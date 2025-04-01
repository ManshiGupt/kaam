import React, { useState } from 'react'

const OtpBar = () => {
    const[data,setData]= useState("");
    const[data1,setData1]= useState(0);
    const[data2,setData2]= useState(0);
    const[data3,setData3]= useState(0);
    const[next,setNext]= useState(true);

    const handled=()=>{
        if(data.length>1){
            setNext(false);
        }
        setData(e.target.value)
    }

  return (
    <div>
        {data}
        <div className='border-2 border-black px-[50%] flex gap-4'>
            <input value={data} onChange={(e)=>handled()} className=' border-2 border-black'/>
            { next  && <input value={data} onChange={(e)=>setData(e.target.value)}/>}
            <input value={data} onChange={(e)=>setData(e.target.value)}/>
            <input value={data} onChange={(e)=>setData(e.target.value)}/>
           
        </div>
    </div>
  )
}

export default OtpBar