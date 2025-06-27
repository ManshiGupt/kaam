import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DataTable1 = () => {
    
    const[current,setCurrent]= useState(1)
    const[data,setData]= useState([]);
    const[total,setTotal]= useState(15)
    const[rowperpage,setRowperpage]= useState(5)
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const res = await axios.get("https://dummyjson.com/products?limit=30");
        console.log(res)
        setData(res?.data?.products || []);
      };
      const hanf=(e)=>{
        const value= parseInt(e.target.value)
        setRowperpage(value)
        setCurrent(1)
      }
      const handleNext=()=>{
        setCurrent(prev=>Math.min(prev+1,rowperpage))
      }
      const handlePrev=()=>{
        setCurrent(prev=>Math.max(prev-1,1))
      }
      const start=( current-1)* rowperpage;
      const end= start+rowperpage
      const filtered= data.slice(start,end)
  return (
    <div>
       {filtered.map((item,i)=>(
        <div>
            {item.title}
            </div>
       ))}
       <h1 className='text-4xl'>{current}</h1>
        <button onClick={()=>handlePrev()}>prev</button>
        <button onClick={()=>handleNext()}>next</button>
        <select value={rowperpage} 
              onChange={hanf}
              >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
    </div>
  )
}

export default DataTable1