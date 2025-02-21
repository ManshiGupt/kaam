import React from 'react'

const Button = ({lable, disable}) => {
  return (
    <div>
        
        <button>{lable}</button>
        {disable}
    </div>
  )
}

export default Button

//{ label, onClick, styleType, disabled }


