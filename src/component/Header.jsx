import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-4  w-full'>
    <div className='flex gap-8 '>
        <input type='text' className='border-2 border-gray-300 h-10 rounded-lg bg-gray-100 w-96' placeholder='  Search..'/>
        <h1>Row</h1>
        <h1>Column</h1>
        <h1>Filter</h1>
        <h1>Sort</h1>
    </div>
    <div className='flex gap-5'>
       
       <div> <button className='bg-black text-white px-3 py-2 rounded-md'>Enrich</button></div>
       <h1>icon</h1>
        <h1>icon</h1>
        <div> <button className='bg-black text-white px-3 py-2 rounded-md'>E</button></div>
    </div>

</div>
  )
}

export default Header