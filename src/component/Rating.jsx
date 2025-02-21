// import React, { useState } from "react";

// const Rating = () => {
//   const[count, setCount]= useState(0);
//   const b = [1, 2, 3, 4,5];
//   const handleClick=(i)=>{
//     alert("ghegd");
//     setCount(i);
//     console.log("ffrf");
//   }
//   return (
//     <div>
//       <h1>Rating</h1>
//       <h1>{count}</h1>
      

//       <div className="flex gap-40 justify-center">
//         {b.map((data, i) => (
//           <div key={i} className="">
//             <button className="`$count?bg-stone-600: bg-white` border-2 border-gray-700  p-10 rounded-xl :" onClick={()=>handleClick(i)}>{data}</button>
            
//           </div>
//         ))}
        
//       </div>
//       {console.log("ffrf")}
//     </div>
//   );
// };

// export default Rating;
import React, { useState } from "react";

const Rating = () => {
  const[count, setCount]= useState(-1);
 
  const b = [1, 2, 3, 4,5];
  const handleClick=(i)=>{
    alert("ghegd");
    setCount(i);
    console.log("ffrf");
  }

  
  return (
    <div>
      <h1>Rating</h1>
      <h1>{count}</h1>
      

      <div className="flex gap-40 justify-center">
        {b.map((data, i) => (
          <div key={i} className="">
            <button className={`${count >= i?'bg-stone-600':' bg-white'} border-2 border-gray-700  p-10 rounded-xl`} onClick={()=>handleClick(i)}>{data}</button>
            
          </div>
        ))}
        
      </div>
      {console.log("ffrf")}
    </div>
  );
};

export default Rating;
