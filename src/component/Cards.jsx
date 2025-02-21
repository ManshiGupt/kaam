import React from 'react'
// import UseDataCards from '../utils/UseDataCards'
import useDataApi from '../utils/useDataApi'
// import Grocery from './Grocery';
import { lazy } from 'react';

const Cards = (props) => {

    const{product , loading, error}= useDataApi('https://dummyjson.com/products');
    console.log("dbjhdddgdh",product);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;


  return (
    <div>
        Cards
      
       {product.length>0 && product.map((data)=>(
        <div className='p-10 border-2 border-red-700 m-10 mx-10 relative'>
       
            {data.title}
            {console.log(data)}
        </div>
       ))}
    </div>
  )
}


const hoc=()=>{
  return(props)=>{
    return(
      <div>
        <h1>HOC</h1>
        <Cards {...props}/>
      </div>
    )
  }
}
export default Cards







// import React from 'react'

// const Cards = () => {

//     const{product, error , loading}
//   return (
//     <div>Cards

//     </div>
//   )
// }

// export default Cards