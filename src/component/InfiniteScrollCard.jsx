import React from 'react'

const InfiniteScrollCard = ({data}) => {
  return (
    <div>
        <div className='p-6 border-2 border-black'>
            {data.title}
        </div>
    </div>
  )
}

export default InfiniteScrollCard