import React, { useState } from 'react'

const ContactForm = () => {
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[msg,setMsg]= useState("");
    const[output,setOutput]= useState([]);
    const handleClick=()=>{
        if(name==""|| email=="" || msg==""){
            alert("ettre")
        }
        setOutput([name,email,msg])
    }
  return (
    <div>
        <div>
            <input placeholder='' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input placeholder='' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder='' type='text' value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            <button onClick={handleClick}>submit</button>
            {output.map((f)=>(
                <div>
                    {f}
                    </div>
            ))}
        </div>
    </div>
  )
}

export default ContactForm