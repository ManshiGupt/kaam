import axios from "axios";
import { useEffect, useState } from "react";

const Constant = () => {
  const [i, setI] = useState([]);


  const fetchData=async()=>{
    
    try {
        const resp= await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5034865&lng=77.0960163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setI(resp.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    } catch (error) {
        console.log("error while fetching")
    }
  }
  useEffect(()=>{
    fetchData()
  },[])

  return {i};
};

export default Constant;
