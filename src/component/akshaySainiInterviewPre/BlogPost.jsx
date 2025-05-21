import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Post from './Post'

const BlogPost = () => {
const [data,setData]= useState([])

    const fetchData=async()=>{
        const re= await axios.get("https://dummyjson.com/posts");
        setData(re.data.posts);
    }
    useEffect(() => {
    fetchData()
    
      
    }, [])
    
   
  return (
    <div>BlogPost
        <div className='flex flex-col gap-4 px-10'>
           {data.map((d,i)=>(
            <div key={i} className='bg-gray-300  rounded-lg  p-4'>
                <Post title= {d.title} body={d.body} tag={d.tags} likes={d.reactions.likes} dislikes={d.reactions.dislikes} views={d.views}/>
                {/* <h1 className='font-bold py-4'>  {d.title}</h1>
              <h1>  {d.body}</h1>
              <p className='text-blue-800 py-4'>{d.tags.join("# ")}</p>
             
             <div className='flex gap-4 py-4'>

              <p>{d.reactions.likes} |</p>
              <p>{d.reactions.dislikes} |</p>
              <h1 className='text-red-600'>{d.views}</h1>
              </div> */}
            </div>
           ))}
        </div>
    </div>
  )
}

export default BlogPost