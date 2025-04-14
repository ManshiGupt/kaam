import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Conditional = () => {
    const [data,setData]= useState([]);
    const[currentPage,setCurrentPage]= useState(1);
    const[limit,setLimit]= useState(10)
    const fetchData=async()=>{
        try {
            const resp= await axios.get(`https://app.vedicpandit.in/get-pandits-by-poojaId?poojaId=668e7e9a23fea6f8abfcae47&latitudeUser=28.7192&longitudeUser=77.1735&currentPage=${currentPage}&limit=${limit}`)
            console.log(resp);
            const resDta= resp.data.data
            // setData(resDta)

            setData(prev=>[...prev,...resDta])
            
        } catch (error) {
            console.log("nota")
        }
    }
    useEffect(()=>{
       fetchData()
    },[currentPage])

    const handleso=()=>{
        setCurrentPage(prev=>prev+1)
        
    }
  return (
    <div>Conditional
        {data.map((data,i)=>(
            <div key={i}>
                {data.name}
            </div>
        ))}
       { <button className='p-4 rounded-lg mx-40 bg-red-700' onClick={()=>handleso()}>next</button>}
    </div>
  )
}

export default Conditional