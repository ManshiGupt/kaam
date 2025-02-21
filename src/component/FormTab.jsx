import React, { useState } from 'react'
import { Section1 } from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import { useFormContext } from '../context/FormDataContext';

const FormTab = () => {
    
    // const{formData, setFormData}= useFormContext();
    // console.log("jhdj",formData);
    // console.log("jhdj",setFormData);
    const[isopen,setIsOpen]=useState(false);
    const[isopen2,setIsOpen2]=useState(false);

    const[isopen3,setIsOpen3]=useState(false);

    const tabs=[{
        name:"ram",
        id:1
    },{
        name:"shyaam",
        id:2
    },{
        name:"sita",
        id:3
    }];

    const handleClick=(id)=>{
        console.log(id);
        if(id==1){
            setIsOpen(true);
            setIsOpen2(false);
            setIsOpen3(false);

        }else if(id==2){
            setIsOpen2(true);
            setIsOpen(false);
            setIsOpen3(false);
        
        }else{
            setIsOpen3(true);
            setIsOpen(false);
            setIsOpen2(false);
        }

    }
    const handleme=()=>{
        setFormData()
    }
  return (
    <div className=' p-40 '>
        {isopen}
        <div className='flex  gap-20'>
        {/* <h1 onClick={()=>setIsOpen(true)}>Ram</h1>
        <h1>shyaam</h1>
        <h1>sita</h1> */}
        {tabs.map((data)=>(
            <div >
                   <button onClick={()=>handleClick(data.id)}> {data.name}</button>
            </div>
        ))}
        </div>
        <button className='p-10' onClick={()=>handleme()}>jdhufguyfg</button>
       
        <div className='pt-10'>
        {isopen && <Section1 setIsOpen2={setIsOpen2} setIsOpen={setIsOpen}/>}
        {isopen2 && <Section2/>}
        {isopen3 && <Section3/>}
        </div>
        
    </div>
  )
}

export default FormTab