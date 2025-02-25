import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
//   const [skip, setSkip] = useState(0);
  let LIMIT = 10;

  const fetchData = async () => {
    try {
        let skip= currentPage * LIMIT;
      const response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );
      const json = await response.json();

      setData(json.products);
      let totalPage = json.total;
      console.log("data", json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePage = (i) => {
    // alert("hdgh");
    setCurrentPage(i);
    // setSkip(currentPage * LIMIT);
  };
  return (
    <div className="pb-20">
      <h1 className="p-20">pagination</h1>
      {/* skip:{skip} */}
      currentPage:{currentPage}
      <div>
        {data.map((data) => (
          <div>
            {data.id}
            {data.title}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-5 items-center px-10">
        {currentPage > 0 && (
          <button onClick={() => setCurrentPage((prev) => prev - 1)}>
            prev
          </button>
        )}
        {[
          ...Array(5)
            .keys()
            .map((da, i) => <div onClick={() => handlePage(i)}>{da + 1}</div>),
        ]}
        {currentPage >= 4 ||
          (currentPage >= 0 && (
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>
              Next
            </button>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
