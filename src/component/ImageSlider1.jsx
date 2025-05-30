import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageSlider1 = () => {
    const[data,setData]= useState([])
    const toShow= 3;
    const[ skip,setSkip]= useState(0)

    const fetchData=async()=>{
        const res= await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=10`)
        setData(res.data.products)
    }
    useEffect(()=>{
       fetchData()
    },[skip])

    const handleNext=()=>{
        setSkip(prev=>prev+toShow)
    }
  return (
    <div>
        <div className='flex relative'>
        {data.map((item,i)=>(
            <div key={i}>
                {item.title}
                {item.id}
               
                <img src={item.images} className='h-40 w-40'/>
            </div>
        ))}
        
        <button className='absolute top-9 bottom-3 left-5'>prev</button>
       
        <button className='absolute top-9 bottom-3 right-5'  onClick={()=>handleNext()}>next</button>
        
     
        </div>
       
    </div>
  )
}

export default ImageSlider1