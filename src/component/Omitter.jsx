import React, { useState } from 'react'

const Omitter = () => {
    const[user,setUser]= useState("");
    const[show,setShow]= useState(false);
    const[output,setOutput]=useState([]);
    const[output1,setOutput1]=useState([]);
    const omittedWord=["a","the","very","is"];
    // const handleChange=()=>{
    //     setUser
    // }
    // const handle=()=>{
    //     // setUser(e.target.value);
    //     let userWord= user.split(" ");
    //     userWord.map((w)=>{
    //        if(!omittedWord.includes(w)){
    //         setOutput([...output,...w]);
    //        }
    //     })
    // }


    // const filterSentence=(user)=>{

    //   return user.split(" ").filter((f)=>!omittedWord.includes(f)).join(" ")
    // }
    const filterSentence=(user)=>{
      
    
       return user.split(" ").filter((f)=>!omittedWord.includes(f)).join(" ")
      // return( user)
    }
  return (
    <div>Omitter
    <input value={user} onChange={(e)=>setUser(e.target.value)}/>
    {/* <input value={user} onChange={(e)=>handle(e)}/> */}
    <button onClick={()=>setShow(prev=>!prev)} className='border-4 border-red-800 bg-slate-600'>show all</button>
    <div className='flex gap-20'>
    {/* <h1>output:{filterSentence(user)}</h1> */}

    {show?<h1>{user}</h1>:<h1>{filterSentence(user)}</h1>}


    {/* <h1>output:{output.filter(handle)}</h1> */}
    {/* <h1>output1:{output1}</h1>
    <h1>userinput:{!show && user}</h1> */}
    </div>
    </div>
  )
}

export default Omitter