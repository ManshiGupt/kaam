import React, { useState } from 'react'
import SlideShow from './SlideShow';

const Slide = () => {
// const[d,setD]= useState(0);
const[title,setTitle]=useState("i am only one");
const[subTitle,setsubTitle]=useState("i am 1");
    const handleNext=()=>{
        // setD(prev=>prev+1);
        setTitle("i am only one");
        setsubTitle("i am 1");
    }
    const handleNext2=()=>{
        // setD(prev=>prev+1);
        setTitle("i am only 2");
        setsubTitle("i am 2");
    }
    const handleNext3=()=>{
        // setD(prev=>prev+1);
        setTitle("i am only 3");
        setsubTitle("i am 3");
    }
  return (
    <div className='FLEX GAP-10 p-2'>
       
        <button onClick={handleNext} className='p-4 bg-black text-white'>about</button>
        <button onClick={handleNext2} className='p-4 bg-black text-white'>HOME</button>
        <button onClick={handleNext3} className='p-4 bg-black text-white'>CONTACT US</button>
      <SlideShow title={title} subTitle={subTitle}/>
    </div>
  )
}

export default Slide