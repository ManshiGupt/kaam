import axios from "axios";
import React, { useEffect, useState } from "react";

const Search2 = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isBold, setBold] = useState(false);
  const obj=[{}];
  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
      );

      console.log("resp", resp.data.data[0].title);
      const regu = new RegExp(query, "g");
      setList(resp.data.data);
      //   const l= list.map((data)=>{
      //     data.
      //   })
      //   console.log(l)

      return resp.data.data;
    } catch (error) {
      console.log("not able to fetch", error);
    }
  };

  useEffect(() => {
    if (query === prev) {
      query.includes();
    }
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

  return (
    <div className=" flex flex-col justify-center">
      <input
        value={query}
        className="border-2 border-black bg-gray-300 flex flex-col justify-center"
        onChange={(e) => setQuhandleery(e.target.value)}
      />
      <ul className="bg-gray-700 h-40  overflow-y-scroll w-96  flex flex-col justify-center">
        {list.map((data, i) => (
          <li key={i} className="bg-gray-400 my-2">
            {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search2;
