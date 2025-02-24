import React from 'react'

const NestedReply = ({data}) => {
  console.log("lo",data);
  return (
    <div>
      {data.map((data,i)=>(
        <div key={i} className='border-solid border-l-2 border-black p-2 px-2'>
        <img
            className="w-16 p-2 rounded-full"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png"
            alt="user"
          />
            <h3>{data.username}</h3>
            <h3 className='py-2'>{data.comment}</h3>     
            {data?.replies && <NestedReply data={data.replies}/>}                    
        </div>
     
      ))}
       
        
    </div>
  )
}

export default NestedReply