import React from 'react'

const StateSome = ({a}) => {
    const[upvotes,setUpvotes]= useState(0);
    const[downvotes,setDownvotes]= useState(0);
  return (
    <div >
        {a.map((d)=>(
        <div className='h-60 w-40 border-4 border-black flex flex-row gap-20'>
            {d}
            <button on>{upvotes}</button>
            <button>{downvotes}</button>
            </div>
    ))}</div>
  )
}

export default StateSome