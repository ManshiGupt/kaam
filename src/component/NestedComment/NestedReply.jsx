import React from 'react'

const NestedReply = ({data}) => {
  return (
    <div>
        <div className='border-solid border-2 border-black p-4'>
            <h3>{data.username}</h3>
            <h3 className='py-2'>{data.comment}</h3>
        </div>
      {data?.replies && <NestedReply data={data.replies}/>}
    </div>
  )
}

export default NestedReply