import React, { useState } from 'react'
import { Link } from "react-router";
import { useFormContext } from '../context/FormDataContext';

export const Section1 = ({setIsOpen2,setIsOpen}) => {
    const[fname,setFname]= useState("");
    const[lname,setLname]= useState("");
    const[age,setAge]= useState("");
    const{formData,setFormData}= useFormContext();

    const handleNext=()=>{
        setIsOpen2(true);
        setIsOpen(false);
        // setFormData();
        console.log(formData);
    }
  return (
    <div>
        <div className='flex flex-col gap-4'>
            {/* {formData} */}
            <label>first name</label>
            <input value={fname} placeholder='enter name' onChange={(e)=>setFname(e.target.value)}/>
            <label>Last name</label>
            <input value={lname} placeholder='enter lst' onChange={(e)=>setLname(e.target.value)}/>
            <label>age</label>
            <input value={formData} placeholder='enter age' onChange={(e)=>setFormData(e.target.value)}/>
            <button onClick={()=>handleNext()}>next</button>
            {/* <Link to='/Section2'>next</Link> */}
           
        </div>
    </div>
  )
}
