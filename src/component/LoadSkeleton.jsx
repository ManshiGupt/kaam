import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const LoadSkeleton = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const resp = await axios.get("https://dummyjson.com/products");
      setData(resp.data.products);
      console.log(resp.data.products);
    } catch (error) {}
  };

  useEffect(() => {
    
    fetchData();
  }, []);
  return (
    <div>
      LoadSkeleton
      {data.map((d) => (  
        <div>{d.title}</div>
      ))}
    </div>
  );
};

export default LoadSkeleton;
