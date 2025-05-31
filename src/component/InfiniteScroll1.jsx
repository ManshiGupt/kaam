import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const InfiniteScroll1 = () => {
  const [data, setData] = useState([]);
  const limit = 3;
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState();
  const reff = useRef(null);
  const timer =  useRef(false);
  const fetchData = async () => {
    const res = await axios.get(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );

    setData((prev) => [...prev, ...res.data.products]);
    setTotal(res.total);
  };
 
  const handleSome = () => {
    console.log("chanala",timer)
    if (timer.current)return;
    timer.current = true;
    setTimeout(() => {
      if (reff.current?.getBoundingClientRect().bottom <= window.innerHeight) {
        fetchData();
        console.log(
          "handleSome",
          reff.current?.getBoundingClientRect().bottom <= window.innerHeight
        );
        setSkip((prev) => prev + limit);
      }
    }, 0);
    console.log("chanala",timer)
  };
  useEffect(() => {
    fetchData();
    setSkip((prev) => prev + limit);

    window.addEventListener("scroll", handleSome);

    return () => window.removeEventListener("scroll", handleSome);
  }, []);

  const handleNext = () => {
    setSkip((prev) => prev + limit);
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
      <div ref={reff}></div>
      {/* <button onClick={()=>handleNext()}>load more</button> */}
    </div>
  );
};

export default InfiniteScroll1;
