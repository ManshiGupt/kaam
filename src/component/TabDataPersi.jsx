import React, { createContext, useContext, useState } from "react";

import About from "./About";
import Contactus from "./Contactus";
import Home from "./Home";


export const dataContext = createContext('');

const TabDataPersi = () => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState("lo");
  const tabs = ["home", "about", "contactus"];

  

  const handlething = () => {};
  return (
    <dataContext.Provider value={{data,setData}}>
    <div className="">
      {index}
      {data}
      <div className="flex gap-4 justify-center">
        {tabs.map((data, i) => (
          <div key={i} onClick={() => setIndex(i)}>
            {data}
          </div>
        ))}
      </div>
      <div className="flex justify-center py-4">
        {index == 0 && <Home />}
        {index == 1 && <About />}
        {index == 2 && <Contactus />}
      </div>
    </div>
    </dataContext.Provider>
  );
};

export default TabDataPersi;


// export const useContextData= useContext(dataContext)
// export  const useContextData= useContext(dataContext)
//  export const funTouseContext=()=>{

//   return useContextData;
// }