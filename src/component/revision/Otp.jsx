import React, { useRef, useState } from "react";

const Otp = () => {
  const [data, setData] = useState(new Array(5).fill(""));
  const reff = useRef();
  const handle = (dd, i) => {
    if(isNaN(dd))return;
    console.log("ckj");
    const d = [...data];
    d[i] = dd.slice(-1);
    const newData = d[i];
    setData(d);
 reff.current.focus()
  };
  const h=(i)=>{
    reff.current.focus(i+1)
    
  }
  return (
    <div className="flex justify-center">
      {/* <input ref={reff} className=" border-2 border-blue-700 p-4 m-2 rounded-md"/>
      <button onClick={()=>h()}>hff</button> */}
      {data.map((item, i) => (
        // <div key={i} className=" border-2 border-black p-4 m-2 rounded-md">
        <input
          key={i}
          ref={reff}
          className=" border-2 border-blue-700 p-4 m-2 rounded-md"
          value={data[i]}
          onChange={(e) => handle(e.target.value, i)}
        />
        //   {i}
        // </div>
      ))}
    </div>
  );
};

export default Otp;
