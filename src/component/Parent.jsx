// import React, { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//   const [am, setAm] = useState(0);
//   const handlechange = () => {
//     setAm((prev)=>prev + 1);
//   };

//   useEffect(() => {
   
//     const t=setTimeout(() => {
//         setAm((prev)=>prev - 1);
//     }, 3000);
//     return t()
   
//   }, [am])
  

//   return (
//     <div>
//       Parent
//       {am}
//       <button className="p-20" onClick={handlechange}>click me</button>
//       {/* <Child am={am}  handlechange={handlechange}/> */}
//     </div>
//   );
// };

// export default Parent;
import React, { useContext } from 'react'
import {languageContext} from "../App"

const Parent = () => {
  const language= useContext(languageContext);
  const k=[   
    { "en": "Sanatan Puja",
    "hi": "सनातन पूजा"}
           
        
]

  return (
    <div>Parent  
      <h1>{language}</h1>
      <l1>
        {k.map((ks)=>(
          <div>{language==="English"?ks.en: ks.hi}</div>
        ))}
      </l1>
    </div>
  )
}

export default Parent