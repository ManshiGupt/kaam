import React from 'react'

const TosterChild = ({ message, type, duration }) => {
  return (
    <div>
        <div className='bg-red-700 p-4'>
            {message}
        </div>
    </div>
  )
}

export default TosterChild