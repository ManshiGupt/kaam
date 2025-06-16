import React from 'react'

const Practice = () => {
    const a=[3,4,5,7,8];
    const k=(i)=>{
        
        console.log(i.slice(0,2))
    }

  return (
    <div>
        {k(a)}
    </div>
  )
}

export default Practice