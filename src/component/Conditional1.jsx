import React from 'react'

const Conditional1 = ({data,setCurrentPage}) => {
    const handleso=()=>{
        setCurrentPage(prev=>prev+1)
        
    }
  return (
    <div>Conditional1
         {data.map((data,i)=>(
            <div key={i}>
                {data.name}
            </div>
        ))}
        { <button className='p-4 rounded-lg mx-40 bg-red-700' onClick={()=>handleso()}>next</button>}
    </div>
  )
}

export default Conditional1