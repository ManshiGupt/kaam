import React, { useState } from "react";
import AccordinCard from "./AccordinCard";

const Accordian = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[selectedIndex,setSelectedIndex]= useState(null);
  const accoData = [
    {
      title: "dhndj1",
      subTitle: "djgffgfj",
    },
    {
      title: "dhndj2",
      subTitle: "djgffgfj",
    },
    {
      title: "dhndj3",
      subTitle: "djgffgfj",
    },
  ];
  return (
    <div>
      <div>
        {accoData.map((data, i) => (
          <AccordinCard
            key={i}
            title={data.title}
            subTitle={data.subTitle}
            isOpen={i===selectedIndex }
            setIsOpen={()=>{
                i===selectedIndex? setSelectedIndex(null):setSelectedIndex(i);
            }}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Accordian;
