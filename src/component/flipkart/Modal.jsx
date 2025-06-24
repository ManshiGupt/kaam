import React from 'react'

const Modal = ({setShowModal}) => {
  return (
    <div className='absolute top-56 left-40 border-2 border-black p-10 max-w-96 max-h-screen bg-gray-700 text-white rounded-md'>
        <h1>
            Event Date
        </h1>
        <input className='border-2 border-black' type='text'/>
         <h1>
            Event Type
        </h1>
         <h1>
            Event Duration
        </h1>
        <select >
            <option>task</option>
            <option>holiday</option>
        </select>
        <div className='flex justify-around'>
            <button   className="border-2 border-white rounded-md my-10 px-4" onClick={()=>setShowModal(prev=>!prev)}>save</button>
            <button   className="border-2 border-white rounded-md my-10 px-4">cancel</button>
        </div>
    </div>
  )
}

export default Modal