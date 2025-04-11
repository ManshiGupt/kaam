import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const Search2 = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isBold, setBold] = useState(false);
  let ref= useRef({});
 
  const fetchData = async () => {
    try {

      
      const resp = await axios.get(
        `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
      );

      console.log("resp", resp.data.data);
      const data=resp.data.data;
     console.log("ref",ref.current);
     ref.current[query]=data;
      console.log("refWIthData",ref.current[query])
      setList(data);
      
    } catch (error) {
      console.log("not able to fetch", error);
    }
  };

  useEffect(() => {
    if(query===ref.current[query]){
     return
    }
   


  
    const k = setTimeout(()=>

      fetchData()
    , 300);

   
    return () => clearTimeout(k);
  }, [query]);

  const setQuhandleery = (event) => {
    setQuery(event);
  };
  const flipka=(title)=>{
    const regu= new RegExp(`(${query})`,"gi");
    const part=  title.split(regu);
// console.log("regu",regu)
// console.log("part",part)
    
  return part.map((par,i)=>
   par.toLowerCase()==query.toLowerCase()?<strong className="text-green-800">{par}</strong>:<span>{par}</span>
 
  
  )
    
  }

  
  return (
    <div className=" flex flex-col justify-center">
      <input
        value={query}
        className="border-2 border-black bg-gray-300 flex flex-col justify-center"
        onChange={(e) => setQuhandleery(e.target.value)}
      />
      <ul className="h-40  overflow-y-scroll w-96  flex flex-col justify-center">
      {list.map((data,i)=>(
        <li key={i} className="p-2">
         { flipka(data.title)}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Search2;
