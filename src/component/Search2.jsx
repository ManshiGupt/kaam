import axios from "axios";
import React, { useEffect, useState } from "react";

const Search2 = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isBold, setBold] = useState(false);
  
  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
      );

      console.log("resp", resp.data.data);
      // const regu = new RegExp(query, "g");
      setList(resp.data.data);
      //   const l= list.map((data)=>{
      //     data.
      //   })
      //   console.log(l)

      // return resp.data.data;
    } catch (error) {
      console.log("not able to fetch", error);
    }
  };

  useEffect(() => {
  
    const k = setTimeout(() => {
      fetchData();
    }, 3000);

    const cache = k;
    console.log("k", k);
    console.log("cache", cache);

    return () => clearTimeout(k);
  }, [query]);

  const setQuhandleery = (event) => {
    setQuery(event);
  };
  const flipka=(title)=>{
    
   
    const regu= new RegExp(`(${query})`,"gi");
    // const arryTitle= title.split();
    console.log("regu",regu);
  //   console.log("")
  //   const f= regu.match(arryTitle)
  //  return arryTitle.map((data)=>(data))
    
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
        <li key={i}>
          {flipka(data.title)}
        </li>
      ))}
      </ul>
    </div>
  );
};

export default Search2;
