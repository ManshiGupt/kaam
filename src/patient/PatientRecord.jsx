import React, { useEffect, useState } from "react";
import { funtifetch } from "../../services/getapithat";
import IndiPatient from "./IndiPatient";

const PatientRecord = () => {
  const [data, setData] = useState([]);
  const[selected,setselected]= useState(1)

  const fetchData = async () => {
    const res = await funtifetch();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      PatientRecord
      <div className="flex gap-20 p-4">
      <select value={selected} onChange={(e)=>setselected(e.target.value)}>
        {data.map((dat,i) => (
          <option value={dat.id}>{dat.title} </option>
        ))}
      </select>
      
      <button>serach</button>
      </div>
      dk
      {selected}
      <IndiPatient selected={selected}/>
    </div>
  );
};

export default PatientRecord;
