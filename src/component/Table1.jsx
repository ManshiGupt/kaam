import React, { useEffect, useState } from 'react'

const Table1 = () => {
    const[data1,setData1]= useState("")
    const[data2,setData2]= useState("")
    const[data3,setData3]= useState({})

    useEffect(()=>{
           
            setData3({data1, data2});
            console.log(data3);
    },[data1,data2])
  return (
    <div>Table1
        <input value={data1} onChange={(e)=>setData1(e.target.value)} className='border-2 border-black' placeholder='dehjfe'/>
        <input  value={data2} onChange={(e)=>setData2(e.target.value)} className='border-2 border-black' placeholder='dehjfe'/>
        {data3}
    </div>
  )
}

export default Table1