import React from 'react'
import Constant from '../../utils/constant'
import { data } from 'react-router';
import Card from './Card';

const Body = () => {

    const {i}= Constant();
     console.log("dkd",i);

  return (
    <div>Body
       {i.map((data,i)=>(
           <div key={i}>
           <Card data={data.info.name}/>
           </div>
        ))}
    </div>
  )
}

export default Body