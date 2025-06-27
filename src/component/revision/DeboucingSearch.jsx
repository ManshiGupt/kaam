import React, { useEffect, useState } from 'react'

const DeboucingSearch = () => {
    const[searchText,setSearchText]= useState("")

    useEffect(()=>{
        if(!searchText.trim()) return;

        const s= setTimeout(()=>{
            ftechApi()
        },2000)
        return ()=>clearTimeout(s)

    },[searchText])

    const ftechApi=()=>{
        console.log("manshi")
    }
  return (
    <div>
        <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='border-2 border-black p-4'/>
    </div>
  )
}

export default DeboucingSearch