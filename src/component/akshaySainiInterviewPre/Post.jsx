import React from 'react'

const Post = ({title,body,tags,likes,dislikes,views}) => {
  return (
    <div>
        <h1 className='font-bold py-4'>  {title}</h1>
              <h1>  {body}</h1>
              <p className='text-blue-800 py-4'>{tags}</p>
             
             <div className='flex gap-4 py-4'>

              <p>{likes} |</p>
              <p>{dislikes} |</p>
              <h1 className='text-red-600'>{views}</h1>
              </div>
    </div>
  )
}

export default Post