import React, { useRef, useState } from 'react'

const Otp = () => {
    const[data,setData] = useState("");
    const[data2,setData2]= useState("");
    const[isNext,setIsNext]= useState(false);
    const[increseIndex,setIncreseIndex]= useState(0);
   
    const optDigitCount= 5
    const[input,setInput]= useState([...Array(optDigitCount)]);
    const refu= useRef([])

    const handlesome=(valuee,i)=>{
       if(!isNaN(valuee)){

        const newValue= valuee.trim();
        const newArray= [...input];
        console.log("newArray",isNaN(valuee));
        newArray[i]= newValue.slice(-1);
        setInput(newArray)
        console.log("newArray",newArray, i, data);
        refu.current.focus();
       }
     
    }
  return (
    <div>Otp
        <div className='px-40'>
            {/* <input placeholder='_' value={data} onChange={(e)=>handlesome(e.target.value)} className='border-2 border-black '/>
          { isNext && <input placeholder='_' value={data2} onChange={(e)=>handlesome(e.target.value)} className='border-2 border-black '/>} */}
          
          <div className='flex gap-2'>
          {input.map((data,i)=>(
            <div>
                <input key={i} placeholder='_' 
                ref={(refu)=>refu}
                     type='text'
                    value={input[i]} 
                    onChange={(e)=>handlesome(e.target.value,i)} className='border-2 border-black focus:bg-slate-300' onFocus={()=>setIncreseIndex(prev=>prev+1)}/>
                </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Otp