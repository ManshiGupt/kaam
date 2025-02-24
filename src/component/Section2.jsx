import React, { useEffect, useState } from 'react'

const Section2 = () => {
  const[skip,setSkip]=useState(0);
  useEffect(()=>{
    const handleskip=()=>{
      if(window.scrollY+window.innerHeight== document.body.scrollHeight){
        setSkip(prev=>prev+1);
      }

    }


    window.addEventListener("scroll",handleskip);
    return()=>window.removeEventListener("scroll",handleskip);

  },[])
  return (
    <div className='fixed'>
      <h1>jchcvg</h1>
      {skip}
    </div>
  )
}

export default Section2