import React, { useEffect, useState } from 'react'

const Card = ({data}) => {
    const [loadMore,setLoadMore]= useState(false);

    useEffect(()=>{

        const scrollhandle=()=>{
            if(window.innerHeight+window.scrollY>= document.body.scrollHeight){
                setLoadMore(true);
            }
        }
        window.addEventListener("scroll",scrollhandle);

        return()=>{
            window.removeEventListener("scroll", scrollhandle)
        }

    },[])
  return (
   
    <div className='p-10 border-2 border-black bg-red-700'>
 {loadMore?"true":"false"}
         {data}
    </div>
  )
}

export default Card