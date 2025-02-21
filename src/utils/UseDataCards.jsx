import React, { useState } from 'react'

const UseDataCards = (url) => {

const[product, setProduct]= useState([]);
const[error,setError]= useState(null);
const[loading,setLoading]= useState(true);

useEffect(() => {
 
    fetchData();
}, [url])


const fetchData= async()=>{
   

     try {
        const res= await axios.get('https://dummyjson.com/products');
        const cardRes= res.data;
        if(cardRes && cardRes.length>0){
           console.log(cardRes);
           setProduct(cardRes);
        }else{
           console.log("no Data found");
        }
        
     } catch (error) {
        console.log("Error while fetching the data");
        setError(error);
     }finally{
        setLoading(false);
     }

    }


  return{
        product, error, loading
  }
}

export default UseDataCards