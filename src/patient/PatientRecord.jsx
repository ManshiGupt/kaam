import React, { useState } from "react";
import TableRecord from "./TableRecord";

const PatientRecord = () => {
  const [showTable, setShowTable] = useState(false);
  const [data, setData] = useState(0);
  const [error, setError] = useState(false);
  
const pat = [
  {
    name:"HTML",
    type:"Frontend"
  },
  {
    name:"CSS",
    type:"Frontend"
  },
  {
    name:"JS",
    type:"Frontend"
  },
  {
    name:"React",
    type:"Frontend"
  },
  {
    name:"Java",
    type:"Backend"
  },
  {
    name:"Node",
    type:"Backend"
  },
]
  const handledropDown = (e) => {
    setData(e.target.value);
    setShowTable(true);
    const{name}= data;
    console.log(name);
  };
  const handleShow = () => {
    if (data == 0) {
      setError(true);
    } else {
      setShowTable((prev) => !prev);
    }
  };

  // const selected= pat.find((f)=>f.id===parseInt(data))
  return (
    <div>
      PatientRecord
      <label for="cars">Choose a car:</label>
      <select name="cars" id="cars" onChange={(e) => handledropDown(e)}>
        {pat.map((data, i) => (
          <option value={i}>{data.name}</option>
        ))}
      </select>
      {data}
      {error && <p className="text-red-700">please eter the sected patient</p>}
      <button onClick={() => handleShow()}>show</button>
     {/* {pat(data)} */}
      {/* {showTable && <TableRecord data={data} />} */}
    </div>
  );
};

export default PatientRecord;
// const pat = [
//   {
//     id: 1,
//     name: "manshi",
//     dob: "2",
//     height: "7",
//     detail: [
//       {
//         _id: "3",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "2",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "1",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "sumt",
//     dob: "2",
//     height: "7",
//     detail: [
//       {
//         _id: "3",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "2",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "1",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "anshi",
//     dob: "2",
//     height: "7",
//     detail: [
//       {
//         _id: "3",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "2",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//       {
//         _id: "1",
//         date: "9",
//         Diagnosis: "ks",
//         weigth: "djd",
//         doctor: "ma",
//       },
//     ],
//   },
// ];