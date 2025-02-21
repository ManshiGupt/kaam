import React, { useEffect } from 'react'
import Button from './Button'

const Child = ({am, handlechange}) => {

    useEffect(() => {
     return(
        setTimeout(() => {
            handlechange((prev)=>prev-1);
        }, 3000)
     )
    }, [])

    
    
  return (
    <div className='p-20 flex gap-20'>Child
        {am}
        <button onClick={()=>handlechange(am)}>clock me</button>
        <Button lable="button me" disable="false" />
    </div>
  )
}

export default Child