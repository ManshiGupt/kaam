import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const StarRating = () => {
    // const[star,setStar]= useState([Array.from({length:5})])
    const[star,setStar]= useState([...Array(5)])
    const rating=3
  return (
    <div className='flex'>
        {star.map((item,i)=>(
            <div className='flex '>
               {i<rating && <h1><FaStar />  </h1> }
              { i>=rating && <h1><CiStar /></h1>}
            </div>
        ))}
    </div>
  )
}

export default StarRating