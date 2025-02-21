import React, { useState } from 'react'

const ImageSlider = () => {
    const[currentInsex,setCurrentInsex]= useState(0);
    
    const image=[
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
        
    ]
    const handlePrevious=()=>{
        setCurrentInsex(prev=>(prev>0?prev-1:0))
    }
    const handleNext=()=>{
        setCurrentInsex(prev=>prev>image.length?prev%10:prev+1)
    }
  return (
    <div>
        {/* {image.map((data,i)=>(
            <div className='p-20'>
                
                <img src={data} className='h-20 w-20 '/>
            </div>
        ))} */}
        <div className='flex gap-20 px-10'>
            
       {currentInsex}
        <button onClick={()=>handlePrevious()}>^</button>
        <img src={image[currentInsex]} className='h-20 w-20 '/>
        <button onClick={()=>handleNext()}>^</button>
        </div>
        
    </div>
  )
}

export default ImageSlider