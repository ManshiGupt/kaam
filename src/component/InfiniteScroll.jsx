import React, { useEffect, useState } from 'react'
import InfiniteScrollCard from './InfiniteScrollCard';

const InfiniteScroll = () => {
    const[data,setData]= useState([]);
    const[loading,setloading]= useState(false);

    const fetchData=async()=>{
        try {
            setloading(true);
            const res= await fetch('https://dummyjson.com/products');
            const dataa= await res.json();
            setData(dataa.products);
           
            console.log(dataa.products);
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false);
        }
    }

    useEffect(()=>{
       fetchData();
       window.addEventListener("scroll",handlesome);

       return()=>window.addEventListener("scroll",handlesome);
    },[])

    const handlesome=()=>{
        if(window.scrollY+window.innerHeight>=document.body.scrollHeight){
            setData([])
        }
       
    }

    
  return (
    <div>
        {data.map((data)=>(
            <InfiniteScrollCard data={data}/>
        ))}
        {[...Array(5).keys()].map((k)=>(
            <div key={k}>
                item{k+1}
                </div>
        ))}
        
    </div>
  )
}

export default InfiniteScroll