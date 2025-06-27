import React, { useEffect, useRef, useState } from 'react'

const UseRefBox1 = () => {
    const[showModal,setShowModal]= useState(false)
    const boxRef= useRef()
const handleSome=()=>{
    setShowModal(true)
}
useEffect(()=>{
    const handleMouse=(event)=>{
        if(boxRef.current && !boxRef.current.contains(event.target) ){
            setShowModal(false)
        }
    }

  if (showModal){
    document.addEventListener("mousedown",handleMouse)
  }
   
    return ()=>{document.removeEventListener("mousedown",handleMouse)}

},[showModal])

  return (
    <div>UseRefBox1
     <button onClick={()=>handleSome()}>hoii</button>
     {showModal && <h1 ref={boxRef}>manshi</h1>}
    </div>
  )
}

export default UseRefBox1