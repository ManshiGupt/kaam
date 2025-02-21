import React, { useEffect, useState } from "react";
import axios from "axios";

const SwiggyApi = () => {
  const [daata, setDaata] = useState([]);
  const api = async () => {
    try {
      const res = await axios.get(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.65200&lng=77.16630&carousel=true&third_party_vendor=1"
      );
      const resp =  res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info.name;
      if (resp && resp.length > 0) {
        setDaata(resp);
      }else{
        console.log("Data is not found");
        console.log(resp);
      }
      console.log(
        res?.data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
        console("not able to fetch the data")
    }
  };

  useEffect(() => {
    api();
  }, []);

//   const {name}= resp.info
  return (
    <div>
      <h1>Data:</h1>
      <div>
        {/* {daata.map((dat)=>(
            {dat.info.name}
        ))} */}
      </div>
    </div>
  );
};

export default SwiggyApi;
