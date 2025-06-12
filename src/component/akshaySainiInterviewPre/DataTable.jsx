import axios from "axios";
import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(3);
  const [limit, setLimit] = useState(5);
  const [start, setStart] = useState(1);
  const EKDMTOTAL = 15;

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=15");
    console.log(res.data);
    setData(res?.data?.products);
  };
  const hanf = (e) => {
    setLimit(e.target.value);
    setTotalPage(EKDMTOTAL / limit);
    setStart(1);
  };
  const handPrev = () => {
    setLimit((prev) => prev - 5);
    setCurrentPage((prev) => prev - 1);
    setStart((prev) => prev - 5);
  };
  const handNext = () => {
    setStart(limit);
    setLimit((prev) => prev + prev);
    setCurrentPage((prev) => prev + 1);
   
  };
  // const filterData = data.filter((item, i) => i < limit);
  const filterData = data.filter((item, i) =>{ 
    
    console.log("start",start)
    console.log("item.id",item.id)
    console.log("limit",limit)
    console.log("start> item.id < limit",start<= item.id && item.id <= limit)
    return start<= item.id && item.id <= limit
  });
  return (
    <div className="container mx-auto px-40">
      DataTable start:{start}
      currentPage :{currentPage}
      totalPage{totalPage}, limit:{limit}, EKDMTOTAL:{EKDMTOTAL}
      {filterData.map((item, i) => (
        <div className="grid grid-cols-3 gap-0 ">
          <div className=" border-2 border-black pl-4">{item.id}</div>
          <div className=" border-2 border-black pl-4 ">{item.title}</div>
          <div className=" border-2 border-black  pl-4">{item.price}</div>
        </div>
      ))}
      <div className="flex justify-between my-20">
        <div className=" flex gap-7">
          <button onClick={() => handPrev()}>Prev</button>
          Page {currentPage} of {totalPage}
          <button onClick={() => handNext()}>Next</button>
        </div>
        <div>
          Rows per Page
          <select value={limit} 
              onChange={hanf}
              >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
