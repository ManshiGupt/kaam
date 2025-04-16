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
   <form action={handle}>
        <div>
        <label>name</label>
        <input value={name} placeholder='name'/>
        </div>
        <div>
        <label>email</label>
        <input value={email} placeholder='email' type='text'/>
        </div>
        <div>
        <label>number</label>
        <input value={number} placeholder='number'/>
        </div>
       <input type='submit'/>
   </form>
  )
}

export default FormPatient1