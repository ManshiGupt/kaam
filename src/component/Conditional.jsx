import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Conditional1 from './Conditional1';

const Conditional = () => {
    const [data,setData]= useState([]);
    const[currentPage,setCurrentPage]= useState(1);
    const[limit,setLimit]= useState(10);
    const[hasMore,setHasMore]= useState(true);
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

    
  return (
    <div>Conditional
       
      <Conditional1 data={data} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Conditional