import React, { useEffect, useState } from 'react'

import InfiniteScrollCard from './InfiniteScrollCard';

const InfiniteScroll = () => {
    const[data,setData]= useState([]);
    const[loading,setloading]= useState(false);
    const[skip,setSkip]= useState(0);

    const fetchData=async()=>{
        try {
            setloading(true);
            setSkip((prev)=>(prev+1)%10);
            const res=  await fetch(`https://dummyjson.com/products/20`);
            const dataa= await res.json();
            setData((prev)=>[...prev, dataa.products]);
           console.log("hxhgc",skip);
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

       return()=>window.removeEventListener("scroll",handlesome);
    },[])

    const handlesome=()=>{
        if(window.scrollY+window.innerHeight>=document.body.scrollHeight){
            // setSkip((prev)=>(prev+1)%10);
            fetchData();
            // alert("lmk");
        }
       
    }

    
  return (
    <div>
        <div className='fixed'>{skip}</div>
        {data.map((data)=>(
            <InfiniteScrollCard data={data}/>
        ))}
        {loading && <h3>Loading....</h3>}
        {/* {[...Array(5).keys()].map((k)=>(
            <div key={k}>
                item{k+1}
                </div>
        ))} */}
        
    </div>
  )
}

export default InfiniteScroll
// import React, { useEffect, useState } from 'react'
// import InfiniteScrollCard from './InfiniteScrollCard';

// function InfiniteScroll() {
// const[data,setData]= useState([]);
// const[loading,setLoading]= useState(false);
// const[skip,setSkip]= useState(0);
// const fetchData=async()=>{
//     try {
//         const res= await fetch("https://dummyjson.com/products");
//         const json= res.json();
//         setData(json);
         
//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(()=>{
//    fetchData();
// },[])
//   return (
//     <div>
//        {data.map((data)=>(
//             <InfiniteScrollCard data={data}/>
//         ))}
//     </div>
//   )
// }

// export default InfiniteScroll
