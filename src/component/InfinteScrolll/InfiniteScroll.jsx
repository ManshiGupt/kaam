import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  let LIMIT = 10;

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      const json = await response.json();
      setLoading(false);
      setData((prev) => [...prev, ...json.products]);
      //  setData(json.products)
      console.log("data", json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);


  useEffect(() => {
    let k= setTimeout(()=>{
        // alert("hdud");
        fetchData();
    },1000)
    return()=>{
        clearTimeout(k);
    }
    
  }, [skip]);


  const handlescroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      setSkip((prev) => prev + LIMIT);
      // fetchData();
    }
  };
  return (
    <div className=" w-full border-solid border-2 border-black ">
      <div className="fixed">{skip}</div>
      {/* <div className='fixed'>{skip}</div> */}
      {data.map((da) => (
        <div className="w-40 border-solid border-2 border-black m-10">
          <div className="w-40">
            {da.id}
            {da.title}
          </div>
        </div>
      ))}

      {loading && <h1>Loading</h1>}
    </div>
  );
};

export default InfiniteScroll;
