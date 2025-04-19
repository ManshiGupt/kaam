import React, { useState } from 'react'

const Corousal = () => {
    const[currentPage,setCurrentPage]= useState(0);
    const limit=3;
    const imagsg= [
        "https://img.faballey.com/images/Product/XLH05420Z/3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20240211/3NlV/65c8cf2116fd2c6e6aef4b08/-473Wx593H-467063026-black-MODEL2.jpg",
        "https://bhasinbrothers.com/cdn/shop/files/IMG_3228.jpg?v=1742576625&width=1080",
        "https://staticm247.kalkifashion.com/media/catalog/product/b/e/beige_bridal_lehenga_set-sg183857_3_.jpg?w=500"
    ]

    const handlePrev=()=>{
        setCurrentPage(prev=>prev-1);
    }

    const handleNext=()=>{
        console.log("kdid",imagsg.length)
        setCurrentPage(prev=>prev>=imagsg.length?imagsg.length-1:prev+1);
    }
  return (
    <div>
{currentPage}
        {/* <ul className='flex gap-2 relative justify-center'>
        {imagsg.map((data,i)=>(
            <div className='h-36 w-36' key={i}>

                <img src={data} className='max-h-36'/>
            </div>
        ))}
        <button className='absolute right-5 top-10'>next</button>
        <button className='absolute left-5 top-10'>prev</button>
        </ul> */}
        
            <div className='absolute h-64 w-64 flex justify-center'>
                <img src={imagsg[currentPage]} />
                <button className='absolute right-5 top-10' onClick={handleNext}>next</button>
                <button className='absolute left-5 top-10' onClick={handlePrev}>prev</button>
            </div>
       
    </div>
  )
}

export default Corousal