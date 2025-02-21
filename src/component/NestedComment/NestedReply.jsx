import React from 'react'

const NestedReply = ({data,i}) => {
  console.log(data);
  return (
    <div>
        <div key={i} className='border-solid border-2 border-black p-4'>
        <img
            className="w-16 p-2 rounded-full"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
            alt="user"
          />
            <h3>{data.username}</h3>
            <h3 className='py-2'>{data.comment}</h3>                         
        </div>
      {data?.replies && <NestedReply data={data.replies}/>}
    </div>
  )
}

export default NestedReply