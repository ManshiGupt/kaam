import React, { useEffect, useState } from 'react'

const Filter = () => {
    const[data,setData]= useState([]);
    const[selectedCategory,setSelectedCategory]= useState("");

    const categories=["all","beauty","fragrances"];
    const fetchData=async()=>{
        const res= await fetch("https://dummyjson.com/products");
        const json= await res.json();
        setData(json.products);
        console.log(json.products) ;
    }

    useEffect(()=>{
        fetchData();
    },[])

    const filteredData= selectedCategory==="all"? data: data.filter((data)=>data.category=== selectedCategory)
  return (
    <div>Filter
        <div className='flex gap-20'>
            
            {categories.map((data)=>(
                <div className='text-green-700 cursor-pointer' onClick={()=>setSelectedCategory(data)}>
                    {data}
                    </div>
            ))}
        </div>
        {filteredData.map((da)=>(
            <div key={da.id}>
                {da.title}
                {da.category}
                </div>
        ))}
    </div>
  )
}

export default Filter