import React, { useState } from 'react'
import NestedComment from './NestedComment';
const CheckboxesData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];


const SearchBar100 = () => {
  const[data,setData]= useState([])
  
  return (
    <div>
      <h1>nested helc</h1>

      
          {/* {item.label} */}
          <NestedComment data={CheckboxesData}/>
         
        

    </div>
  )
}

export default SearchBar100

// {CheckboxesData.map((item,i)=>(
//   <div key={item.key}>
//     {item.label}
//     {/* {item.children.map((item,i)=>(
//       <div>
//         {item.label}
//         </div>
//     ))} */}
//     {item.children && <SearchBar100/>}
//   </div>
// ))}



