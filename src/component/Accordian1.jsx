import React, { useState } from "react";
import Accordian2 from "./Accordian2";

const Accordian1 = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const k = ["manshi0", "anushka1", "ram2", "manshiiii3"];
  const l = ["gupta", "singh", "tomar", "rai"];
  const handleClick = (i) => {
    setOpen((prev) => !prev);
    setIndex(i);
    console.log("handleClick",index)
  };

  return (
    <div>
      {index}
      {k.map((data, i) => (
        <div key={i}  onClick={() => handleClick(i)}>
          <div className="flex gap-6 p-4 bg-gray-700 text-white">
            {data}
            <button className="">
              *
            </button>
          </div>
          {i==index && <Accordian2 l={l} i={i} />}
        </div>
      ))}
    </div>
  );
};

export default Accordian1;
