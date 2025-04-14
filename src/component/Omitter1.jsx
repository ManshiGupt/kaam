import React, { useState } from 'react'

const Omitter1 = () => {
    const[sentance,setSentance]= useState("");
    const probitaed="manshi";
    console.log(sentance);
    const filterList= sentance.split(" ").filter((dara)=>dara.toLowerCase()!=probitaed)
    console.log(filterList);
  return (
    <div className='flex p-10 gap-10'>Omitter1
        <div>{filterList.map((d)=>(<>{d}</>))}</div>
        <input value={sentance} onChange={(e)=>setSentance(e.target.value)} placeholder='this'/>
    </div>
  )
}

export default Omitter1