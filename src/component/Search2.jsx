import axios from "axios";
import React, { useEffect, useState } from "react";

const Search2 = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://app.vedicpandit.in/get-all-poojas?searchText=${query}&category=&currentPage=1&limit=0`
      );

      console.log("resp", resp.data.data);
      setList(resp.data.data);
    } catch (error) {
      console.log("not able to fetch", error);
    }
  };

  useEffect(() => {
    const k = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(k);
  }, [query]);

  return (
    <div>
      <input
        value={query}
        className="border-2 border-black bg-gray-300"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {list.map((data, i) => (
          <li key={i}>{data.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search2;
