import React, { useState } from 'react'

const FormPatient1 = () => {
    const[name,setName]= useState("");
    const [email,setEmail]= useState("");
    const[number,setNumber]= useState("");
    const[isError,setIsError]= useState(false);
    const handle=()=>{
        setEmail("");
        setName("");
        setNumber("");
        // const regu= new RegExp(`{}`)
        console.log(name.length );
        if(name.length>3){

            setIsError(true)
        }
    }

  return (
    <div>FormPatient1
        <div className='flex flex-col gap-10'>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='mansjhddh'/>
            {isError && <p className='text-red-600'>this need to be fixed</p>}
            {/* <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='mansjhddh'/>
            <input value={number} onChange={(e)=>setNumber(e.target.value)} placeholder='mansjhddh'/> */}
        </div>
        <button className='p-10' onClick={()=>handle()}>sumbit</button>
    </div>
  )
}

export default FormPatient1