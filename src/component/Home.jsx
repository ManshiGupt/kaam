import React, { useState } from 'react'

const Home = () => {
    const[ram,setRam]=useState("");
  return (
    <div>Home
        <input value={ram} onChange={(e)=>setRam(e.target.value)} className='border-2 border-black bg-yellow-300 '/>
    </div>
  )
}

export default Home