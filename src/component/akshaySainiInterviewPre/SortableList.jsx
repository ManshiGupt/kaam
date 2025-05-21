import React, { useCallback, useState } from "react";

const SortableList = () => {
  const [lisst, setLisst] = useState(["March", "Jan", "Feb", "Dec"]);
  const [data, setData] = useState("");
  const handleitem = () => {
    setLisst((prev) => [...prev, data]);
    setData("");
  };

  const handlesome= useCallback(()=>{
    console.log(lisst);
    const newLisst = [...lisst].sort();
   
    setLisst(newLisst);
    console.log("newLisst");
    console.log(newLisst);

  },[lisst])


  const handleDes=useCallback(()=>{
    const newLisst = [...lisst].sort((a,b)=>b.localeCompare(a));
   
    setLisst(newLisst);
  },[lisst])
  return (
    <div>
      SortableList
      <div>
        <div className="flex gap-10 p-20">
          <input
            className="border-2 border-black p-3"
            onChange={(e) => setData(e.target.value)}
            placeholder="itemmmm"
            value={data}
          />
          <button
            className="border-2 border-black p-3"
            onClick={() => handleitem()}
          >
            Add item
          </button>
        </div>

        <div>
          <button
            className="border-2 border-black p-3"
            onClick={() => handlesome()}
          >
            accend
          </button>
          <button
            className="border-2 border-black p-3"
            onClick={() => handleDes()}
          >
            descc
          </button>
        </div>
        <div>
          {lisst.map((item, i) => (
            <div>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortableList;
