import React from 'react'

const AccordinCard = ({title,subTitle, isOpen, setIsOpen}) => {
  return (
    <div>
        <div className='flex' onClick={()=>setIsOpen(prev=>!prev)}>
            <h1>{title}</h1> 
          <span>^</span>
        </div>
        <h3>{isOpen && subTitle}</h3>
    </div>
  )
}

export default AccordinCard