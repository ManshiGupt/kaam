import React from 'react'

const Navbar1 = () => {
  return (
    <div className='flex justify-between p-4 border-y-2 border-gray-200'>
        <div className='flex gap-5'>
            <h1>icon</h1>
            <h1>Name of the File</h1>
        </div>
        <div className='flex gap-5'>
            <button>toggle</button>
            <h1>Auto Save</h1>
            <h1>icon</h1>
        </div>

    </div>
  )
}

export default Navbar1