import React, { useEffect, useState } from 'react'

const IndiPatient = ({selected}) => {
    const[indiv,setIndiv]= useState([]);

    const fetchsome=async()=>{
        try {
            const res= await fetch(`https://dummyjson.com/products/${selected}`)
            const json= await res.json();
            console.log(json);
            setIndiv(json);
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchsome();
    },[selected])
  return (
    <div>IndiPatient
        {selected}
        {indiv.title}
        {indiv.rating}
        {indiv.description}

    </div>
  )
}

export default IndiPatient