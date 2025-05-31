import axios from "axios";
import React, { useEffect, useState } from "react";

const InfiniteScroll1 = () => {
  const [data, setData] = useState([]);
  const toShow = 3;
  const [skip, setSkip] = useState(0);
  const[total,setTotal]= useState(0)

  const fetchData = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products?skip=${skip}&limit=10`
    );
    setData(res.data.products);
  };
  useEffect(() => {
    fetchData();
  }, [skip]);

  const handleNext = () => {
    setSkip((prev) => prev + toShow);
  };

  return (
    <div>
      <h1>InfiniteScroll1</h1>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            {item.title}
            {item.id}

            <img src={item.images} className="h-40 w-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll1;
