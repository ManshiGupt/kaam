import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FilterByid = () => {
    const[data,setData]= useState([])
    const[ram,setRam]= useState([])
    useEffect(() => {
        ftechData()
    }, [])
    const ftechData=async()=>{
        const res= await axios.get("https://app.vedicpandit.in/get-audio-text?currentPage=1&limit=10&category=%E0%A4%AD%E0%A4%97%E0%A4%B5%E0%A4%A6%20%E0%A4%97%E0%A5%80%E0%A4%A4%E0%A4%BE&language=hi")
        setData(res.data.data)
        console.log(res.data.data)
        setRam(res.data.data)
    }
   
    const handleLife=(index)=>{
       const filterdData= [...data]
       const k=filterdData.filter((item,i)=>item._id !== index) console.log("k",k)
    //    setData(k)
       setRam(k)
    }
    
  return (
    <div className=''>FilterByid
        {ram.map((item,i)=>(
            <li key={item._id} className='flex' onClick={()=>handleLife(item._id)}>
                 {i}
                {item.subTitle}
                {item._id}
               
            </li>
        ))}
    </div>
  )
}

export default FilterByid